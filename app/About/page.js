

"use client";
const teamMembers = [
  { name: "Abhiram", role: "Backend Developer" },
  { name: "Aadarsh", role: "Project Manager" },
  { name: "Alok", role: "Frontend Developer" },
  { name: "Aryan", role: "Frontend Developer" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8">
          Meet the Team
        </h1>
        <p className="text-gray-600 mb-12">
          We are a passionate team dedicated to building amazing solutions. From project
          management to backend and frontend development, we make magic happen!
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Name */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h2>
              {/* Role */}
              <p className="text-yellow-500 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
