import React from "react";
import marked from "marked";

interface ProfileProps {
  profile: string;
}

export default function Profile({ profile }: ProfileProps) {
  const description = {
    __html: marked(profile),
  };

  return <div className="cv-item" dangerouslySetInnerHTML={description}></div>;
}
