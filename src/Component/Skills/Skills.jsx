import React from 'react';
import "./Skills.css";
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";


const Skills = () => {
  return (
    

    <section className="skills section" id="skills">

        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
            
        <div className="skills_container container grid">
        <Frontend/>
       <Backend/>
        </div>
    </section>
  )
}

export default Skills;
