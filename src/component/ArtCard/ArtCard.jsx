import React from "react";
import { Link } from "react-router";
import { Heart } from "lucide-react";

const ArtCard = ({ art }) => {
  const { _id, image, title, artistName, category, medium, likes = 0 } = art;

  return (
    <div
      className="
        bg-white dark:bg-white/5 dark:backdrop-blur-lg dark:border dark:border-white/10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]
      "
    >
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt={title}
          className="rounded-xl h-56 w-full object-cover"
        />
      </figure>

      <div className="p-5 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-medium">Artist:</span> {artistName}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">Category:</span> {category}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">Medium:</span> {medium}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>{likes}</span>
        </div>

        <div className="pt-3">
          <Link
            to={`/artDetails/${_id}`}
            className="block text-center py-2 rounded-lg border border-[#7C3AED] text-[#7C3AED]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;

