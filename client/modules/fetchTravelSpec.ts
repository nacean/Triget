interface travelSpecType {
  place: string;
  people_num: number;
  departure_date: any;
  arrival_date: any;
  departure_airport: string;
  budget: number;
  journey_theme: string;
  airport_prior: number;
  accommodation_prior: number;
  restaurant_prior: number;
  activity_prior: number;
}

async function fetchTravelSpec(travelSpec: travelSpecType) {
  //   const travelDatas = fetch("#/products/list", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: "Test",
  //       body: "I am testing!",
  //       userId: 1,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => data);

  const testPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        journey_id: 9999,
        airports: [],
        accommodations: [],
        restaurants: [],
        attractions: [],
      });
    }, 2000);
  });

  const travelDatas = await testPromise;

  return travelDatas;
}

export default fetchTravelSpec;
