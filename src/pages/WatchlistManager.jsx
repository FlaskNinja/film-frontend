import React, { useEffect, useState, useContext } from 'react';
import axios from '../axiosConfig';
import { AuthContext } from '../context/AuthContext';

const ManageWatchlists = () => {
  const { token } = useContext(AuthContext);
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [newListName, setNewListName] = useState('');
  const [renameValue, setRenameValue] = useState('');

  // Fetch all user's watchlists
  const fetchLists = async () => {
    try {
      const res = await axios.get('/api/watchlists', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLists(res.data);
    } catch (err) {
      console.error('Failed to load watchlists', err);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  // Create a new watchlist
  const handleCreateList = async () => {
    if (!newListName.trim()) return;
    try {
      await axios.post('/api/watchlists', { name: newListName }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNewListName('');
      fetchLists();
    } catch (err) {
      console.error('Failed to create watchlist', err);
    }
  };

  // Delete list
  const handleDeleteList = async (id) => {
    if (!window.confirm('Are you sure you want to delete this list?')) return;
    try {
      await axios.delete(`/api/watchlists/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSelectedList(null);
      fetchLists();
    } catch (err) {
      console.error('Failed to delete watchlist', err);
    }
  };

  // Rename list
  const handleRenameList = async (id) => {
    try {
      await axios.put(`/api/watchlists/${id}`, { name: renameValue }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchLists();
      setRenameValue('');
    } catch (err) {
      console.error('Failed to rename watchlist', err);
    }
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-white pt-30">Manage Your Watchlists</h2>

      {/* Create New Watchlist */}
     
      <div className="mb-6">
        <input
          type="text"
          placeholder="New watchlist name"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          className="border px-3 py-2 rounded mr-2"
        />
        <button onClick={handleCreateList} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
          Create
        </button>
      </div>

      {/* Watchlists Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lists.map((list) => (
          <div key={list._id} className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{list.name}</h3>

            {/* Rename */}
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Rename list"
                value={renameValue}
                onChange={(e) => setRenameValue(e.target.value)}
                className="px-2 py-1 rounded text-black border"
              />
              <button
                onClick={() => handleRenameList(list._id)}
                className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm"
              >
                Rename
              </button>
            </div>

            <button
              onClick={() => setSelectedList(selectedList?._id === list._id ? null : list)}
              className="text-blue-400 underline text-sm mb-2 cursor-pointer"
            >
              {selectedList?._id === list._id ? 'Hide Movies' : 'View Movies'}
            </button>

            <button
              onClick={() => handleDeleteList(list._id)}
              className="text-red-500 underline text-sm ml-4 cursor-pointer"
            >
              Delete
            </button>

            {/* Show Movies in the list */}
            {selectedList?._id === list._id && list.movies?.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {list.movies.map((movie) => (
                  <div key={movie.movieId}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                      alt={movie.title}
                      className="rounded shadow"
                    />
                    <p className="text-xs mt-1 text-center">{movie.title}</p>
                  </div>
                ))}
              </div>
            )}

            {selectedList?._id === list._id && list.movies?.length === 0 && (
              <p className="text-sm mt-2 text-gray-400">No movies in this list yet.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageWatchlists;

// import React, { useEffect, useState, useContext } from 'react';
// import axios from '../axiosConfig';
// import { AuthContext } from '../context/AuthContext';

// const ManageWatchlists = () => {
//   const { token } = useContext(AuthContext);
//   const [lists, setLists] = useState([]);
//   const [selectedList, setSelectedList] = useState(null);
//   const [newListName, setNewListName] = useState('');
//   const [renameValue, setRenameValue] = useState('');

//   const fetchLists = async () => {
//     try {
//       const res = await axios.get('/api/watchlists', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setLists(res.data);
//     } catch (err) {
//       console.error('Failed to load watchlists', err);
//     }
//   };

//   useEffect(() => {
//     fetchLists();
//   }, []);

//   const handleCreateList = async () => {
//     if (!newListName.trim()) return;
//     try {
//       await axios.post('/api/watchlists', { name: newListName }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setNewListName('');
//       fetchLists();
//     } catch (err) {
//       console.error('Failed to create watchlist', err);
//     }
//   };

//   const handleDeleteList = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this list?')) return;
//     try {
//       await axios.delete(`/api/watchlists/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setSelectedList(null);
//       fetchLists();
//     } catch (err) {
//       console.error('Failed to delete watchlist', err);
//     }
//   };

//   const handleRenameList = async (id) => {
//     try {
//       await axios.put(`/api/watchlists/${id}`, { name: renameValue }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchLists();
//       setRenameValue('');
//     } catch (err) {
//       console.error('Failed to rename watchlist', err);
//     }
//   };

//   return (
//     <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-black via-zinc-900 to-black text-white">
//       <h2 className="text-3xl font-bold mb-8 text-center text-red-500">🎬 Manage Your Watchlists</h2>

//       {/* Create New Watchlist */}
//       <div className="max-w-md mx-auto mb-10 flex gap-3">
//         <input
//           type="text"
//           placeholder="Enter new watchlist name"
//           value={newListName}
//           onChange={(e) => setNewListName(e.target.value)}
//           className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring focus:ring-red-500"
//         />
//         <button
//           onClick={handleCreateList}
//           className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-sm"
//         >
//           Create
//         </button>
//       </div>

//       {/* Watchlists Grid */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {lists.map((list) => (
//           <div
//             key={list._id}
//             className="bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-5 shadow-md"
//           >
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="text-xl font-semibold text-red-400">{list.name}</h3>
//               <button
//                 onClick={() => handleDeleteList(list._id)}
//                 className="text-sm text-red-500 hover:underline"
//               >
//                 Delete
//               </button>
//             </div>

//             <div className="flex gap-2 mb-4">
//               <input
//                 type="text"
//                 placeholder="Rename list"
//                 value={renameValue}
//                 onChange={(e) => setRenameValue(e.target.value)}
//                 className="flex-1 px-2 py-1 rounded text-black"
//               />
//               <button
//                 onClick={() => handleRenameList(list._id)}
//                 className="bg-red-600 hover:bg-red-700 text-sm px-3 py-1 rounded"
//               >
//                 Rename
//               </button>
//             </div>

//             <button
//               onClick={() =>
//                 setSelectedList(selectedList?._id === list._id ? null : list)
//               }
//               className="text-sm text-blue-400 underline"
//             >
//               {selectedList?._id === list._id ? 'Hide Movies' : 'View Movies'}
//             </button>

//             {/* Movie List */}
//             {selectedList?._id === list._id && (
//               <div className="mt-4">
//                 {list.movies?.length > 0 ? (
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                     {list.movies.map((movie) => (
//                       <div key={movie.movieId} className="text-center">
//                         <img
//                           src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
//                           alt={movie.title}
//                           className="rounded-lg shadow w-full object-cover"
//                         />
//                         <p className="text-xs mt-1">{movie.title}</p>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-sm text-gray-400 mt-2">No movies in this list yet.</p>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageWatchlists;
