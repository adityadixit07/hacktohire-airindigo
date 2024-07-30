import React from "react";
import { useParams } from "react-router-dom";
import useFlights from "../hooks/useFlights";

function FlightDetailsPage() {
  const { id } = useParams();
  const { flights, loading, error } = useFlights();

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  const flight = flights.find((f) => f.id === id);

  if (!flight) return <div className="text-center">Flight not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Flight Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          {flight.airline} {flight.flight_number}
        </h2>
        <p className="text-lg mb-2">From: {flight.departure}</p>
        <p className="text-lg mb-2">To: {flight.arrival}</p>
        <p className="text-lg mb-2">
          Scheduled: {new Date(flight.scheduled_time).toLocaleString()}
        </p>
        <p className="text-lg mb-2">Gate: {flight.gate}</p>
        <p
          className={`text-lg font-semibold ${
            flight.status === "On Time" ? "text-green-500" : "text-red-500"
          }`}
        >
          Status: {flight.status}
        </p>
      </div>
    </div>
  );
}

export default FlightDetailsPage;
