import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUser, updateUser, queryClient } from "../util/http.js";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

import EventForm from "./EventForm.jsx";
import Modal from "../UI/Modal.jsx";
import LoadingIndicator from "../UI/Loadingindicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import ModalIonic from "../UI/Modal_Ionic.jsx";

export default function EditEvent({ userData, onClose, onUpdate, isError,isModalOpen }) {
  const navigate = useNavigate();
  let isPending = false;
  console.log(userData);

  function handleSubmit(formData) {
    const name = formData.ba_name;
    const phone = formData.ba_phone;
    const region = formData.ba_region;
    const updatedUserData = {
      ...userData,
      ba_name: name,
      ba_phone: phone,
      ba_region: region,
    };
    onUpdate(updatedUserData);
    isPending = true;
    onClose();
  }

  let content;

  if (!isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    console.log(isError);
    console.log(error);
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Failed to load the event "}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (userData) {
    content = (
      <EventForm inputData={userData} onSubmit={handleSubmit}>
        <motion.button
          className="button-text"
          onClick={onClose}
          whileTap={{ scale: 1.3 }}
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring" }}
        >
          Cancel
        </motion.button>
        <motion.button
          type="submit"
          className="button"
          whileTap={{ scale: 1.3 }}
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring" }}
        >
          Update
        </motion.button>
      </EventForm>
    );
  }

  return <Modal onClose={onClose}>{content}</Modal>;
  // return <h1>Edit Me</h1>;
  // return <ModalIonic isModalOpen={isModalOpen}>{content}</ModalIonic>
}
