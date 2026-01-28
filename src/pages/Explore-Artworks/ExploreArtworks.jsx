import React, { useEffect, useState } from "react";
import ArtCard from "../../component/ArtCard/ArtCard";
import { Search } from "lucide-react";

const ExploreArtworks = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://artify-server-psi.vercel.app/explore-artworks")
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
        setLoading(false);
      });
  }, []);

  const filteredArts = arts.filter(
    (art) =>
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.artistName.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center py-10 space-y-3">
        <span className="loading loading-spinner loading-md"></span>
        <p className="text-xl font-semibold text-[#627382]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Artworks</h1>

      <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center my-10">
        <div className="space-y-2">
          <label className="input w-70">
            <Search className="text-[#627382]" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              placeholder="Search by title or artist"
            />
          </label>
        </div>
      </div>

      {filteredArts.length === 0 ? (
        <p className="text-center text-gray-500">No artworks found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredArts.map((art) => (
            <ArtCard key={art._id} art={art} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreArtworks;
