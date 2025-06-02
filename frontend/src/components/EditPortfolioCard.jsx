import React from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

function EditPortfolioCard({ portfolio, onSave, onCancel }) {
  return (
    <div className="bg-[#4F3B78] rounded-xl shadow-xl p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Edit Portfolio</h2>
        <div className="flex gap-2">
          <button
            onClick={onSave}
            className="px-4 py-2 rounded-lg bg-[#a259e6] hover:bg-[#8a4fd1] transition-colors flex items-center gap-2"
          >
            <FaSave />
            Save Changes
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-[#a259e6] hover:bg-[#a259e6]/10 transition-colors flex items-center gap-2"
          >
            <FaTimes />
            Cancel
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Hero Section */}
        <div className="bg-[#6B4F9E]/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaEdit />
            Hero Section
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={portfolio.hero?.title || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                placeholder="Enter your title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subtitle</label>
              <input
                type="text"
                value={portfolio.hero?.subtitle || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                placeholder="Enter your subtitle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={portfolio.hero?.description || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                rows="3"
                placeholder="Enter your description"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#6B4F9E]/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaEdit />
            About Section
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                value={portfolio.about?.bio || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                rows="4"
                placeholder="Enter your bio"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Skills (comma-separated)</label>
              <input
                type="text"
                value={portfolio.about?.skills?.join(', ') || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                placeholder="e.g., React, Node.js, Python"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#6B4F9E]/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaEdit />
            Contact Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={portfolio.contact?.email || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn</label>
              <input
                type="url"
                value={portfolio.contact?.linkedin || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                placeholder="Enter your LinkedIn URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">GitHub</label>
              <input
                type="url"
                value={portfolio.contact?.github || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                placeholder="Enter your GitHub URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                value={portfolio.contact?.location || ''}
                className="w-full px-3 py-2 rounded-lg bg-[#4F3B78] border border-[#a259e6] focus:outline-none focus:ring-2 focus:ring-[#a259e6]"
                placeholder="Enter your location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPortfolioCard; 