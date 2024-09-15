import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModelComponent from "./Components/ModelComponent";
import { ImCross } from "react-icons/im";
import "./App.css";

const App = () => {
  const desc = [
    "A pistol is a type of handgun designed to be operated with one hand. It is typically small, lightweight, and semi-automatic, making it a common choice for personal defense, law enforcement, and military personnel.",
    "A spanner is a hand tool used to provide grip and mechanical advantage in applying torque to turn objects—usually rotary fasteners, such as nuts and bolts—or keep them from turning. ",
    "A hammer is a hand tool used for driving nails, breaking objects, or fitting parts together. It consists of a heavy metal head attached to a sturdy handle. ",
  ];

  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (desc) => {
    setDescription(desc);
    setIsModalOpen(!isModalOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-[900px] mx-auto relative">
      <Slider {...settings}>
        <div className="p-2"> {/*To make gap between the cards*/}
          <div
            className="bg-gray-300 h-60 flex justify-center items-center cursor-pointer"
            onClick={() => handleClick(desc[1])}
          >
            <ModelComponent modelPath="/spanner/scene.gltf" />
          </div>
        </div>

        <div className="p-2">
          <div
            className="bg-gray-300 h-60 flex justify-center items-center cursor-pointer"
            onClick={() => handleClick(desc[0])}
          >
            <ModelComponent modelPath="/pistol/scene.gltf" />
          </div>
        </div>

        <div className="p-2">
          <div
            className="bg-gray-300 h-60 flex justify-center items-center cursor-pointer"
            onClick={() => handleClick(desc[2])}
          >
            <ModelComponent modelPath="/character/scene.gltf" />
          </div>
        </div>
      </Slider>

      {/* div to show the description */}
      {isModalOpen && (
        <div className="translate-x-[300px] translate-y-[30px] bg-zinc-900 w-80 h-72 p-4 text-zinc-400 flex-col ">
          <button
            className="mb-6 px-4 py-2 bg-red-500 rounded"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <ImCross />
          </button>
          <p>{description}</p>
          
        </div>
      )}
    </div>
  );
};

export default App;
