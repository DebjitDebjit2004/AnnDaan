import { motion } from "framer-motion";

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
  },
  {
    id: 3,
    title: "Blood Donation Camp",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Join our blood donation camp and save lives.",
    longDesc: "Our blood donation camp was a huge success with over 200 donors. Thank you for your support!",
    status: "active",
  },
  {
    id: 4,
    title: "Clean City Drive",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Making our city cleaner and greener.",
    longDesc: "Volunteers gathered to clean up parks and public spaces, promoting cleanliness and environmental awareness.",
    status: "inactive",
  },
];

export default function EventCardNGO({ eventList }) {
  const eventData = eventList || events;

  return (
    <div className="flex flex-col gap-10 p-8 max-w-2xl mx-auto">
      {eventData.map((event) => (
        <motion.div
          key={event.id}
          layout
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col transition hover:shadow-2xl min-h-[320px] w-full"
        >
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <span
              className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow ${
                event.status === "active"
                  ? "bg-green-100 text-green-700 border border-green-400"
                  : "bg-gray-200 text-gray-600 border border-gray-400"
              }`}
            >
              {event.status === "active" ? "Active" : "Inactive"}
            </span>
          </div>
          <div className="flex flex-col flex-1 px-5 py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h2>
            <p className="text-gray-600 text-base mb-3">{event.shortDesc}</p>
            <div className="mt-auto flex justify-between items-center">
              <button
                className="bg-gradient-to-r from-orange-400 to-green-500 text-white font-semibold px-5 py-2 rounded-lg text-sm shadow hover:opacity-90 transition"
                onClick={() => window.location.href = `/event-details?id=${event.id}`}
              >
                Event Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
