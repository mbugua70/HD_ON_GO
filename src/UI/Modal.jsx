import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ children, onClose }) {
  const dialog = useRef(null); // Initialize useRef with null

  useEffect(() => {
    const modal = dialog.current;

    if (modal) {
      modal.showModal(); // Show the modal dialog if supported
    }

    // Clean-up function to close the modal
    return () => {
      if (modal) {
        modal.close(); // Close the modal dialog if supported
      }
    };
  }, []); // Empty dependency array for mount/unmount effect

  // Render the modal using createPortal
  return createPortal(
    <motion.div
      className="backdrop"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="visible"
      animate="visible"
      exit="hidden"
    >
      <motion.dialog
        className="modal"
        ref={dialog}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring" }}
        exit={{ opacity: 0, y: -30 }}
      >
        {children}
      </motion.dialog>
    </motion.div>,
    document.getElementById("modal") // Ensure this matches your HTML structure
  );
}
