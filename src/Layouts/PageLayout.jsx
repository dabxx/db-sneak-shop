import React from "react";
import styles from "../CSS-Files/Layouts-CSS/PageLayout.module.css";

function PageLayout({ children }) {
  return <div className={styles.pageContainer}>{children}</div>;
}

export default PageLayout;
