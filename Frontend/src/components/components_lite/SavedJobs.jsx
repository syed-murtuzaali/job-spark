import React from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const SavedJobs = () => {
  const { savedJobs } = useSelector((store) => store.job);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Saved Jobs
            </h1>
            <p className="text-gray-500 mt-1">
              Manage all the jobs you've saved for later.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              {savedJobs?.length || 0} Saved Jobs
            </span>
          </div>
        </div>

        {/* Empty State */}
        {!savedJobs || savedJobs.length <= 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border p-16 text-center">
            <div className="text-6xl mb-4">📌</div>

            <h2 className="text-2xl font-bold text-gray-800">
              No Saved Jobs
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't saved any jobs yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {savedJobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="h-full"
              >
                <Job1 job={job} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;