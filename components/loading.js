import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <section className="flex justify-center  items-center min-h-screen">
      <span className="text-2xl text-indigo-400">
        <ImSpinner2 className="animate-spin" />
      </span>
    </section>
  );
};

export default Loading;