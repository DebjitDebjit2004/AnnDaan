import React, { useState } from "react";

const FeedsCard = ({ item }) => {
  const [showFull, setShowFull] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: window.location.href, // or a dedicated URL if you have dynamic routing
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };

  return (
    <div className="inline-block bg-orange-50 rounded-xl shadow-md w-[300px] hover:shadow-lg transition-all duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="rounded-t-xl w-full h-[160px] object-cover"
      />
      <div className="p-4 min-h-[180px] flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-orange-600">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-2 break-words">
          {showFull ? item.description : `${item.description.slice(0, 60)}...`}
        </p>
        <button
          className="text-xs text-blue-600 mt-1 text-left underline"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show Less" : "Read More"}
        </button>

        {/* Share Button (Assuming you have a Share icon UI already) */}
        <button
          onClick={handleShare}
          className="text-xs text-green-600 mt-2 underline text-left"
        >
          Share 🔗
        </button>

        <p className="text-xs text-gray-400 mt-2">{item.date}</p>
      </div>
    </div>
  );
};

export default FeedsCard;
