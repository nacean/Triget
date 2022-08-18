async function fetchTravelPlanList() {
  const testPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: "62e79d5f0fa687e66ea5e78a",
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
          price: 0.0,
          currencyCode: null,
          rating: 5.0,
          popularity: 20,
          detailUrl:
            "https://www.tripadvisor.com/Attraction_Review-g14129734-d12279830-Reviews-Loople-Azabujuban_Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
          productWebsite: "http://www.loople.jp/",
          weekdayHours:
            "['Monday: 10:00 - 19:00', 'Tuesday: 10:00 - 19:00', 'Wednesday: 10:00 - 19:00', 'Thursday: 10:00 - 19:00', 'Friday: 10:00 - 19:00', 'Saturday: 10:00 - 19:00', 'Sunday: 10:00 - 19:00']",
          neighbors: "['7278767']",
          keywords: ["relaxing", "cheap"],
        },
        {
          transitMode: "도보",
          durationTime: 30,
        },
        {
          id: "62e79ccf0fa687e66ea5e6d9",
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
          price: 0.0,
          currencyCode: "JPY",
          rating: 5.0,
          popularity: 7,
          detailUrl:
            "https://www.tripadvisor.com/Restaurant_Review-g1066461-d14015325-Reviews-Coffee_Wrights_Kuramae-Taito_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
          productWebsite:
            "http://wat-inc.jp/shop/coffee-wrights%E3%80%80%E8%94%B5%E5%89%8D/",
          weekdayHours: "",
          neighbors: null,
          keywords: ["relaxing", "active"],
        },
        {
          transitMode: "도보",
          durationTime: 30,
        },
        {
          id: "62e79d5f0fa687e66ea5e7f2",
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
          price: 0.0,
          currencyCode: null,
          rating: 5.0,
          popularity: 1461,
          detailUrl:
            "https://www.tripadvisor.com/Attraction_Review-g1066451-d9974956-Reviews-Arigato_Japan_Food_Tours-Minato_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
          productWebsite: "http://arigatojapan.co.jp/",
          weekdayHours:
            "['Monday: 09:00 - 21:00', 'Tuesday: 09:00 - 21:00', 'Wednesday: 09:00 - 21:00', 'Thursday: 09:00 - 21:00', 'Friday: 09:00 - 21:00', 'Saturday: 09:00 - 21:00', 'Sunday: 09:00 - 21:00']",
          neighbors: "['7278770']",
          keywords: ["learn", "relaxing"],
        },
        {
          transitMode: "도보",
          durationTime: 30,
        },
        {
          id: "62e79ccf0fa687e66ea5e6fe",
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
          price: 0.0,
          currencyCode: "JPY",
          rating: 5.0,
          popularity: 4,
          detailUrl:
            "https://www.tripadvisor.com/Restaurant_Review-g1066457-d3237695-Reviews-Kagurazaka_Kurosu-Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
          productWebsite: "http://kagurazaka-x.com/index.html",
          weekdayHours: "",
          neighbors: null,
          keywords: ["relaxing"],
        },
        {
          transitMode: "도보",
          durationTime: 30,
        },

        {
          id: "62e79d2b0fa687e66ea5e722",
          name: "Mitsui Garden Hotel Toyosu BAYSIDE CROSS Tokyo",
          thumbnail:
            "https://cf.bstatic.com/xdata/images/hotel/1440x1440/291267242.jpg?k=da3c09e2c38969702c3e8ea9839afd27436492f3beda43f50309773880209b81&o=",
          subcategory: "Hotel",
          longitude: 139.7946,
          latitude: 35.654747,
          city: "Tokyo",
          state: "Koto Ward",
          country: null,
          address: "Koto-ku, Toyosu 2-2-1",
          price: 14858.0,
          currencyCode: "JPY",
          rating: 9.1,
          popularity: 1824,
          detailUrl:
            "https://www.booking.com/hotel/jp/mitsui-garden-toyosu-bayside-cross-tokyo.html",
          productWebsite: null,
          weekdayHours: null,
          neighbors: null,
          keywords: ["relaxing", "active"],
        },
      ]);
    }, 500);
  });

  const travelList = await testPromise;

  return travelList;
}

export default fetchTravelPlanList;
