import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-full h-[70vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://www.singulart.com/blog/wp-content/uploads/2023/10/ObeyGiant_Vhils-1.jpg')",
            }}
          >
            <div className="bg-black/50 p-8 rounded-lg text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Discover Creative Art
              </h1>
              <p className="text-lg">
                Explore stunning artworks from talented artists
              </p>

              <Link
                to="/exploreArtworks"
                className="inline-block mt-5 px-5 py-3 rounded-lg  bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition"
              >
                Explore Artworks
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f')",
            }}
          >
            <div className="bg-black/50 p-8 rounded-lg text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Trending Artists
              </h1>
              <p className="text-lg">Get inspired by top artists of the week</p>

              <Link
                to="/exploreArtworks"
                className="inline-block mt-5 px-5 py-3 rounded-lg  bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition"
              >
                Explore Artworks
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/abstract-work-art-is-being-painted-studio-by-artist_717906-95451.jpg')",
            }}
          >
            <div className="bg-black/50 p-8 rounded-lg text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Share Your Artwork
              </h1>
              <p className="text-lg">
                Upload your creativity and get appreciation
              </p>

              <Link
                to="/exploreArtworks"
                className="inline-block mt-5 px-5 py-3 rounded-lg  bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition"
              >
                Explore Artworks
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
