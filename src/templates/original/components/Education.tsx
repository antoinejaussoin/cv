import React from "react";
import marked from "marked";
import { Education } from "../../../types";

interface EducationProps {
  item: Education;
}

export default function EducationComponent({ item }: EducationProps) {
  const description = {
    __html: marked(item.description),
  };

  return (
    <div className="cv-item">
      <h3>
        <strong>{item.school}</strong>
      </h3>
      <h4>{item.diploma}</h4>
      <h4>{item.location}</h4>

      <br />

      <p dangerouslySetInnerHTML={description}></p>
    </div>
  );
}
