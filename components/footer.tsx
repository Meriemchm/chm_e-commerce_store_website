import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border-t ">
      <div className="mx-auto py-10">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} 2025 Store, Inc. All rights
          reserverd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
