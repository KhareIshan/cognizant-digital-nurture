import React from "react";

function App() {

  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  const officeSpaces = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai"
    },
    {
      name: "Regus",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "WeWork",
      rent: 90000,
      address: "Hyderabad"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700"
        alt="Office Space"
        width="500"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          ₹{office.rent}
        </span>
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Office Space List</h2>

      {officeSpaces.map((item, index) => (

        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "15px",
            marginBottom: "15px",
            width: "300px"
          }}
        >

          <h3>{item.name}</h3>

          <p>
            <b>Rent:</b>{" "}
            <span
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              ₹{item.rent}
            </span>
          </p>

          <p><b>Address:</b> {item.address}</p>

        </div>

      ))}

    </div>
  );
}

export default App;