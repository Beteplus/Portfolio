import React, { useEffect, useState } from "react";
import { projectData, projectNav } from "./Data";
import WorksItem from "./WorksItem";

function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectData);
    } else {
      const newProject = projectData.filter((project) => {
        return project.catagory.toLowerCase() === item.name;
      });
      setProjects(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work_filters">
        {projectNav.map((navItem, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`work_item ${active === index ? "active" : ""}`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      <div className="work_container container grid">
        {projects.map((item) => (
          <WorksItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Works;
