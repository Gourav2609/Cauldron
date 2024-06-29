import React, { useRef, useEffect } from "react";
import PromptCard from "./PromptCard";
import Marquee from "react-fast-marquee";

export default function Prompt() {
  const scrollContainer = useRef(null);

  const handleMouseEnter = () => {
    scrollContainer.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    scrollContainer.current.style.animationPlayState = 'running';
  };

  const promptData = [
    {
      number: 1,
      prompt: "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/PD6Ayhv-jqU"
    },
    {
      number: 2,
      prompt: "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/R88PLJ1ikfM"
    },
    {
      number: 3,
      prompt: "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/ZxhzXUz7gF8"
    },
    {
      number: 4,
      prompt: "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/PD6Ayhv-jqU"
    }
  ];

  return (
    <div className="wrapper flex flex-col px-4">
      <div className="flex flex-col">
        <p className="py-2 text-white">
          The Cauldron can produce a variety of content, from short clips to
          extended videos, all while upholding exceptional visual quality and
          adhering to user prompts.
        </p>
        <p className="py-2 text-white">
          Explore a selection of our latest collections.
        </p>
        <div className="h-0.5 bg-[#3A3F45]"></div>
      </div>

      <div className="w-full overflow-hidden py-2">
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="black"
          gradientWidth={50}
          pauseOnHover={true}
        >
          {promptData.map((data, index) => (
            <div key={index} className="inline-block px-3 py-2">
              <PromptCard
                number={data.number}
                prompt={data.prompt}
                src={data.src}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
