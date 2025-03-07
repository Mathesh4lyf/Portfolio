import React from "react";
import "./mywork.css";
import { services } from "../../assets";
import { myWorkData } from "../../assets/mywork_data";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Mywork = () => {
  return (
    <div className="mywork border">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img
          src={services}
          alt="service"
          className="rotate-12 skew-x-12 w-32 h-32 object-cover"
        />
      </div>
      <div className="mywork-container">
        {myWorkData.map(({ desc, id, name, github, link, image }) => {
          return (
            <div key={id}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2 mt-8">
                    <a href={link} target="_blank">
                      <img
                        src={image}
                        alt={name}
                        // width={700}
                        // height={700}
                        className="rounded shadow-xl hover:opacity-70 w-4/5 h-full"
                      />
                    </a>
                  </div>
                  <div className="md:w-1/2 mt-12">
                    <h1 className="text-4xl font-bold mb-6">{name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {desc}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 gap-4">
                      <a href={github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                      <a href={link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mywork;
