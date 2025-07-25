import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5 pt-5">
        <h1 className="text-3xl font-bold">CODEXINTERNS PROJECTS</h1>
        <div className="flex gap-4">
          <Link
            className="bg-slate-700 text-white font-semibold px-3 py-1.5 rounded-xl hover:bg-slate-400"
            to={"/translator"}
          >
            Project 1
          </Link>
          <Link
            className="bg-slate-700 text-white font-semibold px-3 py-1.5 rounded-xl hover:bg-slate-400"
            to={"/string_generator"}
          >
            Project 2
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
