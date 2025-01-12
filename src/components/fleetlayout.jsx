import { useState } from "react";
import { useRevalidator } from "react-router-dom";
import FleetPage from "./fleet";
import EditEvent from "./EditEvent";

export default function FleetLayout() {
  let revalidator = useRevalidator();

  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(() => {
    // Load initial userData from localStorage or another source
    const savedData = localStorage.getItem("Auth");
    console.log(savedData);
    return savedData ? JSON.parse(savedData) : null;
  });

  const handleUpdateUserData = (updatedUserData) => {
    setUserData(updatedUserData);
    localStorage.setItem("Auth", JSON.stringify(updatedUserData));
    // Update local storage
    // Optionally trigger revalidation if using revalidator
    revalidator.revalidate();
  };

  if (!userData) {
    setIsError(true);
  }
  return (
    <>
      <FleetPage
        revalidator={revalidator}
        onEdit={() => setIsModalOpen(true)}
        userData={userData}
      />

      {isModalOpen && (
        <EditEvent
          userData={userData}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdateUserData}
          isError={isError}
        />
      )}
    </>
  );
}
