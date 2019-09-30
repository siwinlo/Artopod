import React from "react";
import { DateTime } from "luxon";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function SingleExhibition(props) {
  const exh = props.exh;
  const format = { month: "long", day: "numeric", year: "numeric" };
  const open = DateTime.fromISO(exh.showStart)
    .setLocale("en-US")
    .toLocaleString(format);
  const end = DateTime.fromISO(exh.showEnd)
    .setLocale("en-US")
    .toLocaleString(format);
  const imgUrl = `https://artforum.com${exh.imgUrl}`;

  return (
    <div className="about body">
      <p>
        <em>{exh.title}</em> at {exh.gallery}
      </p>

      <p>{exh.hours}</p>
      <p>{exh.distance.toFixed(2)}mi away</p>
      <p className="multi-line">{exh.description}</p>
      <p>
        Open {open} to {end}
      </p>
      <p>{exh.hours}</p>
      <img
        src={imgUrl}
        alt={exh.imgCaption}
        className="single-exhibition-image"
      ></img>
      <p>{exh.imgCaption}</p>
      <em>{exh.gallery}</em>
      <p>
        Address: {exh.address}, {exh.city}, {exh.zip}
      </p>
      <p>{exh.galleryEmail}</p>
      <p>{exh.phone}</p>
      <div className="expand">
        <ExpandLessIcon />
      </div>
    </div>
  );
}

export default SingleExhibition;
