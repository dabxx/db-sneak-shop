import React from "react";
import { Outlet } from "react-router-dom";

import styles from "../CSS-Files/Layouts-CSS/Layout.module.css";
import Nav from "../components/Nav";
import ShippingHeader from "../components/ShippingHeader";

function Layout() {
  return (
    <>
      <ShippingHeader />
      <Nav />
      <div className={styles.appContent}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
