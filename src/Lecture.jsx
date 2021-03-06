import React from "react";
import { VscLinkExternal } from "react-icons/vsc";
import MDEditor from "@uiw/react-md-editor";
import { DateTime, Duration } from "luxon";

function Lecture({
  created_at,
  topic,
  start_time,
  end_time,
  id,
  recording_url,
}) {
  const date1 = DateTime.fromISO(start_time);
  const date2 = DateTime.fromISO(end_time);

  const diff = date1.diff(date2, ["hours", "minutes", "seconds"]);

  const stringDue = diff.toISO();
  const duration = Duration.fromISO(stringDue).toFormat("hhmmss");

  const dateString = created_at;
  const dateObject = DateTime.fromISO(dateString);
  const dateHumanReadable = dateObject.toLocaleString(DateTime.DATETIME_MED);

  return (
    <div className=" p-4 rounded-lg m-4 bg-white space-y-4 h-fit hover:drop-shadow-2xl">
      <div className="flex flex-col ">
        <div className="flex space-x-4 font-bold text-xl ">
          <h1>
            Lecture #{id - 2}{" "}
            <span className="text-gray-500">({dateHumanReadable})</span>
          </h1>
        </div>
        <h1 className="text-gray-500">Duration {duration} </h1>
      </div>
      <div className="space-y-4">
        <div className="pl-10 list-disc font-bold text-xl">
          <MDEditor.Markdown className="markdown" source={topic} />
        </div>
      </div>
      <a
        target="blank"
        href={recording_url}
        className="flex text-lg font-bold space-x-2 text-gray-500 pt-6 items-center justify-center"
      >
        <VscLinkExternal />
        <h1>Watch/Download Recording</h1>
      </a>
    </div>
  );
}

export default Lecture;
