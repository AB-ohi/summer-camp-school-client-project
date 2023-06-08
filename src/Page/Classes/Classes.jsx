import { useEffect, useState } from "react";

const Classes = () => {
    const [classes, SetClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetClasses(data);
      });
  }, []);
    return (
        <div>
            <h1>length {classes.length}</h1>
        </div>
    );
};

export default Classes;