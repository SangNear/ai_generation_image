import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);
  const navigate = useNavigate();
  const reloadPage = () => {
    navigate(0);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const imageResult = await generateImage(input);
      console.log(imageResult);

      if (imageResult) {
        setIsImageLoaded(true);
        setImage(imageResult);
        setInput("");
      }
    } else {
      toast.error("Input it not empty");
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   console.log(image);

  // }, [image])

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div className="">
        <div className="relative overflow-hidden w-full flex flex-col items-center justify-center">
          <img src={image} alt="" className="max-w-sm rounded" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={!loading ? "hidden" : ""}>Loading...</p>
        {!isImageLoaded ? (
          <div className="flex w-full bg-neutral-500 text-white text-sm p-2 mt-10 rounded-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe what you want to generate"
              className="flex-1 bg-transparent outline-none ml-8 w-full"
            />
            <button
              type="submit"
              className="bg-zinc-900 px-4  py-2 rounded-full"
            >
              Generate
            </button>
          </div>
        ) : (
          <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
            <p
              onClick={reloadPage}
              className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            >
              Generate Another
            </p>
            <a
              download
              className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
              href={image}
            >
              Download
            </a>
          </div>
        )}
      </div>
    </motion.form>
  );
};

export default Result;
