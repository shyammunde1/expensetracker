import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.circle}
        style={{ backgroundColor: "#CC2323" }}
      ></div>
      <div
        className={styles.circle}
        style={{ backgroundColor: "#F4BB4A" }}
      ></div>
      <div
        className={styles.circle}
        style={{ backgroundColor: "#48A14D" }}
      ></div>
    </div>
  );
};

export default Navbar;
