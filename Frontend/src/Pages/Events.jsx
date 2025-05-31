import EventCard from "../Components/EventCardNGO";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  // Example event data (should match EventCardNGO's expected props if needed)
  const events = [
    {
      id: 1,
      title: "Food Distribution Drive",
      image: "https://images.unsplash.com/photo-1670213193254-cbbebedfe8b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortDesc: "Helping the needy with leftover food from events.",
      longDesc: "We organized a large-scale food distribution drive across multiple locations, delivering nutritious meals to over 1000 people. Volunteers managed logistics, packaging, and ensured zero food wastage.",
      status: "active",
    },
    {
      id: 2,
      title: "Tree Plantation Campaign",
      image: "https://images.unsplash.com/photo-1692261929431-253094ad8497?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortDesc: "Promoting environmental awareness through plantation.",
      longDesc: "Over 500 saplings were planted in our community outreach campaign. Local volunteers, schools, and residents actively participated in making the city greener.",
      status: "inactive",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      <div className="flex-grow bg-white text-black">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold text-orange-600">Our Events</h1>
          <p className="mt-2 text-lg">Explore the different events we have organized to make a difference.</p>
        </div>

        <div className="container mx-auto px-6 pb-12 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="cursor-pointer"
              onClick={() => navigate(`/event-details?id=${event.id}`)}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
