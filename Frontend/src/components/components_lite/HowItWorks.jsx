import React from 'react';
import { UserPlus, FileText, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <UserPlus className="w-8 h-8 text-primary" />,
      title: "Create Account",
      description: "Sign up and complete your profile to get started on your job hunt journey."
    },
    {
      id: 2,
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Find Jobs",
      description: "Search and apply for jobs that match your skills, experience, and interests."
    },
    {
      id: 3,
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Get Hired",
      description: "Connect with top employers, interview, and land your dream job."
    }
  ];

  return (
    <div className="bg-gray-50 py-20 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            How <span className="text-primary">Job Hunt</span> Works
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get started in just three simple steps and accelerate your career growth with top companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
