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
        "journeyId": "62fe12626a7bd62cc712c716",
        "flightsBudget": 1233231.0,
        "accommodationsBudget": 803076.8,
        "restaurantsBudget": 803076.8,
        "attractionsBudget": 321230.75,
        "flights": {
            "content": [
                {
                    "id": "62fe12696a7bd62cc712c71d",
                    "price": 1143231.0,
                    "legs": [
                        {
                            "origin": {
                                "id": "62fceeaa6b3bd329c9f18bfe",
                                "iata": "GMP",
                                "name": "서울 김포국제공항",
                                "longitude": 126.79447,
                                "latitude": 37.558655,
                                "cityInEnglish": "Seoul"
                            },
                            "destination": {
                                "id": "62f3b8879a24ae3eec64a551",
                                "iata": "NRT",
                                "name": "도쿄 나리타",
                                "longitude": 140.39285,
                                "latitude": 35.771988,
                                "cityInEnglish": "Tokyo"
                            },
                            "departure": "2022-09-01T19:25:00",
                            "arrival": "2022-09-02T11:35:00",
                            "durationInMinutes": 970,
                            "timeDeltaInDays": 1,
                            "stopCount": 1,
                            "isSmallestStops": true,
                            "operations": [
                                {
                                    "id": "62f3bfeeceea8e6f043f6c4b",
                                    "name": "Korean Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                }
                            ],
                            "airportChangeIn": null,
                            "segments": [
                                {
                                    "order": 0,
                                    "origin": {
                                        "id": "62fceeaa6b3bd329c9f18bfe",
                                        "iata": "GMP",
                                        "name": "서울 김포국제공항",
                                        "longitude": 126.79447,
                                        "latitude": 37.558655,
                                        "cityInEnglish": "Seoul"
                                    },
                                    "destination": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "departure": "2022-09-01T19:25:00",
                                    "arrival": "2022-09-01T20:35:00",
                                    "durationInMinutes": 70,
                                    "flightNumber": "1125",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                },
                                {
                                    "order": 1,
                                    "origin": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "destination": {
                                        "id": "62f3b8879a24ae3eec64a551",
                                        "iata": "NRT",
                                        "name": "도쿄 나리타",
                                        "longitude": 140.39285,
                                        "latitude": 35.771988,
                                        "cityInEnglish": "Tokyo"
                                    },
                                    "departure": "2022-09-02T09:20:00",
                                    "arrival": "2022-09-02T11:35:00",
                                    "durationInMinutes": 135,
                                    "flightNumber": "715",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                }
                            ]
                        },
                        {
                            "origin": {
                                "id": "62f3b8879a24ae3eec64a551",
                                "iata": "NRT",
                                "name": "도쿄 나리타",
                                "longitude": 140.39285,
                                "latitude": 35.771988,
                                "cityInEnglish": "Tokyo"
                            },
                            "destination": {
                                "id": "62fceeaa6b3bd329c9f18bfe",
                                "iata": "GMP",
                                "name": "서울 김포국제공항",
                                "longitude": 126.79447,
                                "latitude": 37.558655,
                                "cityInEnglish": "Seoul"
                            },
                            "departure": "2022-09-04T12:45:00",
                            "arrival": "2022-09-04T18:45:00",
                            "durationInMinutes": 360,
                            "timeDeltaInDays": 0,
                            "stopCount": 1,
                            "isSmallestStops": true,
                            "operations": [
                                {
                                    "id": "62f3bfeeceea8e6f043f6c4b",
                                    "name": "Korean Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                }
                            ],
                            "airportChangeIn": null,
                            "segments": [
                                {
                                    "order": 0,
                                    "origin": {
                                        "id": "62f3b8879a24ae3eec64a551",
                                        "iata": "NRT",
                                        "name": "도쿄 나리타",
                                        "longitude": 140.39285,
                                        "latitude": 35.771988,
                                        "cityInEnglish": "Tokyo"
                                    },
                                    "destination": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "departure": "2022-09-04T12:45:00",
                                    "arrival": "2022-09-04T14:55:00",
                                    "durationInMinutes": 130,
                                    "flightNumber": "716",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                },
                                {
                                    "order": 1,
                                    "origin": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "destination": {
                                        "id": "62fceeaa6b3bd329c9f18bfe",
                                        "iata": "GMP",
                                        "name": "서울 김포국제공항",
                                        "longitude": 126.79447,
                                        "latitude": 37.558655,
                                        "cityInEnglish": "Seoul"
                                    },
                                    "departure": "2022-09-04T17:45:00",
                                    "arrival": "2022-09-04T18:45:00",
                                    "durationInMinutes": 60,
                                    "flightNumber": "1120",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                }
                            ]
                        }
                    ],
                    "score": 9.13534,
                    "type": "Best",
                    "totalStopCounts": 2,
                    "detailUrl": "https://www.skyscanner.net/transport/flights/gmp/nrt/220901/220904/config/11876-2209011925--32128-1-14788-2209021135|14788-2209041245--32128-1-11876-2209041845?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "62fe12696a7bd62cc712c71e",
                    "price": 1207411.0,
                    "legs": [
                        {
                            "origin": {
                                "id": "62fceeaa6b3bd329c9f18bfe",
                                "iata": "GMP",
                                "name": "서울 김포국제공항",
                                "longitude": 126.79447,
                                "latitude": 37.558655,
                                "cityInEnglish": "Seoul"
                            },
                            "destination": {
                                "id": "62f3b8879a24ae3eec64a551",
                                "iata": "NRT",
                                "name": "도쿄 나리타",
                                "longitude": 140.39285,
                                "latitude": 35.771988,
                                "cityInEnglish": "Tokyo"
                            },
                            "departure": "2022-09-01T19:45:00",
                            "arrival": "2022-09-02T11:35:00",
                            "durationInMinutes": 950,
                            "timeDeltaInDays": 1,
                            "stopCount": 1,
                            "isSmallestStops": true,
                            "operations": [
                                {
                                    "id": "62f3c36b2c4f526c6e910126",
                                    "name": "Jeju Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/78.png"
                                },
                                {
                                    "id": "62f3bfeeceea8e6f043f6c4b",
                                    "name": "Korean Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                }
                            ],
                            "airportChangeIn": null,
                            "segments": [
                                {
                                    "order": 0,
                                    "origin": {
                                        "id": "62fceeaa6b3bd329c9f18bfe",
                                        "iata": "GMP",
                                        "name": "서울 김포국제공항",
                                        "longitude": 126.79447,
                                        "latitude": 37.558655,
                                        "cityInEnglish": "Seoul"
                                    },
                                    "destination": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "departure": "2022-09-01T19:45:00",
                                    "arrival": "2022-09-01T20:45:00",
                                    "durationInMinutes": 60,
                                    "flightNumber": "208",
                                    "operation": {
                                        "id": "62f3c36b2c4f526c6e910126",
                                        "name": "Jeju Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/78.png"
                                    }
                                },
                                {
                                    "order": 1,
                                    "origin": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "destination": {
                                        "id": "62f3b8879a24ae3eec64a551",
                                        "iata": "NRT",
                                        "name": "도쿄 나리타",
                                        "longitude": 140.39285,
                                        "latitude": 35.771988,
                                        "cityInEnglish": "Tokyo"
                                    },
                                    "departure": "2022-09-02T09:20:00",
                                    "arrival": "2022-09-02T11:35:00",
                                    "durationInMinutes": 135,
                                    "flightNumber": "715",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                }
                            ]
                        },
                        {
                            "origin": {
                                "id": "62f3b8879a24ae3eec64a551",
                                "iata": "NRT",
                                "name": "도쿄 나리타",
                                "longitude": 140.39285,
                                "latitude": 35.771988,
                                "cityInEnglish": "Tokyo"
                            },
                            "destination": {
                                "id": "62fceeaa6b3bd329c9f18bfe",
                                "iata": "GMP",
                                "name": "서울 김포국제공항",
                                "longitude": 126.79447,
                                "latitude": 37.558655,
                                "cityInEnglish": "Seoul"
                            },
                            "departure": "2022-09-04T12:45:00",
                            "arrival": "2022-09-04T17:55:00",
                            "durationInMinutes": 310,
                            "timeDeltaInDays": 0,
                            "stopCount": 1,
                            "isSmallestStops": true,
                            "operations": [
                                {
                                    "id": "62f3bfeeceea8e6f043f6c4b",
                                    "name": "Korean Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                },
                                {
                                    "id": "62f3bfe5ceea8e6f043f6c39",
                                    "name": "T'way Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/9R.png"
                                }
                            ],
                            "airportChangeIn": null,
                            "segments": [
                                {
                                    "order": 0,
                                    "origin": {
                                        "id": "62f3b8879a24ae3eec64a551",
                                        "iata": "NRT",
                                        "name": "도쿄 나리타",
                                        "longitude": 140.39285,
                                        "latitude": 35.771988,
                                        "cityInEnglish": "Tokyo"
                                    },
                                    "destination": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "departure": "2022-09-04T12:45:00",
                                    "arrival": "2022-09-04T14:55:00",
                                    "durationInMinutes": 130,
                                    "flightNumber": "716",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                },
                                {
                                    "order": 1,
                                    "origin": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "destination": {
                                        "id": "62fceeaa6b3bd329c9f18bfe",
                                        "iata": "GMP",
                                        "name": "서울 김포국제공항",
                                        "longitude": 126.79447,
                                        "latitude": 37.558655,
                                        "cityInEnglish": "Seoul"
                                    },
                                    "departure": "2022-09-04T16:55:00",
                                    "arrival": "2022-09-04T17:55:00",
                                    "durationInMinutes": 60,
                                    "flightNumber": "9016",
                                    "operation": {
                                        "id": "62f3bfe5ceea8e6f043f6c39",
                                        "name": "T'way Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/9R.png"
                                    }
                                }
                            ]
                        }
                    ],
                    "score": 8.30026,
                    "type": "Best",
                    "totalStopCounts": 2,
                    "detailUrl": "https://www.skyscanner.net/transport/flights/gmp/nrt/220901/220904/config/11876-2209011945--32179,-32128-1-14788-2209021135|14788-2209041245--32128,-31731-1-11876-2209041755?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "62fe12696a7bd62cc712c721",
                    "price": 1155756.0,
                    "legs": [
                        {
                            "origin": {
                                "id": "62fceeaa6b3bd329c9f18bfe",
                                "iata": "GMP",
                                "name": "서울 김포국제공항",
                                "longitude": 126.79447,
                                "latitude": 37.558655,
                                "cityInEnglish": "Seoul"
                            },
                            "destination": {
                                "id": "62f3b8879a24ae3eec64a551",
                                "iata": "NRT",
                                "name": "도쿄 나리타",
                                "longitude": 140.39285,
                                "latitude": 35.771988,
                                "cityInEnglish": "Tokyo"
                            },
                            "departure": "2022-09-01T17:20:00",
                            "arrival": "2022-09-02T11:35:00",
                            "durationInMinutes": 1095,
                            "timeDeltaInDays": 1,
                            "stopCount": 1,
                            "isSmallestStops": true,
                            "operations": [
                                {
                                    "id": "62f3bfeeceea8e6f043f6c4b",
                                    "name": "Korean Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                }
                            ],
                            "airportChangeIn": null,
                            "segments": [
                                {
                                    "order": 0,
                                    "origin": {
                                        "id": "62fceeaa6b3bd329c9f18bfe",
                                        "iata": "GMP",
                                        "name": "서울 김포국제공항",
                                        "longitude": 126.79447,
                                        "latitude": 37.558655,
                                        "cityInEnglish": "Seoul"
                                    },
                                    "destination": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "departure": "2022-09-01T17:20:00",
                                    "arrival": "2022-09-01T18:25:00",
                                    "durationInMinutes": 65,
                                    "flightNumber": "1121",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                },
                                {
                                    "order": 1,
                                    "origin": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "destination": {
                                        "id": "62f3b8879a24ae3eec64a551",
                                        "iata": "NRT",
                                        "name": "도쿄 나리타",
                                        "longitude": 140.39285,
                                        "latitude": 35.771988,
                                        "cityInEnglish": "Tokyo"
                                    },
                                    "departure": "2022-09-02T09:20:00",
                                    "arrival": "2022-09-02T11:35:00",
                                    "durationInMinutes": 135,
                                    "flightNumber": "715",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                }
                            ]
                        },
                        {
                            "origin": {
                                "id": "62f3b8879a24ae3eec64a551",
                                "iata": "NRT",
                                "name": "도쿄 나리타",
                                "longitude": 140.39285,
                                "latitude": 35.771988,
                                "cityInEnglish": "Tokyo"
                            },
                            "destination": {
                                "id": "62fceeaa6b3bd329c9f18bfe",
                                "iata": "GMP",
                                "name": "서울 김포국제공항",
                                "longitude": 126.79447,
                                "latitude": 37.558655,
                                "cityInEnglish": "Seoul"
                            },
                            "departure": "2022-09-04T12:45:00",
                            "arrival": "2022-09-05T11:45:00",
                            "durationInMinutes": 1380,
                            "timeDeltaInDays": 1,
                            "stopCount": 1,
                            "isSmallestStops": true,
                            "operations": [
                                {
                                    "id": "62f3bfeeceea8e6f043f6c4b",
                                    "name": "Korean Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                }
                            ],
                            "airportChangeIn": null,
                            "segments": [
                                {
                                    "order": 0,
                                    "origin": {
                                        "id": "62f3b8879a24ae3eec64a551",
                                        "iata": "NRT",
                                        "name": "도쿄 나리타",
                                        "longitude": 140.39285,
                                        "latitude": 35.771988,
                                        "cityInEnglish": "Tokyo"
                                    },
                                    "destination": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "departure": "2022-09-04T12:45:00",
                                    "arrival": "2022-09-04T14:55:00",
                                    "durationInMinutes": 130,
                                    "flightNumber": "716",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                },
                                {
                                    "order": 1,
                                    "origin": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "destination": {
                                        "id": "62fceeaa6b3bd329c9f18bfe",
                                        "iata": "GMP",
                                        "name": "서울 김포국제공항",
                                        "longitude": 126.79447,
                                        "latitude": 37.558655,
                                        "cityInEnglish": "Seoul"
                                    },
                                    "departure": "2022-09-05T10:45:00",
                                    "arrival": "2022-09-05T11:45:00",
                                    "durationInMinutes": 60,
                                    "flightNumber": "1106",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                }
                            ]
                        }
                    ],
                    "score": 4.85589,
                    "type": "Cheapest",
                    "totalStopCounts": 2,
                    "detailUrl": "https://www.skyscanner.net/transport/flights/gmp/nrt/220901/220904/config/11876-2209011720--32128-1-14788-2209021135|14788-2209041245--32128-1-11876-2209051145?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "62fe126a6a7bd62cc712c722",
                    "price": 1155756.0,
                    "legs": [
                        {
                            "origin": {
                                "id": "62fceeaa6b3bd329c9f18bfe",
                                "iata": "GMP",
                                "name": "서울 김포국제공항",
                                "longitude": 126.79447,
                                "latitude": 37.558655,
                                "cityInEnglish": "Seoul"
                            },
                            "destination": {
                                "id": "62f3b8879a24ae3eec64a551",
                                "iata": "NRT",
                                "name": "도쿄 나리타",
                                "longitude": 140.39285,
                                "latitude": 35.771988,
                                "cityInEnglish": "Tokyo"
                            },
                            "departure": "2022-09-01T14:00:00",
                            "arrival": "2022-09-02T11:35:00",
                            "durationInMinutes": 1295,
                            "timeDeltaInDays": 1,
                            "stopCount": 1,
                            "isSmallestStops": true,
                            "operations": [
                                {
                                    "id": "62f3bfeeceea8e6f043f6c4b",
                                    "name": "Korean Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                }
                            ],
                            "airportChangeIn": null,
                            "segments": [
                                {
                                    "order": 0,
                                    "origin": {
                                        "id": "62fceeaa6b3bd329c9f18bfe",
                                        "iata": "GMP",
                                        "name": "서울 김포국제공항",
                                        "longitude": 126.79447,
                                        "latitude": 37.558655,
                                        "cityInEnglish": "Seoul"
                                    },
                                    "destination": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "departure": "2022-09-01T14:00:00",
                                    "arrival": "2022-09-01T15:05:00",
                                    "durationInMinutes": 65,
                                    "flightNumber": "1115",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                },
                                {
                                    "order": 1,
                                    "origin": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "destination": {
                                        "id": "62f3b8879a24ae3eec64a551",
                                        "iata": "NRT",
                                        "name": "도쿄 나리타",
                                        "longitude": 140.39285,
                                        "latitude": 35.771988,
                                        "cityInEnglish": "Tokyo"
                                    },
                                    "departure": "2022-09-02T09:20:00",
                                    "arrival": "2022-09-02T11:35:00",
                                    "durationInMinutes": 135,
                                    "flightNumber": "715",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                }
                            ]
                        },
                        {
                            "origin": {
                                "id": "62f3b8879a24ae3eec64a551",
                                "iata": "NRT",
                                "name": "도쿄 나리타",
                                "longitude": 140.39285,
                                "latitude": 35.771988,
                                "cityInEnglish": "Tokyo"
                            },
                            "destination": {
                                "id": "62fceeaa6b3bd329c9f18bfe",
                                "iata": "GMP",
                                "name": "서울 김포국제공항",
                                "longitude": 126.79447,
                                "latitude": 37.558655,
                                "cityInEnglish": "Seoul"
                            },
                            "departure": "2022-09-04T12:45:00",
                            "arrival": "2022-09-05T09:45:00",
                            "durationInMinutes": 1260,
                            "timeDeltaInDays": 1,
                            "stopCount": 1,
                            "isSmallestStops": true,
                            "operations": [
                                {
                                    "id": "62f3bfeeceea8e6f043f6c4b",
                                    "name": "Korean Air",
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                }
                            ],
                            "airportChangeIn": null,
                            "segments": [
                                {
                                    "order": 0,
                                    "origin": {
                                        "id": "62f3b8879a24ae3eec64a551",
                                        "iata": "NRT",
                                        "name": "도쿄 나리타",
                                        "longitude": 140.39285,
                                        "latitude": 35.771988,
                                        "cityInEnglish": "Tokyo"
                                    },
                                    "destination": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "departure": "2022-09-04T12:45:00",
                                    "arrival": "2022-09-04T14:55:00",
                                    "durationInMinutes": 130,
                                    "flightNumber": "716",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                },
                                {
                                    "order": 1,
                                    "origin": {
                                        "id": "62fe0e938a29f1fdeedc7c12",
                                        "iata": "PUS",
                                        "name": "부산 김해국제공항",
                                        "longitude": 128.9425,
                                        "latitude": 35.176666,
                                        "cityInEnglish": "Busan"
                                    },
                                    "destination": {
                                        "id": "62fceeaa6b3bd329c9f18bfe",
                                        "iata": "GMP",
                                        "name": "서울 김포국제공항",
                                        "longitude": 126.79447,
                                        "latitude": 37.558655,
                                        "cityInEnglish": "Seoul"
                                    },
                                    "departure": "2022-09-05T08:45:00",
                                    "arrival": "2022-09-05T09:45:00",
                                    "durationInMinutes": 60,
                                    "flightNumber": "1102",
                                    "operation": {
                                        "id": "62f3bfeeceea8e6f043f6c4b",
                                        "name": "Korean Air",
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KE.png"
                                    }
                                }
                            ]
                        }
                    ],
                    "score": 4.70385,
                    "type": "Cheapest",
                    "totalStopCounts": 2,
                    "detailUrl": "https://www.skyscanner.net/transport/flights/gmp/nrt/220901/220904/config/11876-2209011400--32128-1-14788-2209021135|14788-2209041245--32128-1-11876-2209050945?adults=2&adultsv2=2&cabinclass=economy&children=0&childrenv2=&destinationentityid=27542089&originentityid=27538638&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                }
            ],
            "last": true,
            "numberOfElements": 4,
            "empty": false
        },
        "accommodations": {
            "content": [
                {
                    "id": "62e79d2b0fa687e66ea5e722",
                    "name": "Mitsui Garden Hotel Toyosu BAYSIDE CROSS Tokyo",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/291267242.jpg?k=da3c09e2c38969702c3e8ea9839afd27436492f3beda43f50309773880209b81&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.7946,
                    "latitude": 35.654747,
                    "city": "Tokyo",
                    "state": "Koto Ward",
                    "country": null,
                    "address": "Koto-ku, Toyosu 2-2-1",
                    "price": 148580.0,
                    "currencyCode": "KRW",
                    "rating": 9.1,
                    "popularity": 1824,
                    "detailUrl": "https://www.booking.com/hotel/jp/mitsui-garden-toyosu-bayside-cross-tokyo.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e71b",
                    "name": "MIMARU TOKYO AKASAKA",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/224163660.jpg?k=c457f0792cc943800568c6fad88153b8dabed1d59fba4df139c75d3086a7acd5&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.73305,
                    "latitude": 35.669926,
                    "city": "Tokyo",
                    "state": "Minato",
                    "country": null,
                    "address": "Minato-ku Aakasaka 7-9-6",
                    "price": 167200.0,
                    "currencyCode": "KRW",
                    "rating": 9.0,
                    "popularity": 347,
                    "detailUrl": "https://www.booking.com/hotel/jp/mimaru-tokyo-akasaka.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active",
                        "cheap",
                        "local"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e727",
                    "name": "MIMARU TOKYO UENO NORTH",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/247501097.jpg?k=d2c03c92c3ab6e42e3876b2a6290fcddb7acd48983fca286f37912ba78e69a9a&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.78055,
                    "latitude": 35.716473,
                    "city": "Tokyo",
                    "state": "Taito",
                    "country": null,
                    "address": "Taito-ku Ueno 7-14-4",
                    "price": 146300.0,
                    "currencyCode": "KRW",
                    "rating": 9.0,
                    "popularity": 261,
                    "detailUrl": "https://www.booking.com/hotel/jp/mimaru-tokyo-ueno-north.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active",
                        "local"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e72b",
                    "name": "Park Hotel Tokyo",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/251024052.jpg?k=d3d2b7705d04e9d983bcbef326b547caae32afe004fb02dd9003b0b536f3e9f9&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.75961,
                    "latitude": 35.66336,
                    "city": "Tokyo",
                    "state": "Minato",
                    "country": null,
                    "address": "Minato-ku Higashi Shimbashi 1-7-1",
                    "price": 131765.0,
                    "currencyCode": "KRW",
                    "rating": 8.9,
                    "popularity": 1149,
                    "detailUrl": "https://www.booking.com/hotel/jp/park-tokyo.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "photo",
                        "cheap",
                        "relaxing",
                        "active",
                        "local"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e726",
                    "name": "The Gate Hotel Tokyo by Hulic",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/219186638.jpg?k=2345e338a266b160d19f5adda9137b1761aab25ef558b1d8184da836358cadc1&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.76143,
                    "latitude": 35.6728,
                    "city": "Tokyo",
                    "state": "Chiyoda",
                    "country": null,
                    "address": "Chiyoda-ku Yuraukucho 2-2-3",
                    "price": 208088.0,
                    "currencyCode": "KRW",
                    "rating": 8.9,
                    "popularity": 1046,
                    "detailUrl": "https://www.booking.com/hotel/jp/the-gate-tokyo-by-hulic-dong-jing.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active",
                        "cheap",
                        "local"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e71d",
                    "name": "MIMARU TOKYO UENO EAST",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/161428745.jpg?k=afb4b0fc9db2938b4639e4841776d1487d0d64f7d5b4b9c75f1bafcdb12a58ee&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.78012,
                    "latitude": 35.714638,
                    "city": "Tokyo",
                    "state": "Taito",
                    "country": null,
                    "address": "Taito-ku Higashiueno 4-26-3",
                    "price": 151525.0,
                    "currencyCode": "KRW",
                    "rating": 8.9,
                    "popularity": 339,
                    "detailUrl": "https://www.booking.com/hotel/jp/mimaru-tokyo-ueno-east.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active",
                        "local"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e728",
                    "name": "Mitsui Garden Hotel Jingugaien Tokyo Premier",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/228794078.jpg?k=2eb2246744bd4a20d2381bb3a6e67598117f6102cb13462854d8cd54a212d862&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.71596,
                    "latitude": 35.679977,
                    "city": "Tokyo",
                    "state": "Shinjuku Ward",
                    "country": null,
                    "address": "Shinjuku-ku Kasumigaoka-cho 11-3",
                    "price": 148667.4,
                    "currencyCode": "KRW",
                    "rating": 8.8,
                    "popularity": 3821,
                    "detailUrl": "https://www.booking.com/hotel/jp/mitsui-garden-jingugaien-tokyo-premier.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active",
                        "cheap",
                        "local"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e72c",
                    "name": "The Royal Park Hotel Iconic Tokyo Shiodome",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/30886701.jpg?k=cb9261a150de681eec474edc50dcac335d9b211b498b7fb4ec62883bf404a69b&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.76042,
                    "latitude": 35.663876,
                    "city": "Tokyo",
                    "state": "Minato",
                    "country": null,
                    "address": "Minato-ku, Higashishimbashi 1-6-3",
                    "price": 140989.5,
                    "currencyCode": "KRW",
                    "rating": 8.8,
                    "popularity": 3277,
                    "detailUrl": "https://www.booking.com/hotel/jp/royalpark-shiodometower.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active",
                        "cheap"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e72a",
                    "name": "PROSTYLE RYOKAN TOKYO ASAKUSA",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/233239656.jpg?k=0ca71b7994a3e71cccc01c99885089da94f2215034dd348092aae1d11b3bfd7a&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.80087,
                    "latitude": 35.714428,
                    "city": "Tokyo",
                    "state": "Taito",
                    "country": null,
                    "address": "Taito-ku Hanakawado 2-12-11",
                    "price": 139500.0,
                    "currencyCode": "KRW",
                    "rating": 8.8,
                    "popularity": 533,
                    "detailUrl": "https://www.booking.com/hotel/jp/prostyle-ryokan-tokyo-asakusa.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79d2b0fa687e66ea5e71c",
                    "name": "JR Kyushu Hotel Blossom Shinjuku",
                    "thumbnail": "https://cf.bstatic.com/xdata/images/hotel/1440x1440/291001561.jpg?k=b51aff7fd9622aeb5bc0847191b95410fe7ac273752f4760670710dcdbdc7ca5&o=",
                    "subcategory": "Hotel",
                    "longitude": 139.6984,
                    "latitude": 35.687786,
                    "city": "Tokyo",
                    "state": "Shibuya Ward",
                    "country": null,
                    "address": "Shibuya-ku Yoyogi 2-6-2",
                    "price": 154755.0,
                    "currencyCode": "KRW",
                    "rating": 8.7,
                    "popularity": 1417,
                    "detailUrl": "https://www.booking.com/hotel/jp/jr-kyushu-blossom-shinjuku.html",
                    "productWebsite": null,
                    "weekdayHours": null,
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active",
                        "cheap",
                        "local"
                    ]
                }
            ],
            "last": false,
            "numberOfElements": 10,
            "empty": false
        },
        "restaurants": {
            "content": [
                {
                    "id": "62e79ccf0fa687e66ea5e6d9",
                    "name": "Coffee Wrights Kuramae",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/12/c3/89/1b/photo2jpg.jpg",
                    "subcategory": "['cafe']",
                    "longitude": 139.78981,
                    "latitude": 35.704063,
                    "city": "Tokyo",
                    "state": "Taito",
                    "country": "Asia/Tokyo",
                    "address": "4-20-2 Kuramae 1f, Taito 111-0051 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": "KRW",
                    "rating": 5.0,
                    "popularity": 7,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066461-d14015325-Reviews-Coffee_Wrights_Kuramae-Taito_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://wat-inc.jp/shop/coffee-wrights%E3%80%80%E8%94%B5%E5%89%8D/",
                    "weekdayHours": "",
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e6fe",
                    "name": "Kagurazaka Kurosu",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/0e/e9/48/c7/caption.jpg",
                    "subcategory": "['japanese']",
                    "longitude": 139.74017,
                    "latitude": 35.702908,
                    "city": "Tokyo",
                    "state": "Shinjuku",
                    "country": "Asia/Tokyo",
                    "address": "4-11 Tsukudocho, Shinjuku 62-0821 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": "KRW",
                    "rating": 5.0,
                    "popularity": 4,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066457-d3237695-Reviews-Kagurazaka_Kurosu-Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://kagurazaka-x.com/index.html",
                    "weekdayHours": "",
                    "neighbors": null,
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e6b2",
                    "name": "Tachiaigawa Yoshidaya",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/0a/ab/fd/40/caption.jpg",
                    "subcategory": "[]",
                    "longitude": 139.74088,
                    "latitude": 35.60001,
                    "city": "Tokyo",
                    "state": "Shinagawa",
                    "country": "Asia/Tokyo",
                    "address": "2-15-13 Higashioi, Shinagawa 140-0011 Tokyo Prefecture",
                    "price": 2.0,
                    "currencyCode": "KRW",
                    "rating": 4.5,
                    "popularity": 34,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066854-d1678464-Reviews-Tachiaigawa_Yoshidaya-Shinagawa_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://www.soba-yoshidaya.com/",
                    "weekdayHours": "['Monday: 11:00 - 14:30,  17:00 - 21:00', 'Tuesday: Closed', 'Wednesday: 11:00 - 14:30,  17:00 - 21:00', 'Thursday: 11:00 - 14:30,  17:00 - 21:00', 'Friday: 11:00 - 14:30,  17:00 - 21:00', 'Saturday: 11:00 - 21:00', 'Sunday: 11:00 - 20:30']",
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e6d1",
                    "name": "Hyakumison Kosen",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/0f/6d/2a/cf/photo6jpg.jpg",
                    "subcategory": "['japanese']",
                    "longitude": 139.7369,
                    "latitude": 35.651974,
                    "city": "Tokyo",
                    "state": "Minato",
                    "country": "Asia/Tokyo",
                    "address": "Minamiazabu, Minato 106-0047 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": "KRW",
                    "rating": 4.5,
                    "popularity": 6,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066451-d1676958-Reviews-Hyakumison_Kosen-Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "",
                    "weekdayHours": "",
                    "neighbors": null,
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e70b",
                    "name": "Chimman Saro",
                    "thumbnail": "",
                    "subcategory": "['chinese']",
                    "longitude": 139.78922,
                    "latitude": 35.70209,
                    "city": "Tokyo",
                    "state": "Taito",
                    "country": "Asia/Tokyo",
                    "address": "4-5-10 Kuramae, Taito 111-0051 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": "KRW",
                    "rating": 4.5,
                    "popularity": 2,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066461-d9970528-Reviews-Chimman_Saro-Taito_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "",
                    "weekdayHours": "",
                    "neighbors": null,
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e6f1",
                    "name": "Dandelion Chocolate, Factory & Cafe Kuramae",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/13/a6/94/47/caption.jpg",
                    "subcategory": "['cafe']",
                    "longitude": 139.78963,
                    "latitude": 35.703648,
                    "city": "Tokyo",
                    "state": "Taito",
                    "country": "Asia/Tokyo",
                    "address": "4-14-6 Kuramae, Taito 111-0051 Tokyo Prefecture",
                    "price": 2.0,
                    "currencyCode": "KRW",
                    "rating": 4.0,
                    "popularity": 64,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066461-d10001221-Reviews-Dandelion_Chocolate_Factory_Cafe_Kuramae-Taito_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://dandelionchocolate.jp/",
                    "weekdayHours": "['Monday: 10:00 - 20:00', 'Tuesday: 10:00 - 20:00', 'Wednesday: 10:00 - 20:00', 'Thursday: 10:00 - 20:00', 'Friday: 10:00 - 20:00', 'Saturday: 10:00 - 20:00', 'Sunday: 10:00 - 20:00']",
                    "neighbors": null,
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e6fd",
                    "name": "Amici Del Te",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/0f/db/a7/a9/caption.jpg",
                    "subcategory": "['cafe']",
                    "longitude": 139.78871,
                    "latitude": 35.55111,
                    "city": "Tokyo",
                    "state": "Ota",
                    "country": "Asia/Tokyo",
                    "address": "3-3-2 Hanedakuko, Ota 144-0041 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": "KRW",
                    "rating": 4.0,
                    "popularity": 50,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066454-d7161776-Reviews-Amici_Del_Te-Ota_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://amicidelte.com",
                    "weekdayHours": "['Monday: 08:00 - 21:00', 'Tuesday: 08:00 - 21:00', 'Wednesday: 08:00 - 21:00', 'Thursday: 08:00 - 21:00', 'Friday: 08:00 - 21:00', 'Saturday: 08:00 - 21:00', 'Sunday: 08:00 - 21:00']",
                    "neighbors": null,
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e6ec",
                    "name": "Casa Vinitalia",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/0f/5b/e4/f8/caption.jpg",
                    "subcategory": "['italian']",
                    "longitude": 139.73715,
                    "latitude": 35.651203,
                    "city": "Tokyo",
                    "state": "Minato",
                    "country": "Asia/Tokyo",
                    "address": "1-7-31 Minamiazabu M Tower 1, 2F, Minato 106-0047 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": "KRW",
                    "rating": 4.0,
                    "popularity": 24,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066451-d4671363-Reviews-Casa_Vinitalia-Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "",
                    "weekdayHours": "",
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e6c7",
                    "name": "Shiretoko",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/07/c1/e3/ff/caption.jpg",
                    "subcategory": "['japanese', 'international']",
                    "longitude": 139.88562,
                    "latitude": 35.703045,
                    "city": "Tokyo",
                    "state": "Edogawa",
                    "country": "Asia/Tokyo",
                    "address": "1-2-1 Niihori, Edogawa 132-0001 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": "KRW",
                    "rating": 4.0,
                    "popularity": 11,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066445-d7489854-Reviews-Shiretoko-Edogawa_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://shiretoko.tokyo/about-resutran/",
                    "weekdayHours": "['Monday: 11:00 - 14:00,  17:00 - 22:30', 'Tuesday: 11:00 - 14:00,  17:00 - 22:30', 'Wednesday: Closed', 'Thursday: 11:00 - 14:00,  17:00 - 22:30', 'Friday: 11:00 - 14:00,  17:00 - 22:30', 'Saturday: 11:00 - 14:00,  17:00 - 22:30', 'Sunday: 11:00 - 14:00,  17:00 - 22:30']",
                    "neighbors": null,
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79ccf0fa687e66ea5e703",
                    "name": "Numero Cinq",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/09/a1/c3/39/photo8jpg.jpg",
                    "subcategory": "[]",
                    "longitude": 139.73999,
                    "latitude": 35.70287,
                    "city": "Tokyo",
                    "state": "Shinjuku",
                    "country": "Asia/Tokyo",
                    "address": "4-1 Tsukudocho, Shinjuku Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": "KRW",
                    "rating": 4.0,
                    "popularity": 8,
                    "detailUrl": "https://www.tripadvisor.com/Restaurant_Review-g1066457-d7493233-Reviews-Numero_Cinq-Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "",
                    "weekdayHours": "['Monday: 16:00 - 00:00', 'Tuesday: 16:00 - 00:00', 'Wednesday: 16:00 - 00:00', 'Thursday: 16:00 - 00:00', 'Friday: 16:00 - 00:00', 'Saturday: 16:00 - 00:00', 'Sunday: 16:00 - 00:00']",
                    "neighbors": null,
                    "keywords": [
                        "relaxing",
                        "active",
                        "cheap"
                    ]
                }
            ],
            "last": false,
            "numberOfElements": 10,
            "empty": false
        },
        "attractions": {
            "content": [
                {
                    "id": "62e79d5f0fa687e66ea5e7f2",
                    "name": "Arigato Japan Food Tours",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/0a/6b/b2/e5/this-was-my-class.jpg",
                    "subcategory": "[{'name': 'food_drink', 'localized_name': 'Food & Drink'}, {'name': 'sightseeing_tours', 'localized_name': 'Tours'}, {'name': 'activities', 'localized_name': 'Activities'}]",
                    "longitude": 139.7365,
                    "latitude": 35.6532,
                    "city": "Tokyo",
                    "state": "Minato",
                    "country": "Asia/Tokyo",
                    "address": "Minato 106-0045 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 5.0,
                    "popularity": 1461,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g1066451-d9974956-Reviews-Arigato_Japan_Food_Tours-Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://arigatojapan.co.jp/",
                    "weekdayHours": "['Monday: 09:00 - 21:00', 'Tuesday: 09:00 - 21:00', 'Wednesday: 09:00 - 21:00', 'Thursday: 09:00 - 21:00', 'Friday: 09:00 - 21:00', 'Saturday: 09:00 - 21:00', 'Sunday: 09:00 - 21:00']",
                    "neighbors": "['7278770']",
                    "keywords": [
                        "learn",
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e78a",
                    "name": "Loople",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/0e/e4/a9/ad/caption.jpg",
                    "subcategory": "[{'name': 'wellness_spas', 'localized_name': 'Spas & Wellness'}, {'name': 'activities', 'localized_name': 'Activities'}]",
                    "longitude": 139.73695,
                    "latitude": 35.65313,
                    "city": "Tokyo",
                    "state": "Azabujuban",
                    "country": "Asia/Tokyo",
                    "address": "4-6-8 Nissin Bldg 5F, Azabujuban, Minato 106-0045 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 5.0,
                    "popularity": 20,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g14129734-d12279830-Reviews-Loople-Azabujuban_Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://www.loople.jp/",
                    "weekdayHours": "['Monday: 10:00 - 19:00', 'Tuesday: 10:00 - 19:00', 'Wednesday: 10:00 - 19:00', 'Thursday: 10:00 - 19:00', 'Friday: 10:00 - 19:00', 'Saturday: 10:00 - 19:00', 'Sunday: 10:00 - 19:00']",
                    "neighbors": "['7278767']",
                    "keywords": [
                        "relaxing",
                        "cheap"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e7c2",
                    "name": "Iwata",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/12/d9/60/3d/photo4jpg.jpg",
                    "subcategory": "[{'name': 'boat_tours_water_sports', 'localized_name': 'Boat Tours & Water Sports'}, {'name': 'outdoor_activities', 'localized_name': 'Outdoor Activities'}, {'name': 'sightseeing_tours', 'localized_name': 'Tours'}, {'name': 'activities', 'localized_name': 'Activities'}]",
                    "longitude": 139.74268,
                    "latitude": 35.602882,
                    "city": "Tokyo",
                    "state": "Shinagawa",
                    "country": "Asia/Tokyo",
                    "address": "1-25-3 Higashioi, Shinagawa 140-0011 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 5.0,
                    "popularity": 1,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g1066854-d14003829-Reviews-Iwata-Shinagawa_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://www.iwatamaru.com/",
                    "weekdayHours": "",
                    "neighbors": "['7278774']",
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e7d6",
                    "name": "Toyomi Suisan Futo",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/09/e7/5e/2d/caption.jpg",
                    "subcategory": "[{'name': 'landmarks', 'localized_name': 'Sights & Landmarks'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
                    "longitude": 139.76875,
                    "latitude": 35.65361,
                    "city": "Tokyo",
                    "state": "Chuo",
                    "country": "Asia/Tokyo",
                    "address": "Toyomicho, Chuo 104-0055 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 4.5,
                    "popularity": 11,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g1066444-d8674359-Reviews-Toyomi_Suisan_Futo-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "",
                    "weekdayHours": "",
                    "neighbors": "['7278765']",
                    "keywords": [
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e7b1",
                    "name": "Takeshiba Wharf Park",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/09/0a/2a/b1/caption.jpg",
                    "subcategory": "[{'name': 'landmarks', 'localized_name': 'Sights & Landmarks'}, {'name': 'nature_parks', 'localized_name': 'Nature & Parks'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
                    "longitude": 139.76326,
                    "latitude": 35.654408,
                    "city": "Tokyo",
                    "state": "Minato",
                    "country": "Asia/Tokyo",
                    "address": "1 Kaigan, Minato 105-0022 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 4.0,
                    "popularity": 45,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g1066451-d8658835-Reviews-Takeshiba_Wharf_Park-Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://www.kouwan.metro.tokyo.lg.jp/kanko/port/takeshiba/",
                    "weekdayHours": "",
                    "neighbors": "['7278767']",
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e7f3",
                    "name": "Tokyo Port Wildbird Park",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/11/29/1e/a6/photo0jpg.jpg",
                    "subcategory": "[{'name': 'nature_parks', 'localized_name': 'Nature & Parks'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
                    "longitude": 139.76022,
                    "latitude": 35.583946,
                    "city": "Tokyo",
                    "state": "Ota",
                    "country": "Asia/Tokyo",
                    "address": "3-1 Tokai, Ota 143-0001 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 4.0,
                    "popularity": 42,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g1066454-d3782407-Reviews-Tokyo_Port_Wildbird_Park-Ota_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://www.wildbirdpark.jp/",
                    "weekdayHours": "",
                    "neighbors": "['7278774']",
                    "keywords": [
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e7c1",
                    "name": "Mihama Park",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/14/10/a6/50/caption.jpg",
                    "subcategory": "[{'name': 'nature_parks', 'localized_name': 'Nature & Parks'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
                    "longitude": 139.9166,
                    "latitude": 35.655075,
                    "city": "Tokyo",
                    "state": "Urayasu",
                    "country": "Asia/Tokyo",
                    "address": "5-14 Mihama, Urayasu 279-0011 Chiba Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 4.0,
                    "popularity": 10,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g298162-d12200373-Reviews-Mihama_Park-Urayasu_Chiba_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://www.city.urayasu.lg.jp/shisetsu/kouen/1005642.html",
                    "weekdayHours": "",
                    "neighbors": "[]",
                    "keywords": [
                        "learn",
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e7aa",
                    "name": "Nipponichi Haneda Airport Terminal 2",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/17/0f/8c/5b/2.jpg",
                    "subcategory": "[{'name': 'shopping', 'localized_name': 'Shopping'}]",
                    "longitude": 139.78737,
                    "latitude": 35.5522,
                    "city": "Tokyo",
                    "state": "Ota",
                    "country": "Asia/Tokyo",
                    "address": "3-4-2 Hanedakuko Tokyo Monorail Haneda Airport 2nd Building Station B1F, Ota 144-0041 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 4.0,
                    "popularity": 7,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g1066454-d14042344-Reviews-Nipponichi_Haneda_Airport_Terminal_2-Ota_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://www.nakagawa-masashichi.jp/shop/default.aspx",
                    "weekdayHours": "",
                    "neighbors": "['7278774']",
                    "keywords": [
                        "relaxing"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e7a9",
                    "name": "Toyosu Park",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/09/72/43/cb/caption.jpg",
                    "subcategory": "[{'name': 'nature_parks', 'localized_name': 'Nature & Parks'}, {'name': 'attractions', 'localized_name': 'Attractions'}]",
                    "longitude": 139.79308,
                    "latitude": 35.653053,
                    "city": "Tokyo",
                    "state": "Toyosu",
                    "country": "Asia/Tokyo",
                    "address": "2-1, Toyosu, Koto 135-0061 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 3.5,
                    "popularity": 60,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g14134359-d1997879-Reviews-Toyosu_Park-Toyosu_Koto_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "http://www.tokyo-park.net/1310801006.html",
                    "weekdayHours": "",
                    "neighbors": "[]",
                    "keywords": [
                        "relaxing",
                        "active"
                    ]
                },
                {
                    "id": "62e79d5f0fa687e66ea5e7a5",
                    "name": "Haginaka Park",
                    "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-o/16/87/c7/9d/caption.jpg",
                    "subcategory": "[{'name': 'fun_games', 'localized_name': 'Fun & Games'}, {'name': 'nature_parks', 'localized_name': 'Nature & Parks'}, {'name': 'attractions', 'localized_name': 'Attractions'}, {'name': 'activities', 'localized_name': 'Activities'}]",
                    "longitude": 139.73636,
                    "latitude": 35.55004,
                    "city": "Tokyo",
                    "state": "Ota",
                    "country": "Asia/Tokyo",
                    "address": "3-26-46 Haginaka, Ota 144-0047 Tokyo Prefecture",
                    "price": 0.0,
                    "currencyCode": null,
                    "rating": 3.5,
                    "popularity": 28,
                    "detailUrl": "https://www.tripadvisor.com/Attraction_Review-g1066454-d10223640-Reviews-Haginaka_Park-Ota_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
                    "productWebsite": "",
                    "weekdayHours": "",
                    "neighbors": "['7278774']",
                    "keywords": [
                        "relaxing",
                        "local"
                    ]
                }
            ],
            "last": false,
            "numberOfElements": 10,
            "empty": false
        }
    }
    );
    }, 500);
  });

  const travelDatas = await testPromise;

  return travelDatas;
}

export default fetchTravelSpec;
