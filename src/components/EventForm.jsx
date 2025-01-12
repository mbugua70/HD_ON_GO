import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useRevalidator } from "react-router-dom";
import { useAnimate, stagger } from "framer-motion";

export default function EventForm({ inputData, onSubmit, children }) {
  const [scope, animate] = useAnimate();
  let revalidator = useRevalidator();
  function handleSubmit(event) {
    event.preventDefault();
    const registration_error_id = "login ba error";
    const registration_error_id_two = "success form";

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);

    const baName = formData.get("ba_name");
    const baPhone = formData.get("ba_phone");
    const baRegion = formData.get("ba_region");

    const notifyError = (msg) => {
      toast.error(`${msg}`, {
        toastId: registration_error_id,
        position: "bottom-center",
        closeButton: false,
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    };

    const notifyErrorTwo = (msg) => {
      toast.success(`${msg}`, {
        toastId: registration_error_id_two,
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    };

    if (baName === "" || baPhone === "" || baRegion === "") {
      notifyError("Please fill in all the required fields!");
      animate(
        "input, textarea",
        { x: [-10, 0, 10, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.05) }
      );
    } else {
      revalidator.revalidate();
      onSubmit({ ...data });
      notifyErrorTwo("Your details have been updated successfully!");
    }
  }

  return (
    <form id="event-form" onSubmit={handleSubmit} ref={scope}>
      <label htmlFor="ba_name">Name</label>
      <input
        type="text"
        name="ba_name"
        id="ba_name"
        className="edit_input"
        placeholder="Enter name"
        defaultValue={inputData?.ba_name ?? ""}
      />

      <label htmlFor="ba_phone">Phone Numbers</label>
      <input
        type="tel"
        name="ba_phone"
        id="ba_phone"
        className="edit_input"
        placeholder="Tel e.g 0728**"
        defaultValue={inputData?.ba_phone ?? ""}
      />

      <label htmlFor="ba_region">Location</label>
      <input
        type="text"
        name="ba_region"
        id="ba_region"
        className="edit_input"
        placeholder="Enter location"
        defaultValue={inputData?.ba_region ?? ""}
      />

      <p className="form-actions">{children}</p>
    </form>
  );
}
