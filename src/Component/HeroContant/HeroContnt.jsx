import React, { useState, useEffect } from "react";
import { IoIosPlay } from "react-icons/io";
import "../../index.css"; // Tailwind ও blink animation
import { FaCircleArrowUp } from "react-icons/fa6";
import { RiVoiceprintFill } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";

const prompts = [
  "Describe your design...",
  "An Instagram post for a coffee shop grand opening with a black sign and coffee cup",
  "A minimalist resume with a blue accent",
  "A real estate flyer with photo and pricing",
  "A modern pizza menu with prices and icons and a bold font",
  "A birthday party invitation with balloons and bright colors",
];

const HeroContnt = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const currentText = prompts[textIndex];

    const typing = setInterval(() => {
      setDisplayText(currentText.slice(0, i + 1));
      i++;

      if (i === currentText.length) {
        clearInterval(typing);
        // Next text after 1.5s
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % prompts.length);
          setDisplayText("");
        }, 2000);
      }
    }, 70); // typing speed

    return () => clearInterval(typing);
  }, [textIndex]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">
        <p
          onClick={() => alert("Not contact video")}
          className="flex items-center gap-1 text-sm text-gray-500 border px-3 py-1 rounded-full mb-4 cursor-pointer"
        >
          <IoIosPlay /> <span>See Kodo in action</span>
        </p>

        <h1 className="text-5xl font-semibold text-gray-800">
          Design at the speed of thought.
        </h1>

        <p className="text-gray-500 mt-4">
          Create posters, presentations and menus by prompting AI. From idea to
          editable design in seconds.
        </p>

        {/* Input Box */}
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 w-[750px] max-w-full relative mb-20">
          <input
            type="text"
            placeholder={displayText}
            className="w-full outline-none text-gray-600 bg-transparent placeholder-gray-400"
          />
          <div>
            <div className=" flex justify-between mt-9">
              <label className="flex items-center gap-1 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 duration-300 cursor-pointer px-2 py-1 text-sm">
                <ImAttachment className="text-sm" />
                Attach
                <input type="file" className="hidden" />
              </label>
              <div className=" flex items-center gap-2">
                <div className="relative group inline-block">
                  <RiVoiceprintFill className="text-4xl p-2 rounded-full hover:bg-gray-100 text-gray-700 cursor-pointer" />

                  <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-100 border border-gray-300 text-black text-sm px-2 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Voice
                  </span>
                </div>

                <FaCircleArrowUp className="text-3xl text-gray-700 hover:text-gray-900 rounded-full cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContnt;
