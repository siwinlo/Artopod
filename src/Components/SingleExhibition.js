import React from "react";
import { DateTime } from "luxon";

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
      <em>{exh.title}</em>
      <p>{exh.description}</p>
      <p>
        Open {open} to {end}
      </p>
      <p>{exh.hours}</p>
      <img src={imgUrl} alt="Image could not be found 🖼"></img>
      <p>{exh.gallery}</p>
      <p>
        Address: {exh.address}, {exh.city}, {exh.zip}
      </p>
      <p>{exh.galleryEmail}</p>
      <p>{exh.phone}</p>
    </div>
  );
}

export default SingleExhibition;
