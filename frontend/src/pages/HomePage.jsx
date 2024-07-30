import React from "react";
import SearchBar from "../components/SearchBar";
import FlightList from "../components/FlightList";
function HomePage() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Flight Status</h1>
      <SearchBar onSearch={handleSearch} />
      <FlightList />
    </div>
  );
}

export default HomePage;
