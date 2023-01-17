import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I have degree in microbiology and biotechnology. I also have a PGDE certificate in Educational management. 
 I am currently acquiring skills in frontend software development through Tech4Dev, Women Techsters Fellowship program. I have experience in teaching and quality control microbiology.
        </p>

        <br />

        <p className="text-xl">
        Skills: React, HTML, CSS, JavaScript, GitHub, UX/UI design, Node.js and TypeScript. I am a team player with excellent communication skill, i have the ability to learn fast, problem solving, Microsoft, PowerPoint, Excel. I am always ready to learn new skills concerning web and android development. Looking forward to any job opportunity related to my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
