import React from "react";

function TestPage() {
  fetch("http://localhost:8080/product-list/v1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      place: "도쿄",
      theme: "relaxing",
      peopleNum: 2,
      departureDate: "2022-09-01",
      arrivalDate: "2022-09-04",
      departureAirport: "GMP",
      budget: 3000000,
      flightsPrior: 3,
      accommodationsPrior: 5,
      restaurantsPrior: 4,
      attractionsPrior: 2,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  return <div>this is test page to server</div>;
}

export default TestPage;
