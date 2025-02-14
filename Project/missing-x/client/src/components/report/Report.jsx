import './Report.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Report = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setimage] = useState('');
  const [LVP, setLVP] = useState('');
  const [lastSeen, setLastSeen] = useState('');
  const [missingPersons, setMissingPersons] = useState([]);

  const handleSubmit = (event) => {  
    event.preventDefault();
    const newPerson = { name, age, image, LVP, lastSeen };
    setMissingPersons([...missingPersons, newPerson]);
    setName('');
    setAge('');
    setimage('');
    setLVP('');
    setLastSeen('');
  };

  return (
    <div className="container text-left">
      <h1>Report a Missing Person</h1>
      <form onSubmit={handleSubmit} className="grid-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="url" id="image" value={image} onChange={(e) => setimage(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="LVP">Last Visited Places:</label>
          <input type="text" id="LVP" value={LVP} onChange={(e) => setLVP(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastSeen">Last Seen:</label>
          <input type="text" id="lastSeen" value={lastSeen} onChange={(e) => setLastSeen(e.target.value)} required />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
      <ul className="registered-list">
        {missingPersons.map((person, index) => (
          <li key={index}>Data Registered</li>
        ))}
      </ul>
      <Link to="/" className="back-link">Back to Homepage</Link>
    </div>
  );
};

export default Report;
