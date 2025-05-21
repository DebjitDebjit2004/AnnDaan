import EventCard from "../Components/EventCardNGO";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      <div className="flex-grow bg-white text-black">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold text-orange-600">Our Events</h1>
          <p className="mt-2 text-lg">Explore the different events we have organized to make a difference.</p>
        </div>

        <div className="container mx-auto px-6 pb-12">
          {/* EventCard Component will render here */}
          <EventCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
