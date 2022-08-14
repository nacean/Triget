interface travelSpecType {
  place: string;
  theme: string;
  peopleNum: number;
  departureDate: string;
  arrivalDate: string;
  departureAirport: string;
  budget: number;
  flightsPrior: number;
  accommodationsPrior: number;
  restaurantsPrior: number;
  attractionsPrior: number;
}

async function fetchTravelSpec(travelSpec?: travelSpecType) {
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
        journeyId: "62f3d86bb5a75626d0b4cbe4",
        flightsBudget: 642857.1,
        accommodationsBudget: 1071428.6,
        restaurantsBudget: 1071428.6,
        attractionsBudget: 428571.47,
        flights: {
          content: [
            {
              _id: {
                timestamp: 1660147847,
                date: "2022-08-10T16:10:47.000+00:00",
              },
              journeyId: "62f3d86bb5a75626d0b4cbe4",
              skyScannerId:
                "12409-2209011010--32161-0-14788-2209011235|14788-2209040855--30816-0-12409-2209041125",
              price: 570400.0,
              legs: [
                {
                  _id: null,
                  skyScannerId: "12409-2209011010--32161-0-14788-2209011235",
                  origin: { iataCode: "ICN", name: "test" },
                  destination: { iataCode: "NRT", name: "iWantToSleep" },
                  departure: "2022-09-01T10:10:00",
                  arrival: "2022-09-01T12:35:00",
                  durationInMinutes: 145,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-32161",
                      name: "Jin Air",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-32161",
                      order: 0,
                      origin: { iataCode: "ICN", name: "test" },
                      destination: { iataCode: "NRT", name: "iWantToSleep" },
                      departure: "2022-09-01T10:10:00",
                      arrival: "2022-09-01T12:35:00",
                      durationInMinutes: 145,
                      flightNumber: "201",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-32161",
                        name: "Jin Air",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                      },
                    },
                  ],
                },
                {
                  _id: null,
                  skyScannerId: "14788-2209040855--30816-0-12409-2209041125",
                  origin: { iataCode: "NRT", name: "test" },
                  destination: { iataCode: "ICN", name: "iWantToSleep" },
                  departure: "2022-09-04T08:55:00",
                  arrival: "2022-09-04T11:25:00",
                  durationInMinutes: 150,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-30816",
                      name: "Zipair",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/_Z.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-30816",
                      order: 0,
                      origin: { iataCode: "NRT", name: "test" },
                      destination: { iataCode: "ICN", name: "iWantToSleep" },
                      departure: "2022-09-04T08:55:00",
                      arrival: "2022-09-04T11:25:00",
                      durationInMinutes: 150,
                      flightNumber: "41",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-30816",
                        name: "Zipair",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/_Z.png",
                      },
                    },
                  ],
                },
              ],
              score: 9.19245,
              type: "Best",
              totalStopCounts: 0,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.skyscanner.net/transport/flights/icn/nrt/220901/220904/config/12409-2209011010--32161-0-14788-2209011235|14788-2209040855--30816-0-12409-2209041125?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1",
            },
            {
              _id: {
                timestamp: 1660147847,
                date: "2022-08-10T16:10:47.000+00:00",
              },
              journeyId: "62f3d86bb5a75626d0b4cbe4",
              skyScannerId:
                "12409-2209011010--32161-0-14788-2209011235|14788-2209041510--31731-0-12409-2209041800",
              price: 543550.0,
              legs: [
                {
                  _id: null,
                  skyScannerId: "12409-2209011010--32161-0-14788-2209011235",
                  origin: { iataCode: "ICN", name: "test" },
                  destination: { iataCode: "NRT", name: "iWantToSleep" },
                  departure: "2022-09-01T10:10:00",
                  arrival: "2022-09-01T12:35:00",
                  durationInMinutes: 145,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-32161",
                      name: "Jin Air",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-32161",
                      order: 0,
                      origin: { iataCode: "ICN", name: "test" },
                      destination: { iataCode: "NRT", name: "iWantToSleep" },
                      departure: "2022-09-01T10:10:00",
                      arrival: "2022-09-01T12:35:00",
                      durationInMinutes: 145,
                      flightNumber: "201",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-32161",
                        name: "Jin Air",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                      },
                    },
                  ],
                },
                {
                  _id: null,
                  skyScannerId: "14788-2209041510--31731-0-12409-2209041800",
                  origin: { iataCode: "NRT", name: "test" },
                  destination: { iataCode: "ICN", name: "iWantToSleep" },
                  departure: "2022-09-04T15:10:00",
                  arrival: "2022-09-04T18:00:00",
                  durationInMinutes: 170,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141541,
                        date: "2022-08-10T14:25:41.000+00:00",
                      },
                      skyScannerId: "-31731",
                      name: "T'way Air",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/9R.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-31731",
                      order: 0,
                      origin: { iataCode: "NRT", name: "test" },
                      destination: { iataCode: "ICN", name: "iWantToSleep" },
                      departure: "2022-09-04T15:10:00",
                      arrival: "2022-09-04T18:00:00",
                      durationInMinutes: 170,
                      flightNumber: "218",
                      operation: {
                        _id: {
                          timestamp: 1660141541,
                          date: "2022-08-10T14:25:41.000+00:00",
                        },
                        skyScannerId: "-31731",
                        name: "T'way Air",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/9R.png",
                      },
                    },
                  ],
                },
              ],
              score: 9.03407,
              type: "Best",
              totalStopCounts: 0,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.skyscanner.net/transport/flights/icn/nrt/220901/220904/config/12409-2209011010--32161-0-14788-2209011235|14788-2209041510--31731-0-12409-2209041800?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1",
            },
            {
              _id: {
                timestamp: 1660147847,
                date: "2022-08-10T16:10:47.000+00:00",
              },
              journeyId: "62f3d86bb5a75626d0b4cbe4",
              skyScannerId:
                "12409-2209011000--32698-0-14788-2209011220|14788-2209040855--30816-0-12409-2209041125",
              price: 598000.0,
              legs: [
                {
                  _id: null,
                  skyScannerId: "12409-2209011000--32698-0-14788-2209011220",
                  origin: { iataCode: "ICN", name: "test" },
                  destination: { iataCode: "NRT", name: "iWantToSleep" },
                  departure: "2022-09-01T10:00:00",
                  arrival: "2022-09-01T12:20:00",
                  durationInMinutes: 140,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-32698",
                      name: "Air Busan",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/0E.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-32698",
                      order: 0,
                      origin: { iataCode: "ICN", name: "test" },
                      destination: { iataCode: "NRT", name: "iWantToSleep" },
                      departure: "2022-09-01T10:00:00",
                      arrival: "2022-09-01T12:20:00",
                      durationInMinutes: 140,
                      flightNumber: "164",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-32698",
                        name: "Air Busan",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/0E.png",
                      },
                    },
                  ],
                },
                {
                  _id: null,
                  skyScannerId: "14788-2209040855--30816-0-12409-2209041125",
                  origin: { iataCode: "NRT", name: "test" },
                  destination: { iataCode: "ICN", name: "iWantToSleep" },
                  departure: "2022-09-04T08:55:00",
                  arrival: "2022-09-04T11:25:00",
                  durationInMinutes: 150,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-30816",
                      name: "Zipair",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/_Z.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-30816",
                      order: 0,
                      origin: { iataCode: "NRT", name: "test" },
                      destination: { iataCode: "ICN", name: "iWantToSleep" },
                      departure: "2022-09-04T08:55:00",
                      arrival: "2022-09-04T11:25:00",
                      durationInMinutes: 150,
                      flightNumber: "41",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-30816",
                        name: "Zipair",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/_Z.png",
                      },
                    },
                  ],
                },
              ],
              score: 8.91936,
              type: "Best",
              totalStopCounts: 0,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.skyscanner.net/transport/flights/icn/nrt/220901/220904/config/12409-2209011000--32698-0-14788-2209011220|14788-2209040855--30816-0-12409-2209041125?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1",
            },
            {
              _id: {
                timestamp: 1660147847,
                date: "2022-08-10T16:10:47.000+00:00",
              },
              journeyId: "62f3d86bb5a75626d0b4cbe4",
              skyScannerId:
                "12409-2209011010--32161-0-14788-2209011235|14788-2209041050--32161-0-12409-2209041320",
              price: 591000.0,
              legs: [
                {
                  _id: null,
                  skyScannerId: "12409-2209011010--32161-0-14788-2209011235",
                  origin: { iataCode: "ICN", name: "test" },
                  destination: { iataCode: "NRT", name: "iWantToSleep" },
                  departure: "2022-09-01T10:10:00",
                  arrival: "2022-09-01T12:35:00",
                  durationInMinutes: 145,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-32161",
                      name: "Jin Air",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-32161",
                      order: 0,
                      origin: { iataCode: "ICN", name: "test" },
                      destination: { iataCode: "NRT", name: "iWantToSleep" },
                      departure: "2022-09-01T10:10:00",
                      arrival: "2022-09-01T12:35:00",
                      durationInMinutes: 145,
                      flightNumber: "201",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-32161",
                        name: "Jin Air",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                      },
                    },
                  ],
                },
                {
                  _id: null,
                  skyScannerId: "14788-2209041050--32161-0-12409-2209041320",
                  origin: { iataCode: "NRT", name: "test" },
                  destination: { iataCode: "ICN", name: "iWantToSleep" },
                  departure: "2022-09-04T10:50:00",
                  arrival: "2022-09-04T13:20:00",
                  durationInMinutes: 150,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-32161",
                      name: "Jin Air",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-32161",
                      order: 0,
                      origin: { iataCode: "NRT", name: "test" },
                      destination: { iataCode: "ICN", name: "iWantToSleep" },
                      departure: "2022-09-04T10:50:00",
                      arrival: "2022-09-04T13:20:00",
                      durationInMinutes: 150,
                      flightNumber: "202",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-32161",
                        name: "Jin Air",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                      },
                    },
                  ],
                },
              ],
              score: 8.87204,
              type: "Fastest",
              totalStopCounts: 0,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.skyscanner.net/transport/flights/icn/nrt/220901/220904/config/12409-2209011010--32161-0-14788-2209011235|14788-2209041050--32161-0-12409-2209041320?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1",
            },
            {
              _id: {
                timestamp: 1660147850,
                date: "2022-08-10T16:10:50.000+00:00",
              },
              journeyId: "62f3d86bb5a75626d0b4cbe4",
              skyScannerId:
                "12409-2209011010--32161-0-14788-2209011235|14788-2209041335--32161-0-12409-2209041605",
              price: 591200.0,
              legs: [
                {
                  _id: null,
                  skyScannerId: "12409-2209011010--32161-0-14788-2209011235",
                  origin: { iataCode: "ICN", name: "test" },
                  destination: { iataCode: "NRT", name: "iWantToSleep" },
                  departure: "2022-09-01T10:10:00",
                  arrival: "2022-09-01T12:35:00",
                  durationInMinutes: 145,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-32161",
                      name: "Jin Air",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-32161",
                      order: 0,
                      origin: { iataCode: "ICN", name: "test" },
                      destination: { iataCode: "NRT", name: "iWantToSleep" },
                      departure: "2022-09-01T10:10:00",
                      arrival: "2022-09-01T12:35:00",
                      durationInMinutes: 145,
                      flightNumber: "201",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-32161",
                        name: "Jin Air",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                      },
                    },
                  ],
                },
                {
                  _id: null,
                  skyScannerId: "14788-2209041335--32161-0-12409-2209041605",
                  origin: { iataCode: "NRT", name: "test" },
                  destination: { iataCode: "ICN", name: "iWantToSleep" },
                  departure: "2022-09-04T13:35:00",
                  arrival: "2022-09-04T16:05:00",
                  durationInMinutes: 150,
                  timeDeltaInDays: 0,
                  stopCount: 0,
                  isSmallestStops: true,
                  operations: [
                    {
                      _id: {
                        timestamp: 1660141550,
                        date: "2022-08-10T14:25:50.000+00:00",
                      },
                      skyScannerId: "-32161",
                      name: "Jin Air",
                      logoUrl:
                        "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                    },
                  ],
                  airportChangeIn: [],
                  segments: [
                    {
                      _id: null,
                      skyScannerId: "-32161",
                      order: 0,
                      origin: { iataCode: "NRT", name: "test" },
                      destination: { iataCode: "ICN", name: "iWantToSleep" },
                      departure: "2022-09-04T13:35:00",
                      arrival: "2022-09-04T16:05:00",
                      durationInMinutes: 150,
                      flightNumber: "202",
                      operation: {
                        _id: {
                          timestamp: 1660141550,
                          date: "2022-08-10T14:25:50.000+00:00",
                        },
                        skyScannerId: "-32161",
                        name: "Jin Air",
                        logoUrl:
                          "https://logos.skyscnr.com/images/airlines/favicon/LJ.png",
                      },
                    },
                  ],
                },
              ],
              score: 9.28431,
              type: "Best",
              totalStopCounts: 0,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.skyscanner.net/transport/flights/icn/nrt/220901/220904/config/12409-2209011010--32161-0-14788-2209011235|14788-2209041335--32161-0-12409-2209041605?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1",
            },
          ],
          pageable: {
            sort: {
              empty: false,
              unsorted: false,
              sorted: true,
            },
            offset: 0,
            pageNumber: 0,
            pageSize: 10,
            paged: true,
            unpaged: false,
          },
          last: true,
          totalPages: 1,
          totalElements: 5,
          first: true,
          size: 10,
          number: 0,
          sort: {
            empty: false,
            unsorted: false,
            sorted: true,
          },
          numberOfElements: 5,
          empty: false,
        },
        accommodations: {
          content: [
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "5752171",
              name: "Tokyo Bay Shiomi Prince Hotel",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/300681318.jpg?k=06b56093eb19871044b27b38640a14d46d59ce7a517c68040b2bb8e68afacc72&o=",
              subcategory: "Hotel",
              longitude: 139.81714,
              latitude: 35.660206,
              city: "Tokyo",
              district: "Koto Ward",
              address: "Koto-ku Shiomi 2-8-16",
              price: 15048.0,
              currencyCode: "JPY",
              rating: 9.3,
              popularity: 378,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.booking.com/hotel/jp/tokyo-bay-shiomi-prince.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "5136503",
              name: "MIMARU TOKYO UENO OKACHIMACHI",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/245132440.jpg?k=ef8f983e2773dedd7ccb942d345acea9282afc648c128c53d5ecf5899fcd4552&o=",
              subcategory: "Hotel",
              longitude: 139.77162,
              latitude: 35.7066,
              city: "Tokyo",
              district: "Taito",
              address: "Taito-ku Ueno 1-chome",
              price: 16720.0,
              currencyCode: "JPY",
              rating: 9.3,
              popularity: 52,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.booking.com/hotel/jp/mimaru-tokyo-ueno-okachimachi.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "3818047",
              name: "karaksa hotel premier Tokyo Ginza",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/193427930.jpg?k=b94573b531ca5ed40580c1746c60b42839a779272acd58737ff97f159b465d71&o=",
              subcategory: "Hotel",
              longitude: 139.76157,
              latitude: 35.667076,
              city: "Tokyo",
              district: "Minato",
              address: "Minato-ku, Shinbashi 1-6-6",
              price: 25650.0,
              currencyCode: "JPY",
              rating: 9.2,
              popularity: 1762,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.booking.com/hotel/jp/jia-cheng-karakusahoterudong-jing-yin-zuo-puremia.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "4142401",
              name: "MIMARU TOKYO HATCHOBORI",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/193414326.jpg?k=c2025c0dc2a15dca2f27a0845ce1e1c24d851c5a38cccb5e0563cc6e4e7beebc&o=",
              subcategory: "Hotel",
              longitude: 139.77806,
              latitude: 35.677586,
              city: "Tokyo",
              district: "Chuo Ward",
              address: "3-8-8 NIhombashi Kayabacho, Chuo-ku",
              price: 18287.5,
              currencyCode: "JPY",
              rating: 9.2,
              popularity: 240,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.booking.com/hotel/jp/mimaru-tokyo-hatchobori.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "7911834",
              name: "Hotel KOH Asakusa",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/326283170.jpg?k=6004ee6a360158878afdeada533f142afe7e0810a5fc4bd92687279c64524add&o=",
              subcategory: "Hotel",
              longitude: 139.8021,
              latitude: 35.716908,
              city: "Tokyo",
              district: "Taito",
              address: "７丁目５−２",
              price: 7219.28,
              currencyCode: "JPY",
              rating: 9.2,
              popularity: 32,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl: "https://www.booking.com/hotel/jp/koh-asakusa.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "2741152",
              name: "Tokyo Bay Tokyu Hotel",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/334248464.jpg?k=338b5574e1db32887c25d9c989675a3455f06d3db635fe6ccdfa66864ac8d640&o=",
              subcategory: "Hotel",
              longitude: 139.93248,
              latitude: 35.637638,
              city: "Tokyo",
              district: "Urayasu",
              address: "Hinode 7-2-3",
              price: 15010.0,
              currencyCode: "JPY",
              rating: 9.1,
              popularity: 4229,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.booking.com/hotel/jp/tokyo-bay-tokyu.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "3104773",
              name: "Hotel Gracery Asakusa",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/195729217.jpg?k=05dd7cd8158df0c145d6960bbfaf5dc16125cf4d1bd064d3b7571aae8c17dcd5&o=",
              subcategory: "Hotel",
              longitude: 139.79535,
              latitude: 35.709637,
              city: "Tokyo",
              district: "Taito",
              address: "Taito-ku Kaminarimon 2-10-2",
              price: 8550.0,
              currencyCode: "JPY",
              rating: 9.1,
              popularity: 2123,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.booking.com/hotel/jp/gracery-asakusa.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "5839107",
              name: "Mitsui Garden Hotel Toyosu BAYSIDE CROSS Tokyo",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/291267242.jpg?k=da3c09e2c38969702c3e8ea9839afd27436492f3beda43f50309773880209b81&o=",
              subcategory: "Hotel",
              longitude: 139.7946,
              latitude: 35.654747,
              city: "Tokyo",
              district: "Koto Ward",
              address: "Koto-ku, Toyosu 2-2-1",
              price: 14858.0,
              currencyCode: "JPY",
              rating: 9.1,
              popularity: 1824,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.booking.com/hotel/jp/mitsui-garden-toyosu-bayside-cross-tokyo.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "4758395",
              name: "THE BLOSSOM HIBIYA",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/216140703.jpg?k=977c05f326616bb05e1f0c56a367192bee7535f785c63434df68cf0c3c4b30f8&o=",
              subcategory: "Hotel",
              longitude: 139.75671,
              latitude: 35.668785,
              city: "Tokyo",
              district: "Minato",
              address: "Shinbashi 1-1-13",
              price: 17100.0,
              currencyCode: "JPY",
              rating: 9.0,
              popularity: 826,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.booking.com/hotel/jp/the-blossom-hibiya.html",
            },
            {
              _id: {
                timestamp: 1659346219,
                date: "2022-08-01T09:30:19.000+00:00",
              },
              bookingsId: "4424829",
              name: "TSUKI Tokyo",
              thumbnail:
                "https://cf.bstatic.com/xdata/images/hotel/square60/202492865.jpg?k=14c34f98d0896f1a41d9f3964d2e8ff592fd82b41cba1a89db3b4523707abf1f&o=",
              subcategory: "Hotel",
              longitude: 139.77167,
              latitude: 35.66925,
              city: "Tokyo",
              district: "Chuo Ward",
              address: "Chuo-ku Tsukiji 1-9-4",
              price: 13680.0,
              currencyCode: "JPY",
              rating: 9.0,
              popularity: 757,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl: "https://www.booking.com/hotel/jp/tsuki.html",
            },
          ],
          pageable: {
            sort: {
              empty: false,
              unsorted: false,
              sorted: true,
            },
            offset: 0,
            pageNumber: 0,
            pageSize: 10,
            paged: true,
            unpaged: false,
          },
          last: false,
          totalPages: 10,
          totalElements: 100,
          first: true,
          size: 10,
          number: 0,
          sort: {
            empty: false,
            unsorted: false,
            sorted: true,
          },
          numberOfElements: 10,
          empty: false,
        },
        restaurants: {
          content: [
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "14015325",
              name: "Coffee Wrights Kuramae",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/12/c3/89/1b/photo2jpg.jpg",
              subcategory: "['cafe']",
              longitude: 139.78981,
              latitude: 35.704063,
              city: "Tokyo",
              state: "Taito",
              country: "Asia/Tokyo",
              address: "4-20-2 Kuramae 1f, Taito 111-0051 Tokyo Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 7,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g1066461-d14015325-Reviews-Coffee_Wrights_Kuramae-Taito_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite:
                "http://wat-inc.jp/shop/coffee-wrights%E3%80%80%E8%94%B5%E5%89%8D/",
              weekdayHours: "",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "3237695",
              name: "Kagurazaka Kurosu",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/0e/e9/48/c7/caption.jpg",
              subcategory: "['japanese']",
              longitude: 139.74017,
              latitude: 35.702908,
              city: "Tokyo",
              state: "Shinjuku",
              country: "Asia/Tokyo",
              address: "4-11 Tsukudocho, Shinjuku 62-0821 Tokyo Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 4,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g1066457-d3237695-Reviews-Kagurazaka_Kurosu-Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://kagurazaka-x.com/index.html",
              weekdayHours: "",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "3687280",
              name: "Habukatei",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/0d/a0/d6/58/caption.jpg",
              subcategory: "['japanese']",
              longitude: 139.74034,
              latitude: 35.702854,
              city: "Tokyo",
              state: "Shinjuku",
              country: "Asia/Tokyo",
              address:
                "3-3 Tsukudocho Matsuihonsya Bldg 1F, Shinjuku 162-0821 Tokyo Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 4,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g1066457-d3687280-Reviews-Habukatei-Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://www.habukatei.jp/top.html",
              weekdayHours: "",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "7081902",
              name: "Sushi Matsumtoo",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/06/93/b0/c4/caption.jpg",
              subcategory: "['japanese', 'sushi']",
              longitude: 139.74004,
              latitude: 35.702843,
              city: "Tokyo",
              state: "Shinjuku",
              country: "Asia/Tokyo",
              address:
                "4-1 Tsukudocho ASK Bldg. 1B, Shinjuku 162-0821 Tokyo Prefecture",
              price: 4,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 2,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g1066457-d7081902-Reviews-Sushi_Matsumtoo-Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "",
              weekdayHours: "",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "19837460",
              name: "Le Chocolat Alain Ducasse Haneda Airport",
              thumbnail: "",
              subcategory: "[]",
              longitude: 139.7887,
              latitude: 35.55117,
              city: "Tokyo",
              state: "Ota",
              country: "Asia/Tokyo",
              address:
                "3-3-2 Hanedakuko Passenger Terminal 2 2F, Ota 144-0041 Tokyo Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 2,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g1066454-d19837460-Reviews-Le_Chocolat_Alain_Ducasse_Haneda_Airport-Ota_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "https://lechocolat-alainducasse.jp/addresses",
              weekdayHours: "",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "4663895",
              name: "Fish Village Nishiki",
              thumbnail: "",
              subcategory: "['japanese', 'seafood', 'kappo']",
              longitude: 139.90207,
              latitude: 35.703426,
              city: "Tokyo",
              state: "Edogawa",
              country: "Asia/Tokyo",
              address:
                "7-12-15 Shinozakimachi, Edogawa 133-0061 Tokyo Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 1,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g1066445-d4663895-Reviews-Fish_Village_Nishiki-Edogawa_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "",
              weekdayHours:
                "['Monday: Closed', 'Tuesday: 11:30 - 14:00,  17:30 - 23:00', 'Wednesday: 11:30 - 14:00,  17:30 - 23:00', 'Thursday: 11:30 - 14:00,  17:30 - 23:00', 'Friday: 11:30 - 14:00,  17:30 - 23:00', 'Saturday: 11:30 - 14:00,  17:30 - 23:00', 'Sunday: 11:30 - 14:00,  17:30 - 23:00']",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "20914005",
              name: "Pastel De Vene",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/1b/68/5a/e6/caption.jpg",
              subcategory: "[]",
              longitude: 139.89677,
              latitude: 35.653812,
              city: "Tokyo",
              state: "Urayasu",
              country: "Asia/Tokyo",
              address: "6-2-20 Horie, Urayasu 279-0041 Chiba Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 1,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g298162-d20914005-Reviews-Pastel_De_Vene-Urayasu_Chiba_Prefecture_Kanto.html?m=66827",
              productWebsite: "https://www.facebook.com/pasteldevene",
              weekdayHours: "",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "7489880",
              name: "Tsukushino",
              thumbnail: "",
              subcategory: "['japanese']",
              longitude: 139.84177,
              latitude: 35.70367,
              city: "Tokyo",
              state: "Edogawa",
              country: "Asia/Tokyo",
              address: "3-13-15 Hirai, Edogawa Tokyo Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 1,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g1066445-d7489880-Reviews-Tsukushino-Edogawa_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "",
              weekdayHours:
                "['Monday: 17:00 - 23:30', 'Tuesday: 17:00 - 23:30', 'Wednesday: Closed', 'Thursday: 17:00 - 23:30', 'Friday: 17:00 - 23:30', 'Saturday: 17:00 - 23:30', 'Sunday: 17:00 - 23:30']",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "9905271",
              name: "Steak House Lib Horie",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/1c/a0/c2/ae/photo1jpg.jpg",
              subcategory: "['steakhouse']",
              longitude: 139.89674,
              latitude: 35.653896,
              city: "Tokyo",
              state: "Urayasu",
              country: "Asia/Tokyo",
              address: "6-2-20 Horie, Urayasu 279-0041 Chiba Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 1,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g298162-d9905271-Reviews-Steak_House_Lib_Horie-Urayasu_Chiba_Prefecture_Kanto.html?m=66827",
              productWebsite: "",
              weekdayHours:
                "['Monday: 11:30 - 14:00,  17:00 - 22:00', 'Tuesday: 11:30 - 14:00,  17:00 - 22:00', 'Wednesday: 11:30 - 14:00,  17:00 - 22:00', 'Thursday: Closed', 'Friday: 11:30 - 14:00,  17:00 - 22:00', 'Saturday: 11:30 - 14:00,  17:00 - 22:00', 'Sunday: 11:30 - 14:00,  17:00 - 22:00']",
            },
            {
              _id: {
                timestamp: 1659346127,
                date: "2022-08-01T09:28:47.000+00:00",
              },
              tripadvisorId: "14794378",
              name: "Baskin Robbins Kasai Shimachu Holmes",
              thumbnail: "",
              subcategory: "[]",
              longitude: 139.88312,
              latitude: 35.653442,
              city: "Tokyo",
              state: "Edogawa",
              country: "Asia/Tokyo",
              address: "9-3-6 Higashikasai, Edogawa 134-0084 Tokyo Prefecture",
              price: 0,
              currencyCode: "JPY",
              rating: 5.0,
              popularity: 1,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Restaurant_Review-g1066445-d14794378-Reviews-Baskin_Robbins_Kasai_Shimachu_Holmes-Edogawa_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "",
              weekdayHours: "",
            },
          ],
          pageable: {
            sort: {
              empty: false,
              unsorted: false,
              sorted: true,
            },
            offset: 0,
            pageNumber: 0,
            pageSize: 10,
            paged: true,
            unpaged: false,
          },
          last: false,
          totalPages: 11,
          totalElements: 110,
          first: true,
          size: 10,
          number: 0,
          sort: {
            empty: false,
            unsorted: false,
            sorted: true,
          },
          numberOfElements: 10,
          empty: false,
        },
        attractions: {
          content: [
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "9974956",
              name: "Arigato Japan Food Tours",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/0a/6b/b2/e5/this-was-my-class.jpg",
              subcategory:
                "[{'name': 'food_drink', 'localized_name': 'Food & Drink'}, {'name': 'sightseeing_tours', 'localized_name': 'Tours'}, {'name': 'activities', 'localized_name': 'Activities'}]",
              longitude: 139.7365,
              latitude: 35.6532,
              city: "Tokyo",
              state: "Minato",
              country: "Asia/Tokyo",
              address: "Minato 106-0045 Tokyo Prefecture",
              rating: 5.0,
              popularity: 1461,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g1066451-d9974956-Reviews-Arigato_Japan_Food_Tours-Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://arigatojapan.co.jp/",
              weekdayHours:
                "['Monday: 09:00 - 21:00', 'Tuesday: 09:00 - 21:00', 'Wednesday: 09:00 - 21:00', 'Thursday: 09:00 - 21:00', 'Friday: 09:00 - 21:00', 'Saturday: 09:00 - 21:00', 'Sunday: 09:00 - 21:00']",
              neighbors: "['7278770']",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "12279830",
              name: "Loople",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/0e/e4/a9/ad/caption.jpg",
              subcategory:
                "[{'name': 'wellness_spas', 'localized_name': 'Spas & Wellness'}, {'name': 'activities', 'localized_name': 'Activities'}]",
              longitude: 139.73695,
              latitude: 35.65313,
              city: "Tokyo",
              state: "Azabujuban",
              country: "Asia/Tokyo",
              address:
                "4-6-8 Nissin Bldg 5F, Azabujuban, Minato 106-0045 Tokyo Prefecture",
              rating: 5.0,
              popularity: 20,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g14129734-d12279830-Reviews-Loople-Azabujuban_Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://www.loople.jp/",
              weekdayHours:
                "['Monday: 10:00 - 19:00', 'Tuesday: 10:00 - 19:00', 'Wednesday: 10:00 - 19:00', 'Thursday: 10:00 - 19:00', 'Friday: 10:00 - 19:00', 'Saturday: 10:00 - 19:00', 'Sunday: 10:00 - 19:00']",
              neighbors: "['7278767']",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "12338207",
              name: "inkstand by kakimori",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/19/58/42/b3/inkstand-with.jpg",
              subcategory:
                "[{'name': 'shopping', 'localized_name': 'Shopping'}]",
              longitude: 139.79001,
              latitude: 35.704086,
              city: "Tokyo",
              state: "Taito",
              country: "Asia/Tokyo",
              address:
                "4-20-12 Kuramae Kuramae Bldg. 1F, Taito 111-0051 Tokyo Prefecture",
              rating: 5.0,
              popularity: 19,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g1066461-d12338207-Reviews-Inkstand_by_kakimori-Taito_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://inkstand.jp/",
              weekdayHours:
                "['Monday: 11:00 - 19:00', 'Tuesday: 11:00 - 19:00', 'Wednesday: 11:00 - 19:00', 'Thursday: 11:00 - 19:00', 'Friday: 11:00 - 19:00', 'Saturday: 11:00 - 19:00', 'Sunday: 11:00 - 19:00']",
              neighbors: "['7277907']",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "8746815",
              name: "Cooking Home Tokyo",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/09/e4/43/93/caption.jpg",
              subcategory:
                "[{'name': 'food_drink', 'localized_name': 'Food & Drink'}, {'name': 'classes', 'localized_name': 'Classes & Workshops'}, {'name': 'activities', 'localized_name': 'Activities'}]",
              longitude: 139.79613,
              latitude: 35.654545,
              city: "Tokyo",
              state: "Toyosu",
              country: "Asia/Tokyo",
              address: "Toyosu, Koto 135-0061 Tokyo Prefecture",
              rating: 5.0,
              popularity: 5,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g14134359-d8746815-Reviews-Cooking_Home_Tokyo-Toyosu_Koto_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "",
              weekdayHours: "",
              neighbors: "[]",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "8121684",
              name: "Waki",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/08/5a/47/dc/chado-macha.jpg",
              subcategory:
                "[{'name': 'food_drink', 'localized_name': 'Food & Drink'}, {'name': 'classes', 'localized_name': 'Classes & Workshops'}, {'name': 'activities', 'localized_name': 'Activities'}]",
              longitude: 139.79584,
              latitude: 35.654995,
              city: "Tokyo",
              state: "Toyosu",
              country: "Asia/Tokyo",
              address:
                "2-2 Near Toyosu Yurakucho-Line, Toyosu, Koto 135-0061 Tokyo Prefecture",
              rating: 5.0,
              popularity: 2,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g14134359-d8121684-Reviews-Waki-Toyosu_Koto_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://waki-japan2015.strikingly.com/",
              weekdayHours: "",
              neighbors: "[]",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "12514035",
              name: "Art Factory Jonanjima",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/0f/83/f5/d8/caption.jpg",
              subcategory:
                "[{'name': 'shopping', 'localized_name': 'Shopping'}, {'name': 'museums', 'localized_name': 'Museums'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
              longitude: 139.77623,
              latitude: 35.580624,
              city: "Tokyo",
              state: "Ota",
              country: "Asia/Tokyo",
              address: "2-4-10 Jonanjima, Ota 143-0002 Tokyo Prefecture",
              rating: 5.0,
              popularity: 2,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g1066454-d12514035-Reviews-Art_Factory_Jonanjima-Ota_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://www.artfactory-j.com/",
              weekdayHours: "",
              neighbors: "['7278774']",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "14003829",
              name: "Iwata",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/12/d9/60/3d/photo4jpg.jpg",
              subcategory:
                "[{'name': 'boat_tours_water_sports', 'localized_name': 'Boat Tours & Water Sports'}, {'name': 'outdoor_activities', 'localized_name': 'Outdoor Activities'}, {'name': 'sightseeing_tours', 'localized_name': 'Tours'}, {'name': 'activities', 'localized_name': 'Activities'}]",
              longitude: 139.74268,
              latitude: 35.602882,
              city: "Tokyo",
              state: "Shinagawa",
              country: "Asia/Tokyo",
              address: "1-25-3 Higashioi, Shinagawa 140-0011 Tokyo Prefecture",
              rating: 5.0,
              popularity: 1,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g1066854-d14003829-Reviews-Iwata-Shinagawa_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://www.iwatamaru.com/",
              weekdayHours: "",
              neighbors: "['7278774']",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "3154165",
              name: "Tokyo International Airport (Haneda) Terminal No2 Observation Deck",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/0a/c3/43/4d/caption.jpg",
              subcategory:
                "[{'name': 'landmarks', 'localized_name': 'Sights & Landmarks'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
              longitude: 139.78868,
              latitude: 35.551296,
              city: "Tokyo",
              state: "Ota",
              country: "Asia/Tokyo",
              address:
                "Haneda, Tokyo International Airport, Terminal No2 5F, Ota 144-0041 Tokyo Prefecture",
              rating: 4.5,
              popularity: 1345,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g1066454-d3154165-Reviews-Tokyo_International_Airport_Haneda_Terminal_No2_Observation_Deck-Ota_Tokyo_Tokyo.html?m=66827",
              productWebsite:
                "http://www.tokyo-airport-bldg.co.jp/service_facilities/view_deck/",
              weekdayHours:
                "['Monday: 06:30 - 22:00', 'Tuesday: 06:30 - 22:00', 'Wednesday: 06:30 - 22:00', 'Thursday: 06:30 - 22:00', 'Friday: 06:30 - 22:00', 'Saturday: 06:30 - 22:00', 'Sunday: 06:30 - 22:00']",
              neighbors: "['7278774']",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "1626639",
              name: "Jonanjima SeasidePark",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/14/0a/7e/96/caption.jpg",
              subcategory:
                "[{'name': 'nature_parks', 'localized_name': 'Nature & Parks'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
              longitude: 139.7841,
              latitude: 35.577915,
              city: "Tokyo",
              state: "Ota",
              country: "Asia/Tokyo",
              address: "4-2-2 Jonanjima, Ota 143-0002 Tokyo Prefecture",
              rating: 4.5,
              popularity: 241,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g1066454-d1626639-Reviews-Jonanjima_SeasidePark-Ota_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "",
              weekdayHours:
                "['Monday: 00:00 - 23:59', 'Tuesday: 00:00 - 23:59', 'Wednesday: 00:00 - 23:59', 'Thursday: 00:00 - 23:59', 'Friday: 00:00 - 23:59', 'Saturday: 00:00 - 23:59', 'Sunday: 00:00 - 23:59']",
              neighbors: "['7278774']",
            },
            {
              _id: {
                timestamp: 1659346271,
                date: "2022-08-01T09:31:11.000+00:00",
              },
              tripadvisorId: "4294281",
              name: "Shunkaen BONSAI Museum",
              thumbnail:
                "https://media-cdn.tripadvisor.com/media/photo-o/08/de/d9/34/bonsai.jpg",
              subcategory:
                "[{'name': 'museums', 'localized_name': 'Museums'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
              longitude: 139.88838,
              latitude: 35.70271,
              city: "Tokyo",
              state: "Edogawa",
              country: "Asia/Tokyo",
              address: "1-29-16 Nihori, Edogawa 132-0001 Tokyo Prefecture",
              rating: 4.5,
              popularity: 64,
              keywords: ["놀이공원", "친구", "어트랙션"],
              detailUrl:
                "https://www.tripadvisor.com/Attraction_Review-g1066445-d4294281-Reviews-Shunkaen_BONSAI_Museum-Edogawa_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
              productWebsite: "http://www.kunio-kobayashi.com",
              weekdayHours:
                "['Monday: Closed', 'Tuesday: 10:00 - 17:00', 'Wednesday: 10:00 - 17:00', 'Thursday: 10:00 - 17:00', 'Friday: 10:00 - 17:00', 'Saturday: 10:00 - 17:00', 'Sunday: 10:00 - 17:00']",
              neighbors: "[]",
            },
          ],
          pageable: {
            sort: {
              empty: false,
              unsorted: false,
              sorted: true,
            },
            offset: 0,
            pageNumber: 0,
            pageSize: 10,
            paged: true,
            unpaged: false,
          },
          last: false,
          totalPages: 12,
          totalElements: 116,
          first: true,
          size: 10,
          number: 0,
          sort: {
            empty: false,
            unsorted: false,
            sorted: true,
          },
          numberOfElements: 10,
          empty: false,
        },
      });
    }, 500);
  });

  const travelDatas = await testPromise;

  return travelDatas;
}

export default fetchTravelSpec;
