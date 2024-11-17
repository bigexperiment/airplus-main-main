import React from 'react';
import { Calendar, Compass, Mountain, Star, Home, Plane } from 'lucide-react';

const EverestHighPassesTrek = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/everest-high-passes.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Everest High Passes Trek</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="22 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="5,545 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Strenuous" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Plane className="w-6 h-6" />} title="Transport" value="Fly in/Fly out" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Everest High Passes Trek, also known as the Three High Passes Trek, is a challenging and exhilarating adventure that takes you through some of the most stunning and remote landscapes in the Everest region. This trek crosses three high mountain passes: Renjo La, Cho La, and Kongma La, each offering breathtaking panoramic views of the Himalayas.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You'll traverse rugged terrain, cross glacial moraines, and trek through traditional Sherpa villages, immersing yourself in the rich culture and hospitality of the region. Along the way, you'll visit iconic sites like Everest Base Camp and Gokyo Lakes, experiencing the serenity of turquoise glacial lakes and the majesty of towering peaks.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The trek demands physical fitness, proper acclimatization, and a spirit of adventure, rewarding you with an unforgettable journey through one of the world's most spectacular mountain landscapes.
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
  { day: 5, title: "Namche Bazaar to Tengboche", description: "Trek to Tengboche (3,740 m)." },
  { day: 6, title: "Tengboche to Dingboche", description: "Trek to Dingboche (4,440 m)." },
  { day: 7, title: "Acclimatization Day in Dingboche", description: "Rest and explore Dingboche." },
  { day: 8, title: "Dingboche to Lobuche", description: "Trek to Lobuche (4,930 m)." },
  { day: 9, title: "Dingboche to Chhukung", description: "Trek to Chhukung (4,730 m)." },
  { day: 10, title: "Chhukung to Lobuche via Kongma La Pass", description: "Cross Kongma La Pass (4,910 m) and trek to Lobuche (4,930 m)." },
  { day: 11, title: "Lobuche to Gorak Shep and Everest Base Camp", description: "Reach Gorak Shep (5,170 m) and visit Everest Base Camp (5,364 m)." },
  { day: 12, title: "Gorak Shep to Kala Patthar and Zhongla", description: "Climb Kala Patthar (5,545 m) and descend to Zhongla (4,830 m)." },
  { day: 13, title: "Zhongla to Thangnak via Cho La Pass", description: "Cross Cho La Pass (5,365 m) to Thangnak (4,950 m)." },
  { day: 14, title: "Thangnak to Gokyo", description: "Trek to Gokyo (4,950 m)." },
  { day: 15, title: "Hike to Gokyo Ri", description: "Hike to Gokyo Ri (5,357 m) for stunning views." },
  { day: 16, title: "Gokyo to Lungden via Renjo Pass", description: "Cross Renjo Pass (5,360 m) and trek to Lungden (4,380 m)." },
  { day: 17, title: "Lungden to Thame", description: "Trek to Thame (3,800 m)." },
  { day: 18, title: "Thame to Namche", description: "Trek back to Namche Bazaar (3,440 m)." },
  { day: 19, title: "Namche to Lukla", description: "Return to Lukla (2,840 m)." },
  { day: 20, title: "Fly to Kathmandu", description: "Fly from Lukla to Kathmandu." },
  { day: 21, title: "Buffer Day in Kathmandu", description: "Explore Kathmandu or relax." },
  { day: 22, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default EverestHighPassesTrek;
