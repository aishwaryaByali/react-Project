import { useEffect } from "react";

const UserFunction = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("user Function call after every sec");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="user-comp">
      <h2>Name : Aishwarya Function</h2>
      <h3>Location: Mumbai Function</h3>
    </div>
  );
};

export default UserFunction;
