import React from "react";
import dayjs from "dayjs";

function JobCard(props) {
  //   const skills = ["Javascript", "react", "Tailwind CSS"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");
  const skills = props.skills || [];

  return (
    <div className="w-full px-2 sm:px-4 md:px-10 lg:px-32 xl:px-60 my-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-8 py-6 bg-gradient-to-r from-blue-50 via-white to-blue-100 rounded-2xl border border-blue-200 shadow-xl hover:border-blue-500 hover:scale-[1.02] transition-all duration-200">
        <div className="flex flex-col items-start gap-3 w-full md:w-2/3">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900 flex flex-wrap gap-2">
            {props.title}{" "}
            <span className="text-blue-500">@ {props.company}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            {props.type} <span className="mx-1">&#x2022;</span>{" "}
            {props.experience} <span className="mx-1">&#x2022;</span>{" "}
            {props.location}{" "}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm bg-blue-100 text-blue-700 py-1 px-3 rounded-full border border-blue-300 shadow-sm hover:bg-blue-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-end md:items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
          <p className="text-xs sm:text-sm text-gray-500">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`}{" "}
            ago
          </p>
          <a href={props.job_link} target="_blank" rel="noopener noreferrer">
            <button className="px-6 sm:px-10 py-2 rounded-lg border border-blue-400 text-white bg-gradient-to-r from-blue-500 to-blue-400 font-semibold shadow-md hover:from-blue-600 hover:to-blue-500 hover:scale-95 hover:shadow-lg transition-all duration-150">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
