import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      {/*   Header   */}
      <Header />
      {/*   Main content   */}
      <main>
        {/* user layout ke child component lekar aana ka liya.. */}
        <Outlet />
      </main>
      {/*   footer   */}
      <Footer />
    </>
  );
}

export default UserLayout;
