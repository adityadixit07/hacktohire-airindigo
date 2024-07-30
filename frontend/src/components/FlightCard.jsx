import React from "react";
import { Link } from "react-router-dom";

function FlightCard({ flight }) {
  return (
    <Link to={`/flight/${flight.id}`} className="block">
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold mb-2">
          {flight.airline} {flight.flight_number}
        </h2>
        <p className="text-gray-600">
          {flight.departure} to {flight.arrival}
        </p>
        <p className="text-gray-600">
          Scheduled: {new Date(flight.scheduled_time).toLocaleString()}
        </p>
        <p
          className={`font-semibold ${
            flight.status === "On Time" ? "text-green-500" : "text-red-500"
          }`}
        >
          {flight.status}
        </p>
      </div>
    </Link>
  );
}

export default FlightCard;
