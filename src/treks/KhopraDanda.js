import React from 'react';
import { Calendar, Compass, Mountain, Star, Home, Plane } from 'lucide-react';

const KhopraDandaTrek = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/khopra-danda.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Khopra Danda Trek</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="9 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="4,500 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Moderate" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Plane className="w-6 h-6" />} title="Transport" value="Flight & Private Vehicle" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Khopra Danda Trek, also known as the Khopra Ridge Trek, is a captivating journey through the Annapurna region of Nepal. This off-the-beaten-path trek offers trekkers an opportunity to experience the rich cultural heritage of local communities while enjoying panoramic views of the Himalayas, including peaks like Dhaulagiri, Annapurna South, and Nilgiri. The trail traverses through dense rhododendron forests, traditional villages, and terraced farmlands, culminating at Khopra Ridge, which provides breathtaking vistas of the surrounding mountains. An optional hike to the sacred Khayer Lake at 4,500 meters adds a spiritual dimension to the adventure. The Khopra Danda Trek is ideal for those seeking a less crowded route with authentic cultural experiences and stunning natural beauty.
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
  { day: 2, title: "Fly to Pokhara and Drive to Ghandruk", description: "Fly to Pokhara and drive to Ghandruk (1,940 m)." },
  { day: 3, title: "Trek to Tadapani", description: "Trek from Ghandruk to Tadapani (2,610 m)." },
  { day: 4, title: "Trek to Bayeli Kharka", description: "Trek from Tadapani to Bayeli Kharka (3,450 m)." },
  { day: 5, title: "Trek to Khopra Danda", description: "Trek from Bayeli Kharka to Khopra Danda (3,660 m)." },
  { day: 6, title: "Optional Hike to Khayer Lake", description: "Optional hike to Khayer Lake (4,500 m) and return to Khopra Danda." },
  { day: 7, title: "Trek to Swanta Village", description: "Trek from Khopra Danda to Swanta Village (2,214 m)." },
  { day: 8, title: "Trek to Ulleri and Drive to Pokhara", description: "Trek to Ulleri and drive back to Pokhara." },
  { day: 9, title: "Fly to Kathmandu and Departure", description: "Fly back to Kathmandu and prepare for departure." },
];

export default KhopraDandaTrek;
