import { useState } from 'react';

const AddFeed = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle your form submission logic here (e.g. send to backend)
    console.log({ title, description, image });
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-800">Add New Feed</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          rows="4"
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" className="w-full h-auto rounded" />}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit Feed
        </button>
      </form>
    </div>
  );
};

export default AddFeed;