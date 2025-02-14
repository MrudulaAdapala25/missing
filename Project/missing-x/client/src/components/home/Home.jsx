import { useState, useEffect } from "react";
import "./Home.css"; // Importing the CSS file

function Home() {
  // Define state for missing persons and search input
  const [missingPersons, setMissingPersons] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Sample data for missing persons (typically fetched from a backend API)
  const initialMissingPersons = [
    {
      id: 1,
      name: "John Doe",
      location: "New York, NY",
      description: "Last seen near Central Park wearing a blue jacket.",
      imgSrc: "https://www.shutterstock.com/shutterstock/photos/752963539/display_1500/stock-vector-silhouette-missing-person-with-stamp-752963539.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      location: "Los Angeles, CA",
      description: "Missing since 2020, last seen in downtown LA.",
      imgSrc: "https://www.shutterstock.com/shutterstock/photos/752963539/display_1500/stock-vector-silhouette-missing-person-with-stamp-752963539.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      location: "Chicago, IL",
      description: "Disappeared while traveling across the Midwest.",
      imgSrc: "https://www.shutterstock.com/shutterstock/photos/752963539/display_1500/stock-vector-silhouette-missing-person-with-stamp-752963539.jpg",
    },
  ];

  // Load the initial list of missing persons on component mount
  useEffect(() => {
    setMissingPersons(initialMissingPersons);
  }, []);

  // Handle search logic
  const searchPerson = () => {
    const filteredPersons = initialMissingPersons.filter(
      (person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        person.location.toLowerCase().includes(searchInput.toLowerCase())
    );
    setMissingPersons(filteredPersons);
  };

  return (
    <div className="home-container home-page">
  {/* Top part with background image */}
  <div className="top-part">
  
  </div>
  
  {/* Bottom part with the rest of the content */}
  <div className="bottom-part">
    {/* Existing code for search box and missing persons list */}
    <div className="search-box">
      <input
        type="text"
        id="searchInput"
        placeholder="Search by name or location"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={searchPerson}>Search</button>
    </div>

    <div id="missingPersonsList" className="missing-persons-list">
      {missingPersons.map((person) => (
        <div key={person.id} className="person-card">
          <img src={person.imgSrc} alt={person.name} />
          <h3>{person.name}</h3>
          <p><strong>Location:</strong> {person.location}</p>
          <p>{person.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      
  );
}

export default Home;
