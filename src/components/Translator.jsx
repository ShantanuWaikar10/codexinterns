import React, { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [text, setText] = useState("");
  const [option, setOption] = useState("");
  const [converetedText, setConvertedText] = useState("");

  const captureText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const captureOption = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  const convertText = async () => {
    const options = {
      method: "POST",
      url: "https://google-translator9.p.rapidapi.com/v2",
      headers: {
        "x-rapidapi-key": "4218e772d8mshd3036d10d2f0012p1a8adbjsnbdbc9d7a30a6",
        "x-rapidapi-host": "google-translator9.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        q: `${text}`,
        source: "en",
        target: `${option}`,
        format: "text",
      },
    };
    try {
      const response = await axios.request(options);
      setConvertedText(response.data?.data?.translations[Number(0)]?.translatedText)
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <div className="h-screen w-full bg-slate-100 flex items-center justify-center flex-col gap-y-16">
        <div className="flex items-center justify-center gap-x-5 pt-20">
          <input
            type="text"
            placeholder="Enter your text"
            onChange={captureText}
            className="w-96 h-12 border-slate-800 rounded-lg px-5 flex items-center justify-center"
          />
          <div>
            <label htmlFor="">Choose target language: </label>
            <select name="language" onChange={captureOption}>
              <option value="">Select</option>
              <option value="hi">Hindi</option>
              <option value="kn">Kannada</option>
              <option value="bn">Bengali</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-slate-700 text-white px-2 h-10 rounded-lg cursor-pointer hover:bg-slate-500"
            onClick={convertText}
          >
            Convert
          </button>
        </div>
        <div>
          <p className="h-80 w-[800px] text-black">
            {converetedText}
          </p>
        </div>
      </div>
    </>
  );
};

export default Translator;
