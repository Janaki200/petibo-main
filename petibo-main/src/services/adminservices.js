import { db } from "../firebase/config"
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    updateDoc,
    deleteDoc
} from "firebase/firestore";

const adminRef = collection(db, "admin")
const serviceRef = collection(db, "service")

class AdminServices {
    async registerAdmin(admin) {
        try {
            return await addDoc(adminRef, admin)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message || "Login failed");
            } else {
                throw new Error("An unknown error occurred during login");
            }
        }
    }

    async login(admin) {
        try {
            const q = query(
                adminRef,
                where("email", "==", admin.email),
                where("password", "==", admin.password),
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

    async fetchAdmin(email) {
        try {
            // Query to fetch the user by email
            const q = query(adminRef, where("email", "==", email));
            const querySnapshot = await getDocs(q);

            // Check if a user document is found
            if (!querySnapshot.empty) {
                // Assuming the document exists, get the first document
                const userDoc = querySnapshot.docs[0].data();
                const user = {
                    name: userDoc.name,
                    phone: userDoc.phoneNumber,
                    location: userDoc.place,
                    role: userDoc.role
                };
                return user; // Return the user details (name and phone number)
            } else {
                throw new Error("Admin not found.");
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message || "Login failed");
            } else {
                throw new Error("An unknown error occurred during login");
            }
        }
    }

    async fetchServiceRequests(email) {
        try {
            const q = query(serviceRef, where("serviceEmail", "==", email)); // Correct condition

            const querySnapshot = await getDocs(q);
            const daycares = querySnapshot.docs.map(doc => {
                const { petName, ownerName, phoneNumber, date, time, specialInstructions, place, serviceEmail, serviceType, status, ownerEmail } = doc.data();
                return { petName, ownerName, phoneNumber, date, time, specialInstructions, place, serviceEmail, serviceType, status, ownerEmail };
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

    async updateRequestStatus(service, scheduledStatus) {
        try {
            const q = query(
                serviceRef,
                where("ownerEmail", "==", service.ownerEmail),
                where("serviceEmail", "==", service.serviceEmail),
                where("petName", "==", service.petName),
                where("date", "==", service.date),
                where("time", "==", service.time)
              );
          
              const snapshot = await getDocs(q);
              
              if (snapshot.empty) {
                throw new Error("No matching service request found.");
              }
          
              // If multiple results, you can choose to update all or just the first one
              const docToUpdate = snapshot.docs[0].ref;
          
              await updateDoc(docToUpdate, {
                status: scheduledStatus
              });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message || "Daycare fetching failed");
            } else {
                throw new Error("An unknown error occurred during daycare fetch");
            }
        }
    }


async deleteServiceRequest(service) {
    try {
      const q = query(
        serviceRef,
        where("ownerEmail", "==", service.ownerEmail),
        where("serviceEmail", "==", service.serviceEmail),
        where("petName", "==", service.petName),
        where("date", "==", service.date),
        where("time", "==", service.time)
      );
  
      const snapshot = await getDocs(q);
  
      if (snapshot.empty) {
        throw new Error("No matching service request found to delete.");
      }
  
      // Delete the first matched document (or loop to delete all if needed)
      const docToDelete = snapshot.docs[0].ref;
      await deleteDoc(docToDelete);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Failed to delete request");
      } else {
        throw new Error("An unknown error occurred while deleting request");
      }
    }
  }
}

export default new AdminServices()