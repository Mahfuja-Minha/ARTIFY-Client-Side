import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const AddArtwork = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const artwork = {
      title: form.title.value,
      category: form.category.value,
      image: form.photo.value,
      medium: form.medium.value,
      artistName: form.name.value,
      artistEmail: form.email.value,
      description: form.description.value,
      dimensions: form.dimensions.value,
      price: form.price.value,
      visibility: form.visibility.value,
    };

    fetch("https://artify-server-psi.vercel.app/addArtWork", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(artwork),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your artwork has been saved",
            // className='w-5',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="p-10">
      <div>
        <h2 className="text-2xl font-bold text-center mb-6 text-base-content">
          Add New Artwork
        </h2>
      </div>
      <div
        className="w-full mx-auto max-w-2xl
  bg-white/90 dark:bg-black/40
  border border-black/10 dark:border-white/20
  shadow-xl rounded-2xl p-8 backdrop-blur-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-base-content">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Artwork title"
                className="input input-bordered w-full bg-base-100 text-base-content"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-base-content">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Painting, Sketch...."
                className="input input-bordered w-full bg-base-100 text-base-content"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-base-content">
              Artwork Image URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="https://image-url....."
              className="input input-bordered w-full bg-base-100 text-base-content"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-base-content">
              Medium / Tools
            </label>
            <input
              type="text"
              name="medium"
              placeholder="Acrylic, Photoshop"
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-base-content">
                Artist Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full bg-base-100 text-base-content"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-base-content">
                Artist Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full bg-base-100 text-base-content"
                readOnly
              />
            </div>
          </div>

          <div className="">
            <label className="block text-sm mb-1 text-base-content">
              Description
            </label>
            <textarea
              rows="6"
              name="description"
              className="textarea textarea-bordered w-full bg-base-100 text-base-content"
              placeholder="Write something about your artwork..."
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-base-content">
                Dimensions (optional)
              </label>
              <input
                type="text"
                name="dimensions"
                placeholder="20 x 30 cm"
                className="input input-bordered w-full bg-bse-100"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-base-content">
                Price (optional)
              </label>
              <input
                type="number"
                name="price"
                placeholder="$"
                className="input input-bordered w-full bg-base-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-base-content">
              Visibility
            </label>
            <select
              name="visibility"
              className="select select-bordered w-full bg-base-100"
              required
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold transition-all duration-300"
          >
            Add ArtWork
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtwork;
