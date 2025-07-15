import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer"
];

const AnimatedTitles = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 500);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="h-6 overflow-hidden mt-5 mb-7">
      <div
        className="flex flex-col transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${index * 1.7}rem)` }} 
      >
        {roles.map((role, i) => (
          <h2 key={i} className="text-lg text-purple-400 font-medium h-6 ">&gt; {role}</h2>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTitles;
