import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const MyGallery = () => {
  const { user } = use(AuthContext);
  const [arts, setArts] = useState([]);
  const [selectedArt, setSelectedArt] = useState(null);
  const updateArtModalRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://artify-server-psi.vercel.app/myGallery?email=${user.email}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setArts(data);
          setLoading(false);
        });
    }
  }, [user]);

  const handleUpdateModalOpen = (art) => {
    setSelectedArt(art);
    updateArtModalRef.current.showModal();
  };

  const handleUpdateArtSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedArt = {
      title: form.title.value,
      image: form.photo.value,
      medium: form.medium.value,
      description: form.description.value,
      visibility: form.visibility.value,
    };

    fetch(`https://artify-server-psi.vercel.app/myGallery/${selectedArt._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedArt),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Artwork updated successfully");

        const updatedArts = arts.map((art) =>
          art._id === selectedArt._id ? { ...art, ...updatedArt } : art,
        );
        setArts(updatedArts);

        updateArtModalRef.current.close();
      });
  };

  const handleRemove = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artify-server-psi.vercel.app/myGallery/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Artwork removed.",
                icon: "success",
              });
              const remaining = arts.filter((art) => art._id !== _id);
              setArts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-3xl font-bold mb-6">
        My Gallery : <span className="text-[#7C3AED]">{arts.length}</span>
      </h3>

      <div className="hidden md:block overflow-x-auto">
        {loading ? (
          <div className="flex flex-col items-center py-10 space-y-3">
            <span className="loading loading-spinner loading-md"></span>
            <p className="text-xl font-semibold text-[#627382]">Loading...</p>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Artwork</th>
                <th>Title</th>
                <th>Category</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {arts.map((art, index) => (
                <tr key={art._id}>
                  <th>{index + 1}</th>

                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={art.image} alt="art" />
                      </div>
                    </div>
                  </td>

                  <td>{art.title}</td>
                  <td>{art.category}</td>
                  <td>{art.visibility}</td>

                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdateModalOpen(art)}
                        className="btn btn-xs border border-[#7C3AED]"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => handleRemove(art._id)}
                        className="btn btn-xs btn-outline"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <dialog
        ref={updateArtModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">Update Your Art Details</h3>

          {selectedArt && (
            <form onSubmit={handleUpdateArtSubmit} className="space-y-3">
              <label className="block text-sm mb-1 text-gray-600">Title</label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                required
              />

              <label className="block text-sm mb-1 text-gray-600">Image</label>
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full"
                required
              />
              <label className="block text-sm mb-1 text-gray-600">medium</label>
              <input
                type="text"
                name="medium"
                className="input input-bordered w-full"
                required
              />

              <label className="block text-sm mb-1 text-gray-600">
                Description
              </label>
              <textarea
                name="description"
                rows="5"
                className="textarea textarea-bordered w-full"
                required
              />

              <label className="block text-sm mb-1 text-gray-600">
                Visibility
              </label>
              <select
                name="visibility"
                className="select select-bordered w-full"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>

              <button className="btn btn-neutral w-full">Update</button>
            </form>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="md:hidden grid grid-cols-1 gap-4">
        {arts.map((art) => (
          <div
            className="
        bg-white dark:bg-white/5 dark:backdrop-blur-lg dark:border dark:border-white/10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]
      "
          >
            <figure className="px-4 pt-4">
              <img
                src={art.image}
                alt={art.title}
                className="rounded-xl h-56 w-full object-cover"
              />
            </figure>

            <div className="p-5 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {art.title}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Category:</span> {art.category}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Visibility:</span>{" "}
                {art.visibility}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdateModalOpen(art)}
                  className="btn btn-sm border border-[#7C3AED]"
                >
                  Update
                </button>

                <button
                  onClick={() => handleRemove(art._id)}
                  className="btn btn-sm btn-outline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
