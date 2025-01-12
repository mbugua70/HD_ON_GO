import { Link, useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const UserHeader = () => {
  const locaton = useLocation();
  const pathname = locaton.pathname;

  let isBackExpress;
  let isBackOn;


  isBackOn = pathname === "/on_go/wholesale" || pathname === "/on_go/wholesale/edit" || pathname === "/on_go/summary" || pathname === "/on_go/summry/edit";

  return (
    <>
      <nav>
        <div className=" topmenu left_menu">
        </div>
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

          {pathname === "/" ? "HD ON GO" : ""}
          {pathname === "/registration" ? "Registration" : ""}
          {pathname === "/wholesale" ? "HD ON GO" : ""}
          {pathname === "/wholesale/edit" ? "HD ON GO" : ""}
          {pathname === "/summary" ? "SUMMARY" : ""}
          {pathname === "/summary/edit" ? "SUMMARY" : ""}

        </motion.div>
        <div className=" topmenu right_menu">
          <Link href="index.html">
            <i className="fa fa-home fa-2x"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default UserHeader;
