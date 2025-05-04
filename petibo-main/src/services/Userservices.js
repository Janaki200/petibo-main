import { db } from "@/firebase/config";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Define a reference to the "admin" collection in Firestore
const UserRef = collection(db, "user");

class UserServices {
  /**
   * Registers a new admin user.
   * @param user - The admin data to be registered.  This should come from your UI form.
   * @returns A Promise that resolves with the result of adding the document.
   */
  async registerUser(user) {
    try {
      const docRef = await addDoc(adminRef, admin);
      console.log("user registered with ID: ", docRef.id); // Good for debugging
      return { success: true, adminId: docRef.id }; // Return a success object
    } catch (error) {
      console.error("Error registering user: ", error);
      throw error; // Re-throw the error so the UI can handle it
    }
  }

  /**
   * Logs in an admin user.
   * @param admin - The admin data containing email, password, and role from the UI form.
   * @returns A Promise that resolves with the admin data if login is successful.
   * @throws An error if the admin is not found or the credentials are incorrect.
   */
  async loginUser(user) {
    try {
      const q = query(
        adminRef,
        where("name", "==", admin.name),
        where("email", "==", admin.email), // IMPORTANT:  In real apps, hash the password.
        where("password", "==", admin.password)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error("Admin not found or incorrect credentials");
      }

      const adminData = querySnapshot.docs[0].data();
      console.log("User logged in: ", userData);
      return { success: true, user: userData }; // Return success and admin data
    } catch (error) {
      console.error("Error logging in admin: ", error);
      throw error; // Re-throw to be handled in UI
    }
  }
}

const UserServices = new UserServices(); // Create an instance.  Important for UI usage.
export default UserService; //  Make sure to export the instance, not the class.
