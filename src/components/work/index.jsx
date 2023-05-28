import React from "react";
import Tag from "../tags";
import rental from "../../assets/rental.png";
import ambiance from "../../assets/ambiance.png";

const Work = () => {
  const missions = [
    {
      id: 0,
      enterprise: rental,
      mission:
        "Designing rental experiences in stores for the #1 sport retailer in France. ",
      recap:
        "In this project, I am in charge of in-stores experiences for a rental solution deployed in 3 countries. My role is to design enjoyable experiences and screens that the sellers can find in the internal app to be able to propose the best rental experience to the Decathlon customer. [TEXT WIP]",
      tags: ["Product design", "UX Research", "Prototype", "Figma"],
      ambiance: [],
    },
    {
      id: 1,
      enterprise: rental,
      mission:
        "Designing rental experiences in stores for the #1 sport retailer in France. ",
      recap:
        "In this project, I am in charge of in-stores experiences for a rental solution deployed in 3 countries. My role is to design enjoyable experiences and screens that the sellers can find in the internal app to be able to propose the best rental experience to the Decathlon customer. [TEXT WIP]",
      tags: ["Product design", "UX Research", "Prototype", "Figma"],
      ambiance: [],
    },
  ];
  return (
    <>
      {missions.map((mission) => {
        return (
          <div className="md:flex items-center py-5" key={mission.id}>
            <div className="md:w-1/2 w-full space-y-5 py-10 ">
              <img src={mission.enterprise} alt="" />
              <h1 className="text-xl font-bold">{mission.mission}</h1>
              <p className="max-w-2xl">{mission.recap}</p>
              <span className="flex space-x-2 flex-wrap">
                {" "}
                {mission.tags.map((tag) => {
                  return <Tag name={tag} key={tag} />;
                })}
              </span>
            </div>
            <div className="md:w-1/2 w-full">
              <img src={ambiance} alt="" className="max-w-full" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Work;
