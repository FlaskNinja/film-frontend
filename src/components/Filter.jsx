// import React, { useEffect, useState } from "react";
// import axios from "../axiosConfig";

// const Filter = ({ onFilter }) => {
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [sortBy, setSortBy] = useState('popularity.desc');


 
//   useEffect(() => {
//     const fetchGenres = async () => {

//       try {
//         const res = await axios.get('/api/genres');
//         console.log(res.data)
//         setGenres(res.data);
//       } catch (err) {
//         console.error('Failed to load genres', err);
//       }
//     };

//     fetchGenres();
//   }, []);

//   //  Handle filter apply
//   const handleFilter = () => {
//     const filterData = {};
//     if (selectedGenre) filterData.genre = selectedGenre;
//     if (selectedYear) filterData.year = selectedYear;
//     onFilter({ genre: selectedGenre, year: selectedYear });
//   };

//   const handleReset = () => {
//     setSelectedGenre('');
//     setSelectedYear('');
//     onFilter({ genre: '', year: '' });
//   };

//   return (
//     <div className="bg-dark p-4 rounded-md flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 items-center justify-between">

//       {/* Sort By */}
//       <div className="flex flex-col">
//         <label className="text-sm font-medium text-white mb-1">Sort By</label>
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="w-48 p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//         >
//           <option value="popularity.desc">Most Popular</option>
//           <option value="vote_average.desc">Top Rated</option>
//           <option value="release_date.desc">Newest</option>
//         </select>
//       </div>

//       {/* Genre */}
//       <div className="flex flex-col">
//         <label className="text-sm font-medium text-white mb-1">Genre</label>
//         <select
//           value={selectedGenre}
//           onChange={(e) => setSelectedGenre(e.target.value)}
//           className="w-48 p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//         >
//           <option value="">All Genres</option>
//           {genres.map((genre) => (
//             <option key={genre.id} value={genre.id}>
//               {genre.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Year */}
//       <div className="flex flex-col">
//         <label className="text-sm font-medium text-white mb-1">Year</label>
//         <input
//           type="number"
//           value={selectedYear}
//           onChange={(e) => setSelectedYear(e.target.value)}
//           placeholder="e.g. 2023"
//           className="w-36 p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-2 mt-2 sm:mt-6">
//         <button
//           onClick={() => onFilter({ genre: selectedGenre, year: selectedYear, sort_by: sortBy })}
//           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
//         >
//           Apply Filter
//         </button>
//         <button
//           onClick={handleReset}
//           className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
//         >
//           Reset
//         </button>
//       </div>
//     </div>

//   );
// };

// export default Filter;


import React, { useState } from 'react';

const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];
const years = Array.from({ length: 20 }, (_, i) => `${2025 - i}`);

const Filter = ({ onFilter }) => {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleFilter = () => {
    onFilter({ genre, year });
  };

  const clearFilter = () => {
    setGenre('');
    setYear('');
    onFilter({});
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-6 shadow-md flex flex-col md:flex-row items-center gap-4 md:justify-between text-sm">
      <div className="flex gap-4 flex-wrap w-full md:w-auto">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="bg-gray-900 text-white border border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g} value={g.toLowerCase()}>{g}</option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-gray-900 text-white border border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">All Years</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 mt-2 md:mt-0">
        <button
          onClick={handleFilter}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition font-semibold"
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilter}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
