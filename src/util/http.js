import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

// fetching single event
export async function fetchUser({ signal }) {
  try {
    // Retrieve user data from local storage
    const storeOne = localStorage.getItem("Auth");
    if (!storeOne) {
      throw new Error("No user data found in local storage.");
    }

    const storeTwo = JSON.parse(storeOne);
    const user_data = storeTwo.user;

    if (!user_data) {
      throw new Error("No user data found in local storage.");
    }
    console.log(user_data);

    return user_data;

  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// updating user
export async function updateUser({ id, user }) {
  try {
    if (user) {
      // Update user data in local storage
      localStorage.setItem("Auth", JSON.stringify({ user }));

      // Retrieve updated user data
      const storeOne = localStorage.getItem("Auth");
      if (!storeOne) {
        throw new Error("Failed to update user data in local storage.");
      }

      const storeTwo = JSON.parse(storeOne);
      const user_data = storeTwo.user;

      if (!user_data) {
        throw new Error("User data not found after update.");
      }

      return user_data;
    } else {
      throw new Error("Invalid user data provided for update.");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
