"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamData = [
  {
    department: "Management",
    members: [
      { name: "김현종", position: "CEO", image: "/team1.jpg" },
      { name: "이서준", position: "COO", image: "/team2.jpg" },
    ],
  },
  {
    department: "Engineering",
    members: [
      { name: "박민지", position: "Lead Developer", image: "/team3.jpg" },
      { name: "최영훈", position: "Backend Developer", image: "/team4.jpg" },
      { name: "정하은", position: "Frontend Developer", image: "/team5.jpg" },
    ],
  },
  {
    department: "Marketing",
    members: [
      { name: "이수빈", position: "Marketing Manager", image: "/team6.jpg" },
      { name: "한동우", position: "SEO Specialist", image: "/team7.jpg" },
    ],
  },
  {
    department: "Customer Support",
    members: [
      { name: "김지훈", position: "Customer Service Lead", image: "/team8.jpg" },
      { name: "윤서연", position: "Support Specialist", image: "/team9.jpg" },
      { name: "백승호", position: "Support Specialist", image: "/team10.jpg" },
    ],
  },
];

export default function OurTeamPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-black">
      <motion.h1
        className="text-3xl font-bold text-center mb-10 text-gray-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        팀원 소개
      </motion.h1>

      {teamData.slice(0, 2).map((department, deptIndex) => (
        <div key={deptIndex} className="mb-12">
          {/* 부서명 */}
          <motion.h2
            className="text-2xl font-semibold mb-6 text-teal-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {department.department}
          </motion.h2>

          {/* 팀원 카드 */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {department.members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full h-[130px]"
                />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-gray-500">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {teamData.slice(2).map((department, deptIndex) => (
        <div key={deptIndex} className="mb-12">
          {/* 부서명 */}
          <motion.h2
            className="text-2xl font-semibold mb-6 text-teal-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {department.department}
          </motion.h2>

          {/* 팀원 카드 */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {department.members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full h-[130px]"
                />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-gray-500">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
