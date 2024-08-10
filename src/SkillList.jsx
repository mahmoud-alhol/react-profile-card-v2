import React from "react";
import skillData from ".";

function SkillList() {
  return (
    <div className="skill-list">
      {skillData.map((skill) => (
        <Skill skill={skill.skill} type={skill.type} color={skill.color} key={skill.skill}/>
      ))}
    </div>
  );
}

function Skill({ skill, color, type }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{skill}</span>
      <span>
        {type === "front" && "🔥"}
        {type === "embedded" && "🤖"}
        {type === "others" && "💪"}
      </span>
    </div>
  );
}

export default SkillList;
