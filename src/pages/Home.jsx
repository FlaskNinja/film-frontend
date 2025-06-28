// // import React, { useEffect, useState } from 'react';
// // import axios from '../axiosConfig';
// // import { Link } from 'react-router-dom';
// // import { FaRegCirclePlay } from 'react-icons/fa6';
// // import { MdOutlineBookmark } from 'react-icons/md';
// // import MovieCards from '../components/MovieCards'; // You'll create this component
// // import Footer from '../components/Footer'; // Optional
// // import Filter from '../components/Filter';
// // import WatchlistButton from '../components/WatchlistButton';
// // import FavoriteButton from '../components/FavoriteButton';


// // const Home = () => {
// //   const [movie, setMovie] = useState(null);
// //   const [movies, setMovies] = useState([]);


// //   useEffect(() => {
// //     const fetchHeroMovie = async () => {
// //       try {
// //         const res = await axios.get('/api/movies/popular');
// //         console.log('Popular movies:', res.data);
// //         const random = Math.floor(Math.random() * res.data.length);
// //         setMovie(res.data[random]);
// //       } catch (err) {
// //         console.error('Failed to load hero movie', err);
// //       }
// //     };
// //     fetchHeroMovie();
// //   }, []);


// //   const fetchMovies = async ({ genre, year }) => {
// //     try {
// //       const queryParams = [];
// //       if (genre) queryParams.push(`genre=${genre}`);
// //       if (year) queryParams.push(`year=${year}`);
// //       const query = queryParams.length ? `?${queryParams.join('&')}` : '';
// //       const res = await axios.get(`/api/discover${query}`);
// //       setMovies(res.data);
// //     } catch (err) {
// //       console.error('Error fetching filtered movies', err);
// //     }
// //   };




// //   // Fetch popular movies on first load
// //   useEffect(() => {
// //     fetchMovies();
// //   }, []);

// //   return (
// //     <div className="pt-16 bg-black text-white min-h-screen">
// //       {/* Hero Section */}

// //       {movie && (
// //         <div className="relative h-[70vh] w-full">
// //           <img
// //             src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
// //             alt="Hero"
// //             className="w-full h-full object-cover brightness-[0.4]"
// //           />

// //           <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 gap-4">
// //             <h1 className="text-[40px] md:text-[70px] font-bold">Welcome.</h1>
// //             <p className="max-w-xl text-sm md:text-lg text-gray-200">
// //               Discover your next favorite movie with personalized recommendations.
// //             </p>
// //             <div className="flex gap-4 mt-2">
// //               <Link to={`/player/${movie.id}`}>
// //                 <button className="bg-white text-black flex items-center gap-2 px-4 py-2 rounded hover:scale-105 transition">
// //                   <FaRegCirclePlay className="text-xl" /> Play Now
// //                 </button>
// //               </Link>
// //               <div className="flex gap-4 justify-between">
// //                 <WatchlistButton movie={movie} />
// //                 <FavoriteButton movie={movie} />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //       <div className="p-4">
// //         <Filter onFilter={fetchMovies} />

// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-2">
// //           {movies.map((movie) => (
// //             <div
// //               key={movie.id}
// //               className="bg-dark rounded shadow overflow-hidden mx-auto w-full max-w-[180px]"
// //             >
// //               <img
// //                 src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
// //                 alt={movie.title}
// //                 className="w-full h-auto object-cover"
// //               />
// //               <h3 className="text-center mt-2 text-sm font-semibold text-red-200 px-2">
// //                 {movie.title.length > 30 ? movie.title.slice(0, 30) + '…' : movie.title}
// //               </h3>
// //             </div>
// //           ))}
// //         </div>

// //       </div>




// //       {/* Movie Rows */}
// //       <div className="px-4 md:px-12 py-6 space-y-8 bg-gray-900">
// //         <MovieCards title="Popular" category="popular" />
// //         <MovieCards title="Blockbuster Movies" category="top_rated" />
// //         <MovieCards title="Upcoming" category="upcoming" />
// //         <MovieCards title="Top Picks for You" category="now_playing" />
// //       </div>

// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState } from 'react';
// import axios from '../axiosConfig';
// import { Link } from 'react-router-dom';
// import { FaRegCirclePlay } from 'react-icons/fa6';
// import MovieCards from '../components/MovieCards';
// import Footer from '../components/Footer'; // Optional
// import Filter from '../components/Filter';
// import WatchlistButton from '../components/WatchlistButton';
// import FavoriteButton from '../components/FavoriteButton';

// const Home = () => {
//   const [movie, setMovie] = useState(null);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchHeroMovie = async () => {
//       try {
//         const res = await axios.get('/api/movies/popular');
//         console.log('Popular movies:', res.data);
//         const random = Math.floor(Math.random() * res.data.length);
//         setMovie(res.data[random]);
//       } catch (err) {
//         console.error('Failed to load hero movie', err);
//       }
//     };
//     fetchHeroMovie();
//   }, []);

//   const fetchMovies = async ({ genre, year } = {}) => {
//     try {
//       const queryParams = [];
//       if (genre) queryParams.push(`genre=${genre}`);
//       if (year) queryParams.push(`year=${year}`);
//       const query = queryParams.length ? `?${queryParams.join('&')}` : '';
//       const res = await axios.get(`/api/discover${query}`);
//       setMovies(res.data);
//     } catch (err) {
//       console.error('Error fetching filtered movies', err);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return (
//     <div className="pt-16 bg-black text-white min-h-screen">
//       {/* Hero Section */}
//       {movie && (
//         <div className="relative h-[70vh] w-full">
//           <img
//             src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
//             alt="Hero"
//             className="w-full h-full object-cover brightness-[0.3]"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 md:px-20 flex flex-col justify-center gap-4">
//             <h1 className="text-[40px] md:text-[70px] font-extrabold leading-tight">
//               Welcome.
//             </h1>
//             <p className="max-w-xl text-sm md:text-lg text-gray-200">
//               Discover your next favorite movie with personalized recommendations.
//             </p>
//             <div className="flex gap-4 mt-2">
//               <Link to={`/player/${movie.id}`}>
//                 <button className="bg-red-600 text-white flex items-center gap-2 px-5 py-2 rounded-full hover:scale-105 hover:bg-red-700 transition">
//                   <FaRegCirclePlay className="text-xl" /> Play Now
//                 </button>
//               </Link>
//               <div className="flex items-center gap-4">
//                 <WatchlistButton movie={movie} />
//                 <FavoriteButton movie={movie} />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Filter and Movie Grid */}
//       <div className="p-4">
//         <Filter onFilter={fetchMovies} />

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-2">
//           {movies.map((movie) => (
//             <Link to={`/movie/${movie.id}`} key={movie.id}>
//               <div className="bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 mx-auto w-full max-w-[180px]">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                   alt={movie.title}
//                   className="w-full object-cover aspect-[2/3]"
//                 />
//                 <h3 className="text-center mt-2 text-sm font-semibold text-red-300 px-2 pb-3">
//                   {movie.title.length > 30 ? movie.title.slice(0, 30) + '…' : movie.title}
//                 </h3>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Movie Rows */}
//       <div className="px-4 md:px-12 py-6 space-y-8 bg-gray-900 border-t border-gray-700">
//         <MovieCards title="Popular" category="popular" />
//         <MovieCards title="Blockbuster Movies" category="top_rated" />
//         <MovieCards title="Upcoming" category="upcoming" />
//         <MovieCards title="Top Picks for You" category="now_playing" />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';
import { FaRegCirclePlay } from 'react-icons/fa6';
import MovieCards from '../components/MovieCards';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import WatchlistButton from '../components/WatchlistButton';
import FavoriteButton from '../components/FavoriteButton';

const MovieCardsWithFallback = ({ title, category }) => {
  const [hasData, setHasData] = useState(true);

  // Render MovieCards and let it try load; fallback if no data (simulate no data fallback for now)
  return (
    <div>
      {hasData ? (
        <MovieCards
          title={title}
          category={category}
          // In your real MovieCards, you'll check if no data and call setHasData(false)
        />
      ) : (
        <div className="bg-slate-800 rounded-xl h-48 flex items-center justify-center">
          <p className="text-gray-400">No {title} available</p>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchHeroMovie = async () => {
      try {
        const res = await axios.get('/api/movies/popular');
        console.log('Popular movies:', res.data);
        const random = Math.floor(Math.random() * res.data.length);
        setMovie(res.data[random]);
      } catch (err) {
        console.error('Failed to load hero movie', err);
      }
    };
    fetchHeroMovie();
  }, []);

  const fetchMovies = async ({ genre, year } = {}) => {
    try {
      const queryParams = [];
      if (genre) queryParams.push(`genre=${genre}`);
      if (year) queryParams.push(`year=${year}`);
      const query = queryParams.length ? `?${queryParams.join('&')}` : '';
      const res = await axios.get(`/api/discover${query}`);
      setMovies(res.data);
    } catch (err) {
      console.error('Error fetching filtered movies', err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      <Filter onFilter={fetchMovies} />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        {movie && movie.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="Hero"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <p className="text-gray-500">No featured movie available</p>
          </div>
        )}

        {movie && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 md:px-20 flex flex-col justify-center gap-4">
            <h1 className="text-[40px] md:text-[70px] font-extrabold leading-tight">
              Welcome.
            </h1>
            <p className="max-w-xl text-sm md:text-lg text-gray-200">
              Discover your next favorite movie with personalized recommendations.
            </p>
            <div className="flex gap-4 mt-2">
              <Link to={`/player/${movie.id}`}>
                <button className="bg-red-600 text-white flex items-center gap-2 px-5 py-2 rounded-full hover:scale-105 hover:bg-red-700 transition">
                  <FaRegCirclePlay className="text-xl" /> Play Now
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <WatchlistButton movie={movie} />
                <FavoriteButton movie={movie} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Movie Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-2">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 mx-auto w-full max-w-[180px]">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full object-cover aspect-[2/3]"
                  />
                ) : (
                  <div className="w-full aspect-[2/3] bg-gray-700 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">No image</p>
                  </div>
                )}
                <h3 className="text-center mt-2 text-sm font-semibold text-red-300 px-2 pb-3">
                  {movie.title.length > 30 ? movie.title.slice(0, 30) + '…' : movie.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Movie Rows with fallback */}
      <div className="px-4 md:px-12 py-6 space-y-8 bg-gray-900 border-t border-gray-700">
        <MovieCardsWithFallback title="Popular" category="popular" />
        <MovieCardsWithFallback title="Blockbuster Movies" category="top_rated" />
        <MovieCardsWithFallback title="Upcoming" category="upcoming" />
        <MovieCardsWithFallback title="Top Picks for You" category="now_playing" />
      </div>
    </div>
  );
};

export default Home;
