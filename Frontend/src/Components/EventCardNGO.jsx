import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Add status to each event for demonstration
const events = [
  {
    id: 1,
    title: "Food Distribution Drive",
    image: "https://images.unsplash.com/photo-1670213193254-cbbebedfe8b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDesc: "Helping the needy with leftover food from events.",
    longDesc:
      "We organized a large-scale food distribution drive across multiple locations, delivering nutritious meals to over 1000 people. Volunteers managed logistics, packaging, and ensured zero food wastage.",
    status: "active",
  },
  {
    id: 2,
    title: "Tree Plantation Campaign",
    image: "https://images.unsplash.com/photo-1692261929431-253094ad8497?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDesc: "Promoting environmental awareness through plantation.",
    longDesc:
      "Over 500 saplings were planted in our community outreach campaign. Local volunteers, schools, and residents actively participated in making the city greener.",
    status: "inactive",
  }
];

export default function EventCard() {
  const [activeId, setActiveId] = useState(null);

  const toggleExpand = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {events.map((event) => (
        <motion.div
          key={event.id}
          layout
          className="flex flex-col md:flex-row rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl overflow-hidden cursor-pointer border border-white/20 relative"
          onClick={() => toggleExpand(event.id)}
        >
          {/* Status Badge */}
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
              event.status === "active"
                ? "bg-green-100 text-green-700 border border-green-400"
                : "bg-gray-200 text-gray-600 border border-gray-400"
            }`}
          >
            {event.status === "active" ? "Active" : "Inactive"}
          </span>
          <img
            src={event.image}
            alt={event.title}
            className="w-full md:w-1/3 object-cover h-64 md:h-auto"
          />

          <div className="p-4 flex flex-col justify-center md:w-2/3">
            <h2 className="text-2xl font-bold text-orange-600 mb-2">{event.title}</h2>
            <p className="text-black text-sm md:text-base">
              {event.shortDesc}
            </p>

            <AnimatePresence>
              {activeId === event.id && (
                <motion.p
                  className="text-black mt-4 text-sm md:text-base"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {event.longDesc}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
