import React from 'react';
import { Calendar, Compass, Mountain, Star, Home, Plane } from 'lucide-react';

const UpperMustangTrek = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/upper-mustang.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Upper Mustang Trek</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="17 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="4,010 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Moderate" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Plane className="w-6 h-6" />} title="Transport" value="Flight & Private Vehicle" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Upper Mustang Trek offers a unique journey into the once-forbidden kingdom of Mustang, located in the rain shadow of the Dhaulagiri and Annapurna ranges. This trek provides an opportunity to explore the rich Tibetan-influenced culture, ancient monasteries, and the walled city of Lo Manthang.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The arid landscapes, colorful rock formations, and traditional villages make this trek a distinctive experience. The highest point of the trek is the Nyi La Pass at 4,010 meters, offering panoramic views of the surrounding peaks. The Upper Mustang region was restricted to foreigners until 1992, preserving its unique culture and traditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <div className="space-y-4">
              {itinerary.map((day, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    Day {day.day}
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
  { day: 2, title: "Drive to Pokhara", description: "Drive from Kathmandu to Pokhara (800m/2,625ft)." },
  { day: 3, title: "Fly to Jomsom and Trek to Kagbeni", description: "Flight to Jomsom (2,700m/8,856ft) and trek to Kagbeni (2,810m/9,217ft)." },
  { day: 4, title: "Trek to Chele", description: "Trek from Kagbeni to Chele (3,050m/10,004ft)." },
  { day: 5, title: "Trek to Syangboche", description: "Trek from Chele to Syangboche (3,475m/11,398ft)." },
  { day: 6, title: "Trek to Tsarang", description: "Trek from Syangboche to Tsarang (3,620m/11,874ft)." },
  { day: 7, title: "Trek to Lo Manthang", description: "Trek from Tsarang to Lo Manthang (3,730m/12,235ft)." },
  { day: 8, title: "Explore Lo Manthang", description: "Rest and exploration day in Lo Manthang." },
  { day: 9, title: "Trek to Dhakmar", description: "Trek from Lo Manthang to Dhakmar (3,810m/12,500ft)." },
  { day: 10, title: "Trek to Syangboche", description: "Trek from Dhakmar to Syangboche (3,475m/11,398ft)." },
  { day: 11, title: "Trek to Chhusang", description: "Trek from Syangboche to Chhusang (2,980m/9,776ft)." },
  { day: 12, title: "Trek to Jomsom", description: "Trek from Chhusang to Jomsom (2,720m/8,923ft)." },
  { day: 13, title: "Fly to Pokhara", description: "Flight from Jomsom to Pokhara." },
  { day: 14, title: "Drive to Kathmandu", description: "Drive from Pokhara to Kathmandu." },
  { day: 15, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default UpperMustangTrek;
