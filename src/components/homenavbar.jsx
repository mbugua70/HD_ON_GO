import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const HomeNavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <>
      <nav>
        <div className=" topmenu left_menu"></div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring" }}
          className=" topmenu centered_menu"
        >
          {pathname === "/" ? "HD ON GO" : "registration"}
        </motion.div>
        <div className=" topmenu rigt_menu">
          <Link href="index.html">
            <i className="fa fa-home fa-2x"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default HomeNavBar;
