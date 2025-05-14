import React from "react";
import {
  Heart,
  Stethoscope,
  Search,
  Star,
  Clock,
  LogOut
} from "lucide-react";

const categories = [
  { name: "Heart", icon: "❤️" },
  { name: "Kidney", icon: "🦾" },
  { name: "Stomach", icon: "🫃" },
  { name: "Liver", icon: "🫁" },
  { name: "General", icon: "🧑‍⚕️" },
];

const doctors = [
  {
    name: "Dr. R Keshava",
    speciality: "Cardiologist",
    hospital: "Manipal Hospital, Bangalore",
    rating: "4.9",
    time: "10.30Am – 12.50Pm",
    icon: "❤️",
  },
  {
    name: "Dr. Hareesha Babu",
    speciality: "Nephrologist",
    hospital: "East Point Hospital, Bangalore",
    rating: "4.9",
    time: "10.30Am – 12.50Pm",
    icon: "🦾",
  },
  {
    name: "Dr. Prathiba S",
    speciality: "Gastroenterologist",
    hospital: "Nano Hospital, Bangalore",
    rating: "4.9",
    time: "10.30Am – 12.50Pm",
    icon: "🫃",
  },
  {
    name: "Dr. Pramod Kumar D A",
    speciality: "Hepatologist",
    hospital: "Nano Hospital, Bangalore",
    rating: "4.9",
    time: "10.30Am – 12.50Pm",
    icon: "🫁",
  },
  {
    name: "Dr. Venkatesh M J",
    speciality: "General Physician",
    hospital: "Apollo Hospital, Bangalore",
    rating: "4.9",
    time: "10.30Am – 12.50Pm",
    icon: "🧑‍⚕️",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="bg-blue-500 flex justify-between items-center px-6 py-3 rounded-b-xl shadow text-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div>
            <p className="text-sm">Hi, Welcome Back</p>
            <h1 className="text-lg font-semibold">CareMe</h1>
          </div>
        </div>
        <button className="text-sm flex items-center gap-1 hover:underline">
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Search */}
      <div className="flex justify-center mt-6">
        <div className="relative w-[80%] max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search a Doctor"
            className="w-full py-2 pl-10 pr-4 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mt-10">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-blue-500 text-white px-5 py-4 rounded-lg shadow text-center w-[80px] hover:bg-blue-600 cursor-pointer"
            >
              <div className="text-2xl">{cat.icon}</div>
              <p className="text-sm mt-1">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Doctors */}
      <div className="px-6 mt-10 pb-10">
        <h2 className="text-xl font-bold mb-4">Our Top Doctors</h2>
        <div className="space-y-4">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-blue-500 text-white px-4 py-3 rounded-xl shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <div>
                  <h3 className="font-semibold">{doc.name}</h3>
                  <p className="text-sm">
                    {doc.speciality} | {doc.hospital}
                  </p>
                  <div className="flex items-center text-sm mt-1 gap-2">
                    <Star size={14} className="text-yellow-300" />
                    {doc.rating}
                    <Clock size={14} className="ml-3" />
                    {doc.time}
                  </div>
                </div>
              </div>
              <div className="text-2xl">{doc.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
