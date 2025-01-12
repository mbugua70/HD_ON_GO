/* eslint-disable react-refresh/only-export-components */

import UserDetails from "./userdetails";

import { useOutletContext } from "react-router-dom";
import FleetForm from "./fleetform";

const FleetPage = ({ revalidator, onEdit, userData }) => {
  return (
    <>
      <div className="container">
        <UserDetails
          userData={userData}
          revalidator={revalidator}
          onEdit={onEdit}
        />

        <FleetForm />
      </div>
    </>
  );
};

export default FleetPage;
