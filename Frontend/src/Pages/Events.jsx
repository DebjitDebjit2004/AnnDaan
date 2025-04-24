import EventCard from "../Components/EventCardNGO";

export default function Events() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-orange-600">Our Events</h1>
        <p className="mt-2 text-lg">Explore the different events we have organized to make a difference.</p>
      </div>

      <div className="container mx-auto px-6">
        {/* EventCard Component will render here */}
        <EventCard />
      </div>
    </div>
  );
}
