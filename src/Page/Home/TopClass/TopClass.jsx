import React from "react";
import useClasses from "../../../Hooks/useClasses";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ClassCart from "./ClassCart";
import './ClassCart.css'

const TopClass = () => {
  const [classes] = useClasses("");
  console.log(classes);
  const TopClass = classes.filter((cls) => cls.category === "popular");
  console.log(TopClass);

  return (
    <div className="mt-24">
      <SectionTitle
      Heading="Top Class"
      ></SectionTitle>
      <div>
        <div className="card md:grid grid-cols-2 bg-fixed bg-[rgba(6, 77, 136, 0.541] bg-img shadow-xl">
      {TopClass.map((cls) => (
        <ClassCart
        key = {cls._id}
        cls = {cls}
        ></ClassCart>
      ))}
      </div>
      </div>
      <div className="card w-96 shadow-xl image-full"></div>
    </div>
  );
};

export default TopClass;
