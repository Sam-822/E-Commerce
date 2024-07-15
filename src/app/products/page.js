"use client";
import React, { useEffect } from "react";
import Categories from "../component/Categories";

const page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <Categories />
    </div>
  );
};

export default page;
