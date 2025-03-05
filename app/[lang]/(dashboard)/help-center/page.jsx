"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoListPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Promise Delivery । কিভাবে প্যাকেজ ট্র্যাক করবো",
      url: "https://www.youtube.com/watch?v=RB9arv9VHp0&t=6s",
      thumbnail:
        "https://nagadhat.com.bd/_next/image?url=%2Fimages%2Fpartner%2FPocket%20Slider-04.webp&w=640&q=75",
    },
    {
      id: 2,
      title: "Promise Delivery । কিভাবে কুরিয়ার সার্ভিসে রেজিস্ট্রেশন করবো",
      url: "https://www.youtube.com/watch?v=abc123def456",
      thumbnail:
        "https://nagadhat.com.bd/_next/image?url=%2Fimages%2Fpartner%2FPocket%20Slider-04.webp&w=640&q=75",
    },
    {
      id: 3,
      title: "Promise Delivery । কিভাবে দ্রুত ডেলিভারি নিশ্চিত করবো",
      url: "https://www.youtube.com/watch?v=xyz789uvw123",
      thumbnail:
        "https://nagadhat.com.bd/_next/image?url=%2Fimages%2Fpartner%2FPocket%20Slider-04.webp&w=640&q=75",
    },
    {
      id: 4,
      title: "Promise Delivery । কিভাবে কাস্টমার সাপোর্টে যোগাযোগ করবো",
      url: "https://www.youtube.com/watch?v=lmn456opq789",
      thumbnail:
        "https://nagadhat.com.bd/_next/image?url=%2Fimages%2Fpartner%2FPocket%20Slider-04.webp&w=640&q=75",
    },
  ];

  const merchantSupport = [
    {
      id: 1,
      title: "Promise Delivery । কিভাবে ডেলিভারি পার্টনার হবো",
      url: "https://www.youtube.com/watch?v=ghi678jkl901",
      thumbnail:
        "https://nagadhat.com.bd/_next/image?url=%2Fimages%2Fpartner%2FPocket%20Slider-04.webp&w=640&q=75",
    },
    {
      id: 2,
      title: "Promise Delivery । কিভাবে প্যাকেজ ইন্স্যুরেন্স করবো",
      url: "https://www.youtube.com/watch?v=mno234pqr567",
      thumbnail:
        "https://nagadhat.com.bd/_next/image?url=%2Fimages%2Fpartner%2FPocket%20Slider-04.webp&w=640&q=75",
    },
    {
      id: 3,
      title: "Promise Delivery । কিভাবে ডেলিভারি স্ট্যাটাস চেক করবো",
      url: "https://www.youtube.com/watch?v=stu890vwx123",
      thumbnail:
        "https://nagadhat.com.bd/_next/image?url=%2Fimages%2Fpartner%2FPocket%20Slider-04.webp&w=640&q=75",
    },
  ];

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const renderVideoCard = (video) => (
    <div
      key={video.id}
      className="border rounded-lg overflow-hidden shadow-sm cursor-pointer bg-white"
      onClick={() => openModal(video)}
    >
      <div className="relative aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{video.title}</h2>
      </div>
    </div>
  );

  return (
    <div className="p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">
        Guideline For Merchants
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map(renderVideoCard)}
      </div>

      <h1 className="text-2xl font-bold mb-4 text-gray-900 mt-5">
        Merchant Support
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {merchantSupport.map(renderVideoCard)}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-video">
              <ReactPlayer
                url={selectedVideo.url}
                controls
                width="100%"
                height="100%"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{selectedVideo.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoListPage;
