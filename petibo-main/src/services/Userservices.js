import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";

const userRef = collection(db, "user");
const serviceRef = collection(db, "service")

class UserServices {

  async registeruser(user) {
    return await addDoc(userRef, user);
  }

  async loginuser(user) {
    try {
      const q = query(
        userRef,
        where("email", "==", user.email),
        where("password", "==", user.password),
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error("user not found or incorrect credentials");
      }

      const userDoc = querySnapshot.docs[0].data();
      return userDoc;

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Login failed");
      } else {
        throw new Error("An unknown error occurred during login");
      }
    }
  }

  async fetchUser(email) {
    try {
      // Query to fetch the user by email
      const q = query(userRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      // Check if a user document is found
      if (!querySnapshot.empty) {
        // Assuming the document exists, get the first document
        const userDoc = querySnapshot.docs[0].data();
        const user = {
          name: userDoc.name,
          phone: userDoc.phone,
        };
        return user; // Return the user details (name and phone number)
      } else {
        throw new Error("User not found.");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Login failed");
      } else {
        throw new Error("An unknown error occurred during login");
      }
    }
  }

  async fetchServices() {
    try {
      const q = query(
        collection(db, "admin"),
      );

      const querySnapshot = await getDocs(q);

      const daycares = querySnapshot.docs.map(doc => {
        const { name, email, role, place, phoneNumber } = doc.data();
        return { name, email, role, place, phoneNumber };
      });

      return daycares;

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Daycare fetching failed");
      } else {
        throw new Error("An unknown error occurred during daycare fetch");
      }
    }
  }

  async bookServicecare(req) {
    return await addDoc(serviceRef, req);
  }

  async fetchServiceReq(email){
    try {
      const q = query(serviceRef, where("ownerEmail", "==", email));
      const querySnapshot = await getDocs(q);

      const daycares = querySnapshot.docs.map(doc => {
        const { petName, ownerName, phoneNumber, date, time,specialInstructions, place, serviceEmail, serviceType,status,ownerEmail   } = doc.data();
        return {petName, ownerName, phoneNumber, date, time,specialInstructions, place, serviceEmail, serviceType,status,ownerEmail };
      });

      return daycares;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Daycare fetching failed");
      } else {
        throw new Error("An unknown error occurred during daycare fetch");
      }
    }
  }

}

export default new UserServices();
