/* eslint-disable react-refresh/only-export-components */

import UserDetails from "./userdetails";
import { useOutletContext } from "react-router-dom";
import SummaryForm from "./summaryform";



const SummaryPage = ({ revalidator, onEdit, userData }) => {
  return (
    <>
      <div className="container">
        <UserDetails
          userData={userData}
          revalidator={revalidator}
          onEdit={onEdit}
        />

        <SummaryForm />
      </div>
    </>
  );
};

export default SummaryPage;
