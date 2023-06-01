"use client";

import { useState } from "react";
import { BigHeader } from "../BigHeader/BigHeader";
import Layout from "../Layout";
import { Navbar } from "../Navbar";

export const BigLayout = ({ component }) => {
  const [headerLoaded, setHeaderLoaded] = useState(false);

  return (
    <>
      <BigHeader setHeaderLoaded={setHeaderLoaded} />
      {headerLoaded ? (
        <div className="relative xl:max-w-[1440px] mx-auto text-sub">
          <Navbar />
          {component}
          <Layout />
        </div>
      ) : null}
    </>
  );
};
