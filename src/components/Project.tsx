import React from "react";
import marked from "marked";
import "./Project.css";
import ParallaxImage from "./ParallaxImage";
import ResponsiveImage from "./ResponsiveImage";
import { Project } from "../types";

interface ProjectProps {
  item: Project;
}

export default function ProjectComponent({ item }: ProjectProps) {
  const description = {
    __html: marked(item.shortDescription),
  };

  return (
    <div className="project-item">
      <ParallaxImage
        width={430}
        height={400}
        onClick={() => {
          window.location.href = item.website;
        }}
      >
        <div className="project-card">
          <ResponsiveImage sources={item.pictures} alt={item.description} />
          <div className="project-details">
            <h4>{item.name}</h4>
            <p className="link">{item.website}</p>
            <p dangerouslySetInnerHTML={description}></p>
          </div>
        </div>
      </ParallaxImage>
    </div>
  );
}
