import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqsData = [
  {
    category: "General",
    items: [
      {
        question: "What is the purpose of this NGO?",
        answer: "Our NGO distributes extra food from events to needy people and NGOs to reduce food wastage and fight hunger."
      },
      {
        question: "Is your NGO registered?",
        answer: "Yes, our NGO is fully registered and verified with appropriate documentation."
      }
    ]
  },
  {
    category: "Donation",
    items: [
      {
        question: "How can I donate food?",
        answer: "You can donate food by registering through our website or contacting us via the Contact Us page. We'll handle the rest!"
      },
      {
        question: "Is there a minimum food quantity?",
        answer: "No minimum. Even small contributions can make a big difference."
      }
    ]
  },
  {
    category: "Volunteering",
    items: [
      {
        question: "How do I join as a volunteer?",
        answer: "Just fill out the volunteer form on our site, and our team will get in touch with you."
      },
      {
        question: "Do I need any prior experience?",
        answer: "Not at all! We welcome anyone with the heart to serve."
      }
    ]
  }
];

const FAQsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const isSame = activeCategory === categoryIndex && activeQuestion === questionIndex;
    setActiveCategory(isSame ? null : categoryIndex);
    setActiveQuestion(isSame ? null : questionIndex);
  };

  return (
    <section id="faqs" className="px-4 md:px-10 py-16 bg-orange-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">Frequently Asked Questions</h2>

        {faqsData.map((category, categoryIndex) => (
          <div key={category.category} className="mb-10">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.items.map((faq, questionIndex) => {
                const isOpen = categoryIndex === activeCategory && questionIndex === activeQuestion;
                return (
                  <div
                    key={questionIndex}
                    className="bg-white shadow-md rounded-lg p-4 border border-orange-200 cursor-pointer transition-all"
                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-md font-medium text-gray-800">{faq.question}</h4>
                      <FaChevronDown
                        className={`transform transition-transform ${isOpen ? "rotate-180 text-orange-500" : ""}`}
                      />
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mt-2 text-sm text-gray-600"
                        >
                          <div>{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;
