import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world.",
    imageUrl:
      "https://www.exp1.com/wp-content/uploads/sites/7/2020/07/empire_state_building_50_1_50-1024x683.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: "40.7484",
      lng: "73.9857",
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Manila City Hall",
    description: "City of Manila near Intramuros.",
    imageUrl:
      "https://media1.thrillophilia.com/filestore/r3otcvldvb148cgjaikec1xd1vbq_1599048517_Manila_City_Hall.jpg?w=1440&dpr=2",
    address: "Padre Burgos Ave, Ermita, Manila, 1000 Metro Manila",
    location: {
      lat: "14.589793°",
      lng: "20.981617",
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
