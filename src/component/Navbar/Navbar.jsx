import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import MyLink from "../MyLink/MyLink";

const Navbar = () => {
  const { user, signOutUserFunc, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignout = () => {
    signOutUserFunc()
      .then(() => {
        toast.success("signout sucessful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="navbar bg-base-100 border-b border-base-300 shadow-sm py-4 lg:px-20">
      <div className="navbar-start">
        <div
          className="dropdown text-base-content
"
        >
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white dark:bg-transparent/50 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-box z-50 mt-3 w-52 p-2 shadow border border-[#E5E7EB]"
          >
            <li>
              <MyLink to="/">Home</MyLink>
            </li>
            <li>
              <MyLink to="/exploreArtworks">Explore Artworks</MyLink>
            </li>
            <li>
              <MyLink to="/addArtwork">Add Artwork</MyLink>
            </li>
            <li>
              <MyLink to="/myGallery">My Gallery</MyLink>
            </li>
            <li>
              <MyLink to="/myFavorites">My Favorites</MyLink>
            </li>
            <li className="flex gap-2">
              <div>
                <span className="font-semibold">
                  {theme === "dark" ? "Dark" : "Light"}
                </span>

                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle cursor-pointer"
                />
              </div>
            </li>
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-1">
          <h1 className="font-bold text-2xl text-base-content">ARTIFY</h1>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li>
            <MyLink to="/">Home</MyLink>
          </li>
          <li>
            <MyLink to="/exploreArtworks">Explore Artworks</MyLink>
          </li>
          <li>
            <MyLink to="/addArtwork">Add Artwork</MyLink>
          </li>
          <li>
            <MyLink to="/myGallery">My Gallery</MyLink>
          </li>
          <li>
            <MyLink to="/myFavorites">My Favorites</MyLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <div className="hidden lg:block">
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium">
              {theme === "dark" ? "Dark" : "Light"}
            </span>

            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle cursor-pointer"
            />
          </div>
        </div>

        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="relative text-center">
            <button className="btn" onClick={() => setOpen(!open)}>
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-10 w-10 rounded-full"
                alt=""
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-36 rounded-xl bg-white shadow-lg border border-[#7C3AED] p-3 flex flex-col gap-2 z-50">
                <h3
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-[#111827] cursor-pointer"
                >
                  {user.displayName}
                </h3>

                <button
                  onClick={() => {
                    handleSignout();
                    setOpen(false);
                  }}
                  className="bg-white text-[#7C3AED] hover:bg-[#F3F4F6] font-semibold cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="border border-[#7C3AED] hover:bg-[#6D28D9] hover:text-white text-[#7C3AED] px-4 py-2 rounded-md font-semibold flex gap-1 items-center"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-md font-semibold flex gap-1 items-center"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
