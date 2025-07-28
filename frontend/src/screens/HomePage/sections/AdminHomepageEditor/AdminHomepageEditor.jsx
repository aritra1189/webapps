import React, { useState, useEffect } from "react";
import axios from "axios";

export const AdminHomePageEditor = () => {
  const [mainImage, setMainImage] = useState("");
  const [mainDescription, setMainDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch existing content
    const fetchContent = async () => {
      try {
        const res = await axios.get("https://webapps-6edm.onrender.com/api/homepage");
        if (res.data) {
          setMainImage(res.data.mainImage || "");
          setMainDescription(res.data.mainDescription || "");
        }
      } catch (error) {
        console.error("Error loading homepage content", error);
      }
    };
    fetchContent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("https://webapps-6edm.onrender.com/api/homepage/update", {
        mainImage,
        mainDescription,
      });

      setMessage("Content updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      setMessage("Update failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Homepage Content</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="mainImage" className="block font-semibold mb-1">
            Main Image URL
          </label>
          <input
            id="mainImage"
            type="text"
            value={mainImage}
            onChange={(e) => setMainImage(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="https://example.com/image.png"
            required
          />
        </div>

        <div>
          <label htmlFor="mainDescription" className="block font-semibold mb-1">
            Main Description
          </label>
          <textarea
            id="mainDescription"
            value={mainDescription}
            onChange={(e) => setMainDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            rows={3}
            placeholder="Enter homepage headline"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full px-4 py-2 text-white font-semibold rounded-md ${
            loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Update Homepage"}
        </button>

        {message && (
          <div className="text-center mt-4 text-sm text-green-600 font-medium">{message}</div>
        )}
      </form>
    </div>
  );
};
