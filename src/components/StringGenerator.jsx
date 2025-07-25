import React, { useEffect, useState } from "react";

const StringGenerator = () => {
  const [strLength, setStrLength] = useState(8);
  const [str, setStr] = useState("");

  const genString = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let temp = "";

    for (let i = 0; i < strLength; i++) {
      temp += chars[Math.floor(Math.random() * chars.length)];
    }
    setStr(temp);
  };

  const getLength = (e) => {
    e.preventDefault();

    if (e.target.value > 30) {
      alert("Length should be less or equal to 30");
    } else {
      setStrLength(e.target.value);
    }
  };

  useEffect(() => {
    genString();
  }, [strLength]);


  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-5">
      <input type="number" onChange={getLength} className="border border-slate-700 rounded-sm" />
      <h2 className="text-2xl font-bold text-slate-600">{str}</h2>
    </div>
  );
};

export default StringGenerator;
