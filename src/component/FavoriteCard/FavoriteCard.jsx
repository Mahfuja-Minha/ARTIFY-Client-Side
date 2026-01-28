import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const FavoriteCard = ({ fav, favorites, setFavorites }) => {
  const handleRemove = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artify-server-psi.vercel.app/favorites/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = favorites.filter((fav) => fav._id !== _id);
              setFavorites(remaining);
              Swal.fire("Artwork removed");
            }
          });
      }
    });
  };

  return (
    <div
      className=" bg-white dark:bg-white/5 
        dark:backdrop-blur-lg 
        dark:border dark:border-white/10 
        rounded-2xl 
        shadow-md hover:shadow-xl 
        transition duration-300 hover:scale-[1.02] p-4 space-y-3
      "
    >
      <img
        src={fav.artworkImage}
        alt={fav.artworkTitle}
        className="rounded-xl h-56 w-full object-cover"
      />

      <h2 className="text-lg font-semibold">{fav.artworkTitle}</h2>

      <p className="text-sm text-gray-500">Artist: {fav.artistName}</p>

      <Link
        to={`/artDetails/${fav.artworkId}`}
        className="block text-center py-2 rounded-lg border border-[#7C3AED] text-[#7C3AED]"
      >
        View Details
      </Link>

      <button
        onClick={() => handleRemove(fav._id)}
        className="w-full py-2 rounded-lg bg-[#7C3AED] text-white"
      >
        Remove from Favorites
      </button>
    </div>
  );
};

export default FavoriteCard;
