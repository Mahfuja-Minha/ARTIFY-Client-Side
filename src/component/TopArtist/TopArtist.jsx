import React from "react";

const TopArtist = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <h2 className="text-3xl font-bold text-center">Top Artists of the Week</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="bg-white border border-[#7C3AED] dark:bg-white/5 dark:backdrop-blur-lg dark:border dark:border-white/10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02] text-center p-6">
          <img
            src="./image1.jpg"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold">Ayesha Rahman</h3>
          <p className="text-gray-500 text-sm">Digital Illustration</p>
          <p className="mt-2 text-sm">12 Artworks</p>
        </div>

        
        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-lg dark:border border border-[#7C3AED] dark:border-white/10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02] text-center p-6">
          <img
            src="./image.jpg"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold">Tanvir Hasan</h3>
          <p className="text-gray-500 text-sm">Abstract Painting</p>
          <p className="mt-2 text-sm">9 Artworks</p>
        </div>

        
        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-lg dark:border border border-[#7C3AED] dark:border-white/10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02] text-center p-6">
          <img
            src="./image3.jpg"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold">Nusrat Jahan</h3>
          <p className="text-gray-500 text-sm">Photography</p>
          <p className="mt-2 text-sm">15 Artworks</p>
        </div>
      </div>
    </section>
  );
};

export default TopArtist;
