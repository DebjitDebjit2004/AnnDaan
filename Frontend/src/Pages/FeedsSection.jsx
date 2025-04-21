import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaHeart, FaRegHeart, FaRegCommentDots, FaShare, FaPlus } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import AddFeed from "../Components/AddFeed"; // Import the AddFeed component

const FeedsSection = () => {
  const [feeds, setFeeds] = useState([
    {
      id: 1,
      title: "Food Donation at Mumbai Central",
      description:
        "Thanks to generous donors, 200+ people received warm meals today.",
      author: "Helping Hands NGO",
      time: "2 hours ago",
      image: "https://source.unsplash.com/600x400/?food,donation",
      comments: [],
    },
    {
      id: 2,
      title: "Big Thanks to Ramesh Jain!",
      description: "Donated ₹25,000 to support rural food drives.",
      author: "AnnDaan Foundation",
      time: "5 hours ago",
      image: "https://source.unsplash.com/600x400/?charity,donation",
      comments: [],
    },
    {
      id: 3,
      title: "Volunteers Needed for Delhi Drive",
      description:
        "Join us this Sunday at Connaught Place to distribute food kits.",
      author: "FeedNation",
      time: "1 day ago",
      image: "https://source.unsplash.com/600x400/?volunteer,helping",
      comments: [],
    },
  ]);

  const [likes, setLikes] = useState({});
  const [liked, setLiked] = useState({});
  const [comment, setComment] = useState("");
  const [addFeedMode, setAddFeedMode] = useState(false);  // State to manage whether to show the AddFeed form or not
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [newFeed, setNewFeed] = useState({ title: "", description: "", author: "", image: null });
  const [selectedFeed, setSelectedFeed] = useState(null);

  const handleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] - 1 : (prev[id] || 0) + 1,
    }));
  };

  const handleCommentSubmit = () => {
    if (comment.trim() && selectedFeed !== null) {
      setFeeds((prevFeeds) =>
        prevFeeds.map((feed) =>
          feed.id === selectedFeed.id
            ? { ...feed, comments: [...feed.comments, comment] }
            : feed
        )
      );
      setComment("");
    }
  };

  // const handleAddFeed = () => {
  //   if (!newFeed.title || !newFeed.description || !newFeed.author) {
  //     alert("Please fill in all fields.");
  //     return;
  //   }
  //   const newEntry = {
  //     id: feeds.length + 1,
  //     ...newFeed,
  //     time: "Just now",
  //     comments: [],
  //   };
  //   setFeeds([newEntry, ...feeds]);
  //   setNewFeed({ title: "", description: "", author: "", image: null });
  //   setImagePreview(null);
  //   setAddModalOpen(false);
  // };

  const handleShare = (feed) => {
    if (navigator.share) {
      navigator.share({
        title: feed.title,
        text: feed.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#fefefe] py-10 px-4 md:px-20">
        <h1 className="text-3xl font-bold text-orange-600 mb-8">All Feeds</h1>
        {/* Add Feed Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setAddFeedMode(true)}  // Toggle to show AddFeed component
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            <FaPlus />
            Add Feed
          </button>
        </div>

        {!selectedFeed ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeds.map((feed) => (
              <div
                key={feed.id}
                className="relative bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedFeed(feed)}
              >
                <div className="flex items-center mb-4">
                  <FaUserCircle className="text-3xl text-orange-500 mr-3" />
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">{feed.author}</h2>
                    <div className="flex items-center text-xs text-gray-500">
                      <BiTimeFive className="mr-1" />
                      {feed.time}
                    </div>
                  </div>
                </div>
                {feed.image && <img src={feed.image} alt="Feed" className="rounded-md mb-3 w-full h-48 object-cover" />}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{feed.title}</h3>
                <p className="text-gray-700 text-sm line-clamp-2">{feed.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
            <button
              onClick={() => setSelectedFeed(null)}
              className="text-sm text-orange-500 hover:underline mb-4"
            >
              ← Back to Feeds
            </button>
            <div className="flex items-center mb-4">
              <FaUserCircle className="text-3xl text-orange-500 mr-3" />
              <div>
                <h2 className="text-sm font-semibold text-gray-800">{selectedFeed.author}</h2>
                <div className="flex items-center text-xs text-gray-500">
                  <BiTimeFive className="mr-1" />
                  {selectedFeed.time}
                </div>
              </div>
            </div>
            {selectedFeed.image && (
              <img
                src={selectedFeed.image}
                alt="Feed"
                className="rounded-md mb-4 w-full h-64 object-cover"
              />
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedFeed.title}</h3>
            <p className="text-gray-700 mb-4">{selectedFeed.description}</p>

            <div className="flex justify-between items-center text-gray-600 text-sm pb-3 border-b">
              <button
                onClick={() => handleLike(selectedFeed.id)}
                className={`flex items-center gap-2 transition ${
                  liked[selectedFeed.id] ? "text-red-500 scale-105" : "hover:text-orange-500"
                }`}
              >
                {liked[selectedFeed.id] ? <FaHeart /> : <FaRegHeart />}
                {likes[selectedFeed.id] || 0}
              </button>

              <button
                className="flex items-center gap-2 hover:text-orange-500 transition"
                onClick={() => handleShare(selectedFeed)}
              >
                <FaShare />
              </button>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Comments</h4>
              <ul className="mb-3 space-y-2">
                {selectedFeed.comments.length ? (
                  selectedFeed.comments.map((cmt, idx) => (
                    <li key={idx} className="text-sm text-gray-800 bg-gray-100 p-2 rounded-md">
                      {cmt}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500">No comments yet.</li>
                )}
              </ul>
              <textarea
                className="w-full border rounded-md p-2 mb-3 resize-none focus:outline-orange-400"
                rows={3}
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button
                onClick={handleCommentSubmit}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
              >
                Post Comment
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default FeedsSection;
