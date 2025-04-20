import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  FaUserCircle,
  FaHeart,
  FaRegHeart,
  FaRegCommentDots,
  FaShare,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

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
    },
    {
      id: 2,
      title: "Big Thanks to Ramesh Jain!",
      description: "Donated ₹25,000 to support rural food drives.",
      author: "AnnDaan Foundation",
      time: "5 hours ago",
      image: "https://source.unsplash.com/600x400/?charity,donation",
    },
    {
      id: 3,
      title: "Volunteers Needed for Delhi Drive",
      description:
        "Join us this Sunday at Connaught Place to distribute food kits.",
      author: "FeedNation",
      time: "1 day ago",
      image: "https://source.unsplash.com/600x400/?volunteer,helping",
    },
  ]);

  const [likes, setLikes] = useState({});
  const [liked, setLiked] = useState({});
  const [commentingFeed, setCommentingFeed] = useState(null);
  const [comment, setComment] = useState("");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [viewImage, setViewImage] = useState(null);

  const [newFeed, setNewFeed] = useState({
    title: "",
    description: "",
    author: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] - 1 : (prev[id] || 0) + 1,
    }));
  };

  const handleCommentSubmit = () => {
    alert(`Comment submitted: "${comment}"`);
    setComment("");
    setCommentingFeed(null);
  };

  const handleAddFeed = () => {
    if (!newFeed.title || !newFeed.description || !newFeed.author) {
      alert("Please fill in all fields.");
      return;
    }

    const newEntry = {
      id: feeds.length + 1,
      ...newFeed,
      time: "Just now",
    };

    setFeeds([newEntry, ...feeds]);
    setNewFeed({ title: "", description: "", author: "", image: null });
    setImagePreview(null);
    setAddModalOpen(false);
  };

  const handleDeleteFeed = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feed?");
    if (confirmDelete) {
      setFeeds((prev) => prev.filter((feed) => feed.id !== id));
    }
  };

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

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#fefefe] py-10 px-4 md:px-20">
        <h1 className="text-3xl font-bold text-orange-600 mb-8 items-center">All Feeds</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feeds.map((feed) => (
            <div
              key={feed.id}
              className="relative bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg hover:bg-gray-50 transition-all duration-300"
            >
              <button
                onClick={() => handleDeleteFeed(feed.id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>

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

              {feed.image && (
                <img
                  src={feed.image}
                  alt="Feed"
                  className="rounded-md mb-3 w-full h-48 object-cover cursor-pointer hover:opacity-90"
                  onClick={() => setViewImage(feed.image)}
                />
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{feed.title}</h3>
                <p className="text-gray-700 text-sm">{feed.description}</p>
              </div>

              <div className="flex justify-between items-center text-gray-600 text-sm pt-3 border-t">
                <button
                  onClick={() => handleLike(feed.id)}
                  className={`flex items-center gap-2 transition ${
                    liked[feed.id] ? "text-red-500 scale-105" : "hover:text-orange-500"
                  }`}
                >
                  {liked[feed.id] ? <FaHeart /> : <FaRegHeart />}
                  {likes[feed.id] || 0}
                </button>

                <button
                  className="flex items-center gap-2 hover:text-orange-500 transition"
                  onClick={() => setCommentingFeed(feed.id)}
                >
                  <FaRegCommentDots />
                </button>

                <button
                  className="flex items-center gap-2 hover:text-orange-500 transition"
                  onClick={() => handleShare(feed)}
                >
                  <FaShare />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setAddModalOpen(true)}
        className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all z-50"
      >
        <FaPlus />
      </button>

      {commentingFeed !== null && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 w-[90%] max-w-md border border-white/30">
            <h2 className="text-lg font-bold text-orange-600 mb-4">Add a Comment</h2>
            <textarea
              className="w-full border rounded-md p-2 mb-4 resize-none focus:outline-orange-400"
              rows={4}
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setCommentingFeed(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-600"
                onClick={handleCommentSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {addModalOpen && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 w-[90%] max-w-md border border-white/30">
            <h2 className="text-lg font-bold text-orange-600 mb-4">Add New Feed</h2>

            <input
              type="text"
              placeholder="Title"
              value={newFeed.title}
              onChange={(e) =>
                setNewFeed((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full mb-3 border rounded-md p-2 focus:outline-orange-400"
            />

            <textarea
              placeholder="Description"
              value={newFeed.description}
              onChange={(e) =>
                setNewFeed((prev) => ({ ...prev, description: e.target.value }))
              }
              rows={4}
              className="w-full mb-3 border rounded-md p-2 resize-none focus:outline-orange-400"
            />

            <input
              type="text"
              placeholder="Author"
              value={newFeed.author}
              onChange={(e) =>
                setNewFeed((prev) => ({ ...prev, author: e.target.value }))
              }
              className="w-full mb-3 border rounded-md p-2 focus:outline-orange-400"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setNewFeed((prev) => ({ ...prev, image: reader.result }));
                    setImagePreview(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full mb-3 border rounded-md p-2 focus:outline-orange-400 bg-white"
            />

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
            )}

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setAddModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-600"
                onClick={handleAddFeed}
              >
                Add Feed
              </button>
            </div>
          </div>
        </div>
      )}

      {viewImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99] flex items-center justify-center"
          onClick={() => setViewImage(null)}
        >
          <img
            src={viewImage}
            alt="Zoomed Feed"
            className="max-w-[90%] max-h-[90%] rounded-xl border-4 border-white shadow-xl"
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default FeedsSection;
