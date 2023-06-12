import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useTopIns from "../../../Hooks/useTopIns";
import './Ins.css'
//
const PopularInstructors = () => {
  const [ins] = useTopIns("");
  console.log("ins", ins);
  const TopIns = ins.filter((ins) => ins.category === "popular");
  console.log("topIns", TopIns);
  return (
    <div className="mb-6 mt-24">
      <SectionTitle Heading={"Popular Instructors"}></SectionTitle>
      <div className="md:grid m-auto gap-24 grid-cols-3">
        
        {TopIns.map((topIn) => (
          <div className="NameVisibility">
          <img className="h-[400px] w-[500px] top-ins-img" src={topIn.image}/>
          <p className="text-2xl text-center">{topIn.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
