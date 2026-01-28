import React, { useEffect, useState } from "react";
import ArtCard from "../ArtCard/ArtCard";
import { Link } from "react-router";

const FeaturedArtworks = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://artify-server-psi.vercel.app/featured-art")
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center py-10 space-y-3">
        <span className="loading loading-spinner loading-md"></span>
        <p className="text-xl font-semibold text-[#627382]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-10 space-y-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-center">Featured ArtWorks</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore standout artworks that capture creativity, emotion, and modern
          artistic expression.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {arts.map((art) => {
          return <ArtCard key={art._id} art={art}></ArtCard>;
        })}
      </div>

      <div className="flex justify-center">
        <Link
          to="/exploreArtworks"
          className="px-5 py-3 rounded-lg bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition"
        >
          Explore Artworks
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArtworks;
