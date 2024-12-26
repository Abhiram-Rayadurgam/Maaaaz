"use client";
import Image from "next/image";

const teamMembers = [
  { name: "Abhiram", role: "Backend Developer", photo: "/abhiram.jpeg" },
  { name: "Adarsh", role: "Project Manager", photo: "/adarsh.jpeg" },
  { name: "Alok", role: "Frontend Developer", photo: "/alok.jpeg" },
  { name: "Aryan", role: "Frontend Developer", photo: "/aryan.jpeg" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-emerald-950 mb-12">Meet the Team</h1>
        <p className="text-gray-600 text-lg mb-16">
          We are a passionate team dedicated to building amazing solutions. From project
          management to backend and frontend development, we make magic happen!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100  rounded-2xl p-10 shadow-2xl hover:shadow-3xl border-2 border-emerald-950 transition-shadow duration-300"
            >
              <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={`${member.name}'s photo`}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">{member.name}</h2>
              <p className="text-emerald-950 text-xl font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
