import React from 'react';
import useFlights from '../hooks/useFlight';
import FlightCard from './FlightCard';

function FlightList() {
  const { flights, loading, error } = useFlights();

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

export default FlightList;