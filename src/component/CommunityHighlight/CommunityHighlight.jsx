import React from "react";

const CommunityHighlight = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <h2 className="text-3xl font-bold text-center">Community Highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative border-l-4 border-[#7C3AED] pl-8 space-y-10">
          <div>
            <span className="text-sm text-[#7C3AED] font-semibold">
              This Week
            </span>
            <h3 className="text-xl font-semibold mt-1">3 New Artists Joined</h3>
            <p className="text-gray-600">
              Fresh creativity entered the ARTIFY community this week.
            </p>
          </div>

          <div>
            <span className="text-sm text-[#7C3AED] font-semibold">
              Community Love
            </span>
            <h3 className="text-xl font-semibold mt-1">
              Most Appreciated Artwork
            </h3>
            <p className="text-gray-600">
              One artwork crossed 500+ likes from the community.
            </p>
          </div>

          <div>
            <span className="text-sm text-[#7C3AED] font-semibold">
              Engagement
            </span>
            <h3 className="text-xl font-semibold mt-1">Active Discussions</h3>
            <p className="text-gray-600">
              Artists actively exchanged feedback through comments.
            </p>
          </div>
        </div>

        <div className="relative border-l-4 border-[#7C3AED] pl-8 space-y-10">
          <div>
            <span className="text-sm text-[#7C3AED] font-semibold">Growth</span>
            <h3 className="text-xl font-semibold mt-1">
              Weekly Engagement Boost
            </h3>
            <p className="text-gray-600">
              Overall interaction increased compared to last week.
            </p>
          </div>

          <div>
            <span className="text-sm text-[#7C3AED] font-semibold">
              Trending
            </span>
            <h3 className="text-xl font-semibold mt-1">Popular Art Styles</h3>
            <p className="text-gray-600">
              Abstract and digital art gained the most attention.
            </p>
          </div>

          <div>
            <span className="text-sm text-[#7C3AED] font-semibold">
              Motivation
            </span>
            <h3 className="text-xl font-semibold mt-1">
              Artists Supporting Artists
            </h3>
            <p className="text-gray-600">
              Community members encouraged each other’s creativity.
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
        Community Highlights showcases the most engaging moments, achievements,
        and creative energy from the ARTIFY community. From new artists joining
        to trending artworks and growing interactions, this section reflects how
        the community continues to inspire and support each other.
      </p>
    </div>
  );
};

export default CommunityHighlight;
