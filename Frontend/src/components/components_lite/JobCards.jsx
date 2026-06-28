import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCards = ({job}) => {
  console.log(job);
  const navigate = useNavigate();
 
  return (
    <div onClick={()=>navigate(`/description/${job._id}`)} className="p-5 rounded-xl shadow-md bg-white border border-gray-100 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 w-full group">
      <div>
        <h1 className="text-lg font-medium"> {job.name} </h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h2 className="font-bold text-lg my-2">{job.title}</h2>
        <p className="text-sm text-gray-600">
          {
            job.description
          }
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center mt-4">
        <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium border-none" variant="outline">
          {job.position} Open Positions
        </Badge>
        <Badge className="bg-red-50 text-red-600 hover:bg-red-100 font-medium border-none" variant="outline">
          {job.salary} LPA
        </Badge>
        <Badge className="bg-indigo-50 text-primary hover:bg-indigo-100 font-medium border-none" variant="outline">
          {job.location}
        </Badge>
        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium border-none" variant="outline">
          {job.jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
