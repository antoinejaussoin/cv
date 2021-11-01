import React from "react";
import marked from "marked";
import Pill from "./Pill";
import { Skill } from "../../../types";

interface SkillsProps {
  item: Skill;
}

export default function Skills({ item }: SkillsProps) {
  const description = {
    __html: marked(item.description),
  };

  return (
    <div className="cv-item">
      <p className="period">
        {item.level} - {item.experience} years
      </p>
      <h3>
        <strong>{item.name}</strong>
      </h3>
      {item.related && item.related.length ? (
        <ul className="techs">
          {item.related.map((t) => (
            <li key={t}>
              <Pill text={t} />
            </li>
          ))}
        </ul>
      ) : null}

      <p dangerouslySetInnerHTML={description} />
    </div>
  );
}
