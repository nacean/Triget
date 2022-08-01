interface travelSpecType {
  place: string;
  people_num: number;
  departure_date: string;
  arrival_date: string;
  departure_airport: string;
  budget: number;
  journey_theme_index: string;
  flights_prior: number;
  accommodations_prior: number;
  restaurants_prior: number;
  attractions_prior: number;
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
        flights: [],
        accommodations: [],
        restaurants: [],
        attractions: [
          {
            travel_time: "12:30",
            _id: 0,
            product_name: "롯데월드",
            subcategory: "테마파크",
            thumbnail:
              "https://image.fmkorea.com/files/attach/new2/20210827/1378413927/100154207/3867607871/dd6b22fc4ee4a915b655b1594f0cdd85.png",
            longitude: 127.0992765,
            latitude: 37.5124159,
            city: "서울",
            state: "잠실",
            country: "대한민국",
            address: "서울특별시 송파구 올림픽로 240",
            price: 50000,
            currency_code: "원",
            review_score: 4.5,
            popularity: 50,
            weekday_hours: ["08:00", "22:00"],
            product_website: "http://www.lotteworld.com/gate.html",
            product_url: "http://www.lotteworld.com/gate.html",
            neighbors: [],
            is_beach_front: false,
            keywords: ["놀이공원", "친구", "어트랙션"],
          },
          {
            travel_time: "13:30",
            _id: 1,
            product_name: "캐리비안 베이",
            subcategory: "테마파크",
            thumbnail:
              "https://image.fmkorea.com/files/attach/new2/20210827/1378413927/100154207/3867607871/dd6b22fc4ee4a915b655b1594f0cdd85.png",
            longitude: 127.0981953,
            latitude: 37.5113522,
            city: "서울",
            state: "잠실",
            country: "대한민국",
            address: "서울특별시 송파구 올림픽로 240",
            price: 50000,
            currency_code: "원",
            review_score: 4.5,
            popularity: 50,
            weekday_hours: ["08:00", "22:00"],
            product_website: "http://www.lotteworld.com/gate.html",
            product_url: "http://www.lotteworld.com/gate.html",
            neighbors: [],
            is_beach_front: false,
            keywords: ["놀이공원", "친구", "어트랙션"],
          },
          {
            travel_time: "14:30",
            _id: 2,
            product_name: "신라호텔",
            subcategory: "테마파크",
            thumbnail:
              "https://image.fmkorea.com/files/attach/new2/20210827/1378413927/100154207/3867607871/dd6b22fc4ee4a915b655b1594f0cdd85.png",
            longitude: 127.1009629,
            latitude: 37.5111945,
            city: "서울",
            state: "잠실",
            country: "대한민국",
            address: "서울특별시 송파구 올림픽로 240",
            price: 50000,
            currency_code: "원",
            review_score: 4.5,
            popularity: 50,
            weekday_hours: ["08:00", "22:00"],
            product_website: "http://www.lotteworld.com/gate.html",
            product_url: "http://www.lotteworld.com/gate.html",
            neighbors: [],
            is_beach_front: false,
            keywords: ["놀이공원", "친구", "어트랙션"],
          },
          {
            travel_time: "15:30",
            _id: 3,
            product_name: "경주월드",
            subcategory: "테마파크",
            thumbnail:
              "https://image.fmkorea.com/files/attach/new2/20210827/1378413927/100154207/3867607871/dd6b22fc4ee4a915b655b1594f0cdd85.png",
            longitude: 127.09646018772331,
            latitude: 37.51087222122172,
            city: "서울",
            state: "잠실",
            country: "대한민국",
            address: "서울특별시 송파구 올림픽로 240",
            price: 50000,
            currency_code: "원",
            review_score: 4.5,
            popularity: 50,
            weekday_hours: ["08:00", "22:00"],
            product_website: "http://www.lotteworld.com/gate.html",
            product_url: "http://www.lotteworld.com/gate.html",
            neighbors: [],
            is_beach_front: false,
            keywords: ["놀이공원", "친구", "어트랙션"],
          },
        ],
      });
    }, 500);
  });

  const travelDatas = await testPromise;

  return travelDatas;
}

export default fetchTravelSpec;
