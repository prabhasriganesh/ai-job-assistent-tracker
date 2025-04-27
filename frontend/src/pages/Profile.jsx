import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/dashboard"); 
  };

  const userProfile = {
    name: "Prabha Sri",
    jobTitle: "Front-End Software Engineer",
    bio: "Passionate about creating efficient and scalable solutions. Experienced in full-stack development and problem-solving.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "HTML"],
    workExperience: [
      {
        title: "Junior Software Engineer",
        company: "Tech Company",
        duration: "Jan 2022 - Present",
        description:
          "Worked on scaling and optimizing backend services for large-scale applications.",
      },
      {
        title: "Frontend Developer",
        company: "Web Solutions",
        duration: "Aug 2019 - Dec 2021",
        description: "Developed modern web applications with React and Redux.",
      },
    ],
    education: {
      degree: "B.Tech in Information technology",
      university: "Sri Shakthi Institute of Engineering and Technology",
      graduationYear: 2026,
    },
    contact: {
      email: "prabha@gmail.com",
      phone: "+91 7356289635",
      linkedin: "https://linkedin.com/in/prabhasri",
      github: "https://github.com/prabhasriganesh",
    },
  };

  return (
    <div className="bg-gradient-to-l from-slate-950 to-slate-900 font-manrope mt-12">
      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto ml-16 md:ml-20">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Profile</h1>
              <p className="text-gray-400 mt-2">
                Edit and view your profile details
              </p>
            </div>
            <button
              onClick={handleEditClick}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
            >
              <IoClose size={20} />
            </button>
          </header>

          {/* Profile Section */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700/30 shadow-lg">
            <div className="flex items-center">
              {/* Profile Picture */}
              <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center">
                {/* Replace this with actual user profile picture */}
                <span className="text-3xl text-white">
                  {userProfile.name[0]}
                </span>
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-semibold text-white">
                  {userProfile.name}
                </h2>
                <p className="text-gray-400 text-sm">{userProfile.jobTitle}</p>
                <p className="text-gray-300 mt-2">{userProfile.bio}</p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Skills</h3>
              <ul className="mt-2 text-gray-400">
                {userProfile.skills.map((skill, index) => (
                  <li key={index} className="inline-block mr-4 text-sm">
                    #{skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Work Experience Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">
                Work Experience
              </h3>
              <div className="mt-4 space-y-4">
                {userProfile.workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-700/30"
                  >
                    <h4 className="text-lg font-semibold text-white">
                      {job.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{job.company}</p>
                    <p className="text-gray-500 text-xs">{job.duration}</p>
                    <p className="text-gray-300 mt-2">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Education</h3>
              <div className="bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-700/30">
                <h4 className="text-lg font-semibold text-white">
                  {userProfile.education.degree}
                </h4>
                <p className="text-gray-400 text-sm">
                  {userProfile.education.university}
                </p>
                <p className="text-gray-500 text-xs">
                  Graduated in {userProfile.education.graduationYear}
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-2 text-gray-400 mt-2">
                <p>Email: {userProfile.contact.email}</p>
                <p>Phone: {userProfile.contact.phone}</p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href={userProfile.contact.linkedin}
                    className="text-blue-400 hover:text-purple-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userProfile.contact.linkedin}
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href={userProfile.contact.github}
                    className="text-blue-400 hover:text-purple-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userProfile.contact.github}
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
