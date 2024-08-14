import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

const skillData = [
  {
    skill: "HTML",
    type: "front",
    color: "coral",
  },
  {
    skill: "CSS",
    type: "front",
    color: "lightskyblue",
  },
  {
    skill: "JS",
    type: "front",
    color: "gold",
  },
  {
    skill: "React",
    type: "front",
    color: "lightseagreen",
  },
  {
    skill: "GIT",
    type: "others",
    color: "orangered",
  },
  {
    skill: "C",
    type: "embedded",
    color: "violet",
  },
  {
    skill: "C++",
    type: "embedded",
    color: "pink",
  },
];
export default skillData;

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
