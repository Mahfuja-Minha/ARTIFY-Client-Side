import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import FavoriteCard from "../../component/FavoriteCard/FavoriteCard";
import { Link } from "react-router";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://artify-server-psi.vercel.app/favorites?email=${user.email}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex flex-col items-center py-10 space-y-3">
        <span className="loading loading-spinner loading-md"></span>
        <p className="text-xl font-semibold text-[#627382]">Loading...</p>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-semibold">No favorites yet</h2>
        <p className="text-gray-500">Explore artworks and add your favorites</p>
        <Link
          to={"/exploreArtworks"}
          className="btn  bg-[#7C3AED]  text-white rounded-lg font-semibold  hover:scale-105 transition ease-in-out px-7 py-5"
        >
          Explore Artworks
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">
        My Favorites :{" "}
        <span className="text-[#7C3AED]">({favorites.length})</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <FavoriteCard
            key={fav._id}
            fav={fav}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
