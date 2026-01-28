import { ArrowLeft, Heart, Star } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

const ArtDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [art, setArt] = useState(null);
  const [artistTotal, setArtistTotal] = useState(0);

  useEffect(() => {
    fetch(`https://artify-server-psi.vercel.app/addArtWork/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);

        fetch(
          `https://artify-server-psi.vercel.app/myGallery?email=${data.artistEmail}`,
        )
          .then((res) => res.json())
          .then((arts) => setArtistTotal(arts.length));
      });
  }, [id]);

  const handleLike = () => {
    fetch(`https://artify-server-psi.vercel.app/addArtWork/like/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then(() => {
        setArt((prev) => ({
          ...prev,
          likes: (prev.likes || 0) + 1,
        }));
      });
  };

  const handleFavorite = () => {
    const favoriteData = {
      userEmail: user.email,
      artworkId: art._id,
      artworkTitle: art.title,
      artworkImage: art.image,
      artistName: art.artistName,
    };

    fetch("https://artify-server-psi.vercel.app/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoriteData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added to favorites");
        } else {
          toast.info("Already in favorites");
        }
      });
  };

  if (!art) {
    return (
      <div className="text-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-5">
        <Link to={"/exploreArtworks"} className="flex gap-1">
          {" "}
          <ArrowLeft className="w-4" />
          <p className="font-semibold">Back to all Art</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={art.image}
          alt={art.title}
          className="rounded-xl shadow-md w-full"
        />

        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{art.title}</h1>

          <div className="border  border-[#7C3AED] rounded-lg shadow-md bg-base-100 mt-6 p-4">
            <p className="text-gray-500">
              <span className="font-semibold">Category:</span> {art.category}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold">Medium:</span> {art.medium}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 p-4 border border-[#7C3AED] rounded-lg shadow-md bg-base-100">
            <img
              src={art.artistPhoto}
              alt={art.artistName}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{art.artistName}</h3>
              <p className="text-sm text-gray-500">
                Total artworks: {artistTotal}
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleLike}
              className="btn border border-[#7C3AED]"
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              Like ({art.likes || 0})
            </button>

            <button
              onClick={handleFavorite}
              className="btn bg-[#7C3AED] text-white"
            >
              <Star className="w-5" /> Add to Favorites
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-gray-500">{art.description}</p>
        <p className="text-gray-500 ">
          This artwork represents a unique creative expression crafted with
          attention to detail and artistic vision. It reflects the artist’s
          imagination, style, and dedication to visual storytelling. Every
          element is thoughtfully composed to create visual harmony and
          emotional impact. The use of color, form, and composition enhances the
          depth and meaning of the artwork. It invites viewers to explore,
          interpret, and connect with the artist’s creative journey.
        </p>
      </div>
    </div>
  );
};

export default ArtDetails;
