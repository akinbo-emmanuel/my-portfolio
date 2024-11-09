"use client";

import { TypeAnimation } from "react-type-animation";

const Role = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Web3 Frontend Engineer",
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          "Smart Contract Developer",
          3000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1.25rem ", display: "inline-block" }}
        repeat={Infinity}
      />
    </>
  );
};

export default Role;
