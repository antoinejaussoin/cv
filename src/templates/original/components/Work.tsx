import moment from "moment";
import marked from "marked";
import Pill from "./Pill";
import "./Work.css";
import { DateRange, Job } from "../../../types";

const buildPeriod = (dates: DateRange) => {
  const from = moment(dates.from, "YYYY-MM-DD").format("MMMM YYYY");
  if (!dates.to) {
    return from + " - Present";
  }
  const to = moment(dates.to, "YYYY-MM-DD").format("MMMM YYYY");
  return from + " - " + to;
};

interface WorkProps {
  item: Job;
  displayDetails: boolean;
}

export default function WorkComponent({ item, displayDetails }: WorkProps) {
  const description = {
    __html: marked(item.description),
  };

  return (
    <div className="cv-item work">
      <p className="period">{buildPeriod(item.dates)}</p>

      <h3>
        <strong>{item.title}</strong>
      </h3>
      <h4>
        {item.company}, {item.type}
      </h4>

      <ul className="techs">
        {item.techs.map((t) => (
          <li key={t}>
            <Pill text={t} />
          </li>
        ))}
      </ul>

      <a href={item.website}>{item.website}</a>

      {displayDetails ? (
        <div className="description">
          <p dangerouslySetInnerHTML={description} />
        </div>
      ) : null}
    </div>
  );
}
