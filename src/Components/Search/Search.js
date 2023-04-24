import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const apiKey = "mwyG6N4ZzAp_dAhZXGYRCbIbeYsxBlXhupTxixJ9zro";

  const handleSearch = async (query) => {
    console.log(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`
    );
    console.log(query);
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`
    );
    const data = response.data.results.map((result) => result.urls.regular);
    setImages(data);
    // console.log(response.data.results.map((result) => result.urls.regular));
  };

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="h-screen  w-full">
      <>
        <div class=" bg-neutral-600 h-64 flex">
          <div class="m-auto flex">
            <input
              type="text"
              placeholder="Enter Your Search Term"
              class="w-full rounded-r-none bg-gray-200 p-2 px-10 rounded-full"
              value={query}
              onChange={onQueryChange}
            />
            <button
              className="bg-indigo-600 text-white  px-6 text-lg font-semibold py-2 rounded-full rounded-l-none"
              onClick={() => handleSearch(query)}
            >
              Search
            </button>
          </div>
        </div>
      </>
      <div class="mt-8 px-10 sm:px-24 grid grid-cols-2 gap-4 sm:grid-cols-2 md:mb-8 md:grid-cols-3 xl:grid-cols-4 md:gap-6 xl:gap-8">
        {images.length === 0 ? (
          <h1 className="text-4xl text-center">No Images Found</h1>
        ) : null}
        {images.length !== 0 &&
          images.map((image) => (
            <a
              href="!#"
              class="group relative flex h-48 items-end overflow-hidden rounded-md bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={image}
                loading="lazy"
                alt={query}
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
          ))}
      </div>
    </div>
  );
};
export default Search;
