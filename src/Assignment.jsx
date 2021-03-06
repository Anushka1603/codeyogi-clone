import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { VscLinkExternal } from "react-icons/vsc";
import { DateTime } from "luxon";
import Popup from "./Popup";
import urlSubmission from "./Submission";

function Assignment(props) {
  const { Form_Data, savedSubmissionLink } = urlSubmission(props);

  let navigate = useNavigate();

  const dateString = props.date;
  const dateObject = DateTime.fromISO(dateString);
  const dateHumanReadable = dateObject.toLocaleString(DateTime.DATETIME_MED);

  const dueDatePassed = true;
  return (
    <>
      {Form_Data.formData.showPopup && (
        <Popup
          type="text"
          placeHolder="Submission link "
          onPopupClose={Form_Data.onPopupClose}
          touched={Form_Data.touched}
          validUrl={Form_Data.formData.validUrl}
          urlError={Form_Data.formData.urlError}
          onBlur={Form_Data.handleBlur}
          onSubmit={Form_Data.onSubmission}
          value={Form_Data.values.submissionLink}
          onChange={Form_Data.onInputChange}
        />
      )}
      <div className=" p-4 m-4 bg-white space-y-4 shadow-2xl rounded-lg grow ">
        <div onClick={() => navigate(`/assignments/${props.detailId}/detail`)}>
          <div className="flex text-xl font-bold space-x-4   ">
            <h1 className="space-x-2">
              #{props.count} {props.about}
              <span className="text-gray-500">({dateHumanReadable})</span>
            </h1>
          </div>

          <div className="flex justify-between  ">
            <div className="space-y-2 ">
              <div className=" text-xl text-red-400  ">
                <span className="mr-2"> Due Date:</span>
                {DateTime.fromISO(props.dueDate).toLocaleString(
                  DateTime.DATETIME_MED
                )}
                {dueDatePassed && (
                  <h1 className="  text-red-400 ">
                    (Submission will count as late now)
                  </h1>
                )}
              </div>
            </div>
            <h1 className="text-green-800 font-bold text-xl">SUBMITTED</h1>
          </div>
        </div>
        <div className="flex justify-between  ">
          <div onClick={Form_Data.onShowPopup} className=" p-4 flex ">
            <div className="text-green-700 mt-2 text-2xl">
              <IoIosCheckmarkCircleOutline />
            </div>
            <div className="font-bold text-xl m-2 text-green-700 ">
              Re-submit
            </div>
          </div>
          <span className=" border-r-2 pl-[58px] border-gray-300" />
          {props.href[0] && (
            <>
              {" "}
              <a
                href={savedSubmissionLink}
                target="blank"
                className="p-4 flex "
              >
                <div className="text-indigo-400 mt-3 text-xl">
                  <VscLinkExternal />
                </div>
                <div className="text-xl font-bold m-2   underline text-indigo-400">
                  See Your Submission
                </div>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Assignment;
