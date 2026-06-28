import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const AppliedJob = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Applied Jobs
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Track the status of all your job applications.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border">
        <Table>
          <TableCaption className="py-4 text-gray-500">
            Recent Applied Jobs
          </TableCaption>

          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="font-semibold text-gray-700">
                Date
              </TableHead>

              <TableHead className="font-semibold text-gray-700">
                Job Title
              </TableHead>

              <TableHead className="font-semibold text-gray-700">
                Company
              </TableHead>

              <TableHead className="text-right font-semibold text-gray-700">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allAppliedJobs.length <= 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-12 text-gray-500"
                >
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-lg font-semibold">
                      No Applications Yet
                    </p>

                    <p className="text-sm text-gray-400">
                      You haven't applied for any jobs yet.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              allAppliedJobs.map((appliedJob) => (
                <TableRow
                  key={appliedJob._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="font-medium text-gray-700">
                    {appliedJob?.createdAt.split("T")[0]}
                  </TableCell>

                  <TableCell className="font-semibold text-gray-800">
                    {appliedJob.job?.title}
                  </TableCell>

                  <TableCell className="text-gray-600">
                    {appliedJob.job?.company.name}
                  </TableCell>

                  <TableCell className="text-right">
                    <Badge
                      className={`capitalize px-3 py-1 text-white rounded-full
                        ${
                          appliedJob?.status === "rejected"
                            ? "bg-red-500 hover:bg-red-500"
                            : appliedJob?.status === "accepted"
                            ? "bg-green-600 hover:bg-green-600"
                            : "bg-amber-500 hover:bg-amber-500"
                        }`}
                    >
                      {appliedJob?.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AppliedJob;