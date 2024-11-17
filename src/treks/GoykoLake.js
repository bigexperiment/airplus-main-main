import React from 'react';
import { Calendar, Compass, Mountain, Star, Home, Plane } from 'lucide-react';

const GokyoLakeTrek = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/gokyo-lake.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Gokyo Lake Trek</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="14 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="5,357 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Moderate-Strenuous" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Plane className="w-6 h-6" />} title="Transport" value="Fly in/Fly out" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Gokyo Lake Trek in the Nepalese Himalayas is considered a moderate to challenging trek, a bit more demanding compared to other popular treks. It's a favorite among trekkers, offering a journey of peace and tranquility with stunning views of the highest freshwater lake system in the world.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The trek takes you to a chain of six turquoise, glacial-fed lakes in the Everest region, with breathtaking scenery and fewer crowds compared to the Everest Base Camp trek. The lodges on the trek are some of the best in Nepal, with comfortable accommodations and delicious food at affordable prices.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The trek offers a unique experience, with the opportunity to see four 8000m+ peaks, including Mount Everest, from the summit of Gokyo Ri. Overall, the Gokyo Lake Trek is a wonderful alternative to escape the crowds and experience the beauty of the Himalayas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <div className="space-y-4">
              {itinerary.map((day, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    Day {day.day < 10 ? `0${day.day}` : day.day}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{day.title}</h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
    <div className="text-indigo-500 mr-3">{icon}</div>
    <div>
      <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
      <p className="text-lg font-bold">{value}</p>
    </div>
  </div>
);

const itinerary = [
  { day: 1, title: "Arrival in Kathmandu", description: "Meet our representatives and trip briefing." },
  { day: 2, title: "Fly to Lukla and Trek to Phakding", description: "Fly to Lukla (2,840 m) and trek to Phakding (2,620 m)." },
  { day: 3, title: "Phakding to Namche Bazaar", description: "Trek to Namche Bazaar (3,440 m)." },
  { day: 4, title: "Acclimatization Day in Namche Bazaar", description: "Explore Namche Bazaar and acclimatize." },
  { day: 5, title: "Namche to Phortse Thenga", description: "Trek to Phortse Thenga (3,680 m)." },
  { day: 6, title: "Phortse Thenga to Machhermo", description: "Trek to Machhermo (4,470 m)." },
  { day: 7, title: "Machhermo to Gokyo", description: "Trek to Gokyo (4,790 m)." },
  { day: 8, title: "Explore Gokyo Ri and Gokyo Lake", description: "Hike to Gokyo Ri (5,357 m) and explore the Gokyo Lakes." },
  { day: 9, title: "Gokyo to Dole", description: "Trek back to Dole (4,200 m)." },
  { day: 10, title: "Dole to Namche Bazaar", description: "Trek to Namche Bazaar (3,440 m)." },
  { day: 11, title: "Namche Bazaar to Lukla", description: "Return to Lukla (2,840 m)." },
  { day: 12, title: "Fly to Kathmandu", description: "Fly from Lukla to Kathmandu." },
  { day: 13, title: "Free Day in Kathmandu", description: "Explore Kathmandu or relax." },
  { day: 14, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default GokyoLakeTrek;
