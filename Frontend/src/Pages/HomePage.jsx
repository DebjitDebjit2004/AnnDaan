import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FAQsSection from "../Components/FAQsSection";
import FeedsCard from "../Components/FeedsCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation wrapper
const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  const feeds = [
    {
      title: "Food Drive in Haridwar",
      description:
        "Distributed meals to over 300 families in the flood-affected area.",
      date: "April 5, 2025",
      image:
        "https://i.pinimg.com/736x/0b/2b/9e/0b2b9e8ef673369c160f911736a7fb96.jpg",
    },
    {
      title: "Clothes for Winter",
      description: "Collected and distributed warm clothes to street kids.",
      date: "March 30, 2025",
      image:
        "https://i.pinimg.com/736x/11/93/ff/1193fff413364c7ccab186808180a67c.jpg",
    },
    {
      title: "Girl Education Campaign",
      description:
        "Organized awareness drives in rural schools to emphasize the importance of education for girls and how it can transform entire communities.",
      date: "March 20, 2025",
      image:
        "https://i.pinimg.com/736x/1d/ca/54/1dca546736b74558c8f976c1b3facca7.jpg",
    },
    {
      title: "Plantation Drive",
      description:
        "Planted 1000+ saplings with volunteers across three villages to promote green cover and combat pollution.",
      date: "March 15, 2025",
      image:
        "https://i.pinimg.com/736x/1f/15/dc/1f15dceb65d80d8249d83c72936244bd.jpg",
    },
    {
      title: "Medical Camp",
      description:
        "Free checkups for 500+ villagers in Roorkee with 10+ doctors and free medicines provided.",
      date: "March 10, 2025",
      image:
        "https://i.pinimg.com/736x/4b/46/ee/4b46ee69c7f2b7cecf402bcbc91eb08e.jpg",
    },
  ];

  const backgroundImages = [
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    "https://images.unsplash.com/photo-1635929114944-8bab23b98e74?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1678837556129-d8cdd80cbe25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613399421095-41f5c68e9f8c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  const [currentBg, setCurrentBg] = useState(0);
  
  // Auto-change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // 5000 ms = 5 seconds
  
    return () => clearInterval(interval);
  }, []);  

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />

      {/* Hero Section */}
      <section
        className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-6 pt-32 text-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage:
          `url(${backgroundImages[currentBg]}?auto=format&fit=crop&w=1920&q=80)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-opacity-60 p-8 rounded-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Give the Child the Gift of Education
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Guidance brings a chance to dream. Be a ray of light for someone
            today.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Join Our Team
          </button>
        </motion.div>
      </section>

      {/* Zig-Zag Ethical Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-20">
          {[
            {
              image:
                "https://i.pinimg.com/736x/4c/c5/53/4cc553edb8299dcb4ea055cab9506829.jpg",
              title: "Respect for Humanity",
              content:
                "We treat everyone with dignity and respect, empowering communities to stand tall.",
            },
            {
              image:
                "https://i.pinimg.com/736x/ff/36/ca/ff36cacc0fbfae0b096011e60cee76d6.jpg",
              title: "Transparency & Trust",
              content:
                "We ensure every donation is used responsibly, making your contribution meaningful.",
            },
            {
              image:
                "https://i.pinimg.com/736x/23/2e/08/232e0879c9341865afa5be034b56f977.jpg",
              title: "Sustainability & Service",
              content:
                "We believe in sustainable giving and long-term impact. Join hands for a better future.",
            },
          ].map((item, idx) => (
            <FadeInWhenVisible key={idx}>
              <div
                className={`flex flex-col md:flex-row ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-20`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-1/2 rounded-xl shadow-lg md:px-4"
                />
                <div className="md:w-1/2 px-4">
                  <h2 className="text-3xl font-bold text-orange-600 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Popular Causes Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-orange-600 mb-12">
              Popular Causes
            </h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Food for All",
              "Education for Every Child",
              "Clothing the Homeless",
            ].map((cause, i) => (
              <FadeInWhenVisible key={i}>
                <div className="p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-2">{cause}</h3>
                  <p className="text-gray-600">
                    Your small help can make a big difference in someone's life.
                    Be a part of the movement.
                  </p>
                  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Donate Now
                  </button>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
      
{/* Testimonials - Newspaper Style */}
<section className="py-16 px-6 bg-white font-serif">
  <div className="max-w-5xl mx-auto">
    <FadeInWhenVisible>
      <h2 className="text-4xl font-bold text-center text-black mb-12 border-b pb-4 border-gray-300">
        What People Say
      </h2>
    </FadeInWhenVisible>

    <div className="grid md:grid-cols-3 gap-10 text-justify">
      {[
        {
          text: "This is the best NGO I've ever supported. Truly transparent and impactful. Their work speaks volumes without asking for much in return.",
          name: "Anita Sharma",
        },
        {
          text: "Their initiatives changed how I look at social work. It's rare to find such dedication, honesty, and community-driven action these days.",
          name: "Ravi Mehra",
        },
        {
          text: "Proud to be part of such a noble cause. They not only deliver help but also inspire others to do the same through their efforts.",
          name: "Fatima Khan",
        },
      ].map((item, idx) => (
        <FadeInWhenVisible key={idx}>
          <div className="border border-gray-300 p-6 rounded shadow-sm bg-white h-full">
            <p className="text-[17px] leading-7 mb-4 text-gray-800">"{item.text}"</p>
            <p className="text-sm font-semibold text-gray-600 italic text-right">
              — {item.name}
            </p>
          </div>
        </FadeInWhenVisible>
      ))}
    </div>
  </div>
</section>


      {/* Newsletter / CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-400 to-green-500 text-white text-center">
        <FadeInWhenVisible>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Stay Informed & Involved
            </h2>
            <p className="mb-6">
              Subscribe to our newsletter and never miss an update on our
              mission and achievements.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 p-4 rounded-xl shadow-2xl bg-white/10 backdrop-blur-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg w-full sm:w-2/3 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-600 transition bg-amber-50"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* Feeds Listing Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-orange-600 mb-12">
              Latest Activities
            </h2>
          </FadeInWhenVisible>
          <div className="flex flex-wrap justify-center gap-6">
            {feeds.map((item, idx) => (
              <FadeInWhenVisible key={idx}>
                <FeedsCard item={item} />
              </FadeInWhenVisible>
            ))}
          </div>
          <FadeInWhenVisible>
            <button
              onClick={() => (window.location.href = "/feeds")}
              className="mt-10 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              See More Feeds
            </button>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Food Donation Drive Banner */}
      <section className="py-10 px-6 bg-yellow-100 text-center">
        <FadeInWhenVisible>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-2">
              🍽️ Join Our Weekend Food Donation Drive!
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              Help us serve warm meals to underprivileged families. Your small
              act of kindness can bring big smiles.
            </p>
            <p className="text-md text-orange-600 font-medium">
              Donate non-perishable items or volunteer with us this Saturday &
              Sunday!
            </p>
          </div>
        </FadeInWhenVisible>
      </section>

        {/* FAQs Section */}
        <FAQsSection />

      <Footer />
    </div>
  );
};

export default HomePage;
