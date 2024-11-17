import React from 'react';
import { Calendar, Clock, Mountain, Compass, Home, Plane, Star } from 'lucide-react';

const EverestBaseCamp = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Everest Base Camp Trekking
          </h1>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="15 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="5,545 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Strenuous" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Plane className="w-6 h-6" />} title="Transport" value="Fly in/Fly out" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Embark on the Everest Base Camp trek, a journey through the heart of the Himalayas that
              offers breathtaking scenery and an unparalleled adventure. This trek takes you through
              diverse landscapes, from lush forests to rocky terrains, with panoramic views of towering
              peaks and pristine valleys.
            </p>
            <div className="my-6">
              <img
                src="/trekPhotos/everest1.jpg"
                alt="Everest Landscape 1"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Along the way, experience the rich culture of the Sherpa community, staying in traditional
              tea houses and interacting with the locals who embody the spirit of these high mountains.
              The trek challenges you physically and mentally, as you navigate high altitudes and rugged
              trails, but rewards you with a profound sense of accomplishment and awe.
            </p>
            <div className="my-6">
              <img
                src="/trekPhotos/everest2.jpg"
                alt="Everest Landscape 2"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Each day brings new vistas and experiences, culminating in the awe-inspiring sight of
              Everest itself. This trek is not just a journey to a destination, but a journey of personal
              growth and discovery, offering a unique blend of natural beauty, cultural richness, and
              adventure.
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
            <div className="my-6">
              <img
                src="/trekPhotos/everest3.jpg"
                alt="Everest Landscape 3"
                className="w-full rounded-lg shadow-md"
              />
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
  { day: 5, title: "Namche Bazaar to Tengboche", description: "Trek to Tengboche (3,740 m)." },
  { day: 6, title: "Tengboche to Dingboche", description: "Trek to Dingboche (4,440 m)." },
  { day: 7, title: "Acclimatization Day in Dingboche", description: "Rest and explore Dingboche." },
  { day: 8, title: "Dingboche to Lobuche", description: "Trek to Lobuche (4,930 m)." },
  { day: 9, title: "Lobuche to Gorak Shep and Everest Base Camp", description: "Reach Gorak Shep (5,170 m) and visit Everest Base Camp (5,364 m)." },
  { day: 10, title: "Gorak Shep to Kala Patthar and to Pheriche", description: "Climb Kala Patthar (5,545 m) and descend to Pheriche (4,243 m)." },
  { day: 11, title: "Pheriche to Namche Bazaar", description: "Trek back to Namche Bazaar (3,440 m)." },
  { day: 12, title: "Namche Bazaar to Lukla", description: "Return to Lukla (2,840 m)." },
  { day: 13, title: "Fly to Kathmandu", description: "Fly from Lukla to Kathmandu." },
  { day: 14, title: "Free Day in Kathmandu", description: "Explore Kathmandu or relax." },
  { day: 15, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default EverestBaseCamp;
