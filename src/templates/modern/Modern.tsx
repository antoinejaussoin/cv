import { Cv } from "../../types";

type ModernProps = {
  cv: Cv;
};

export default function Modern({ cv }: ModernProps) {
  return <div>{cv.name}</div>;
}
