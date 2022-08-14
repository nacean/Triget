async function fetchTravelPlanList() {
  const testPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          travelTime: "12:30",
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
          transitMode: "도보",
          durationTime: 30,
        },
        {
          travelTime: "12:30",
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
          transitMode: "도보",
          durationTime: 30,
        },
        {
          travelTime: "12:30",
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
          transitMode: "도보",
          durationTime: 30,
        },
        {
          travelTime: "12:30",
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
      ]);
    }, 500);
  });

  const travelList = await testPromise;

  return travelList;
}

export default fetchTravelPlanList;
