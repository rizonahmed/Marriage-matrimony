import { useEffect, useState } from "react";
import axios from "axios";

const Biodata = () => {
  const [filters, setFilters] = useState({
    ageRange: [18, 50],
    gender: "",
    status: "",
    division: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/biodata");
        setUsers(data);
        setLoading(false);

        // Extract unique divisions dynamically.
        const uniqueDivisions = [...new Set(data.map((user) => user.permanentDivision))].filter(
          Boolean
        );
        setDivisions(uniqueDivisions);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilter = () => {
    return users.filter(
      (user) =>
        user.age >= filters.ageRange[0] &&
        user.age <= filters.ageRange[1] &&
        (filters.gender ? user.biodataType.toLowerCase() === filters.gender : true) &&
        (filters.status ? user.relationshipStatus === filters.status : true) &&
        (filters.division ? user.permanentDivision === filters.division : true)
    );
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
</div>
  }

  return (
    <div className="flex bg-gray-100 min-h-screen p-6 gap-6 mt-28 md:w-11/12 mx-auto">
      {/* Filter Section */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>

        {/* Age Range */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Age (years):</label>
          <div className=" md:flex gap-2">
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={filters.ageRange[0]}
              onChange={(e) =>
                setFilters({ ...filters, ageRange: [+e.target.value, filters.ageRange[1]] })
              }
              className="border border-gray-300 rounded-md p-2 w-full appearance-none focus:ring-2 focus:ring-blue-500"
              placeholder="Min"
            />
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={filters.ageRange[1]}
              onChange={(e) =>
                setFilters({ ...filters, ageRange: [filters.ageRange[0], +e.target.value] })
              }
              className="border border-gray-300 rounded-md p-2 w-full appearance-none focus:ring-2 focus:ring-blue-500"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender:</label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Marital Status */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Marital Status:</label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">All</option>
            <option value="Single">Single</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>

        {/* Division */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Division:</label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            value={filters.division}
            onChange={(e) => setFilters({ ...filters, division: e.target.value })}
          >
            <option value="">All</option>
            {divisions.map((division, index) => (
              <option key={index} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {handleFilter().map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 backdrop-blur-sm bg-opacity-70"
          >
            <img
              src={user.profileImage || "https://via.placeholder.com/300"}
              alt={`${user.name || "No Name"}'s Profile`}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Biodata ID: {user.id || "N/A"}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Type:</strong> {user.biodataType || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Division:</strong> {user.permanentDivision || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Occupation:</strong> {user.occupation || "N/A"}
              </p>
              <button className="mt-4 bg-blue-500 text-white w-full py-3 rounded-md hover:bg-blue-600 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biodata;
