import React from 'react';
import { Calendar, Compass, Mountain, Star, Home, Truck } from 'lucide-react';

const LangtangValleyTrek = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          className="relative h-64 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/langtang-valley.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Langtang Valley Trek
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="11 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="4,984 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Moderate" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Truck className="w-6 h-6" />} title="Transport" value="Overland" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Langtang Valley Trek is a remarkable journey through the heart of the Himalayas, offering trekkers an immersive experience into Nepal's natural beauty and cultural heritage. Starting from Syabrubesi, the trail ascends through lush forests, traditional Tamang villages, and alpine meadows, culminating in the serene Kyanjin Gompa. Along the way, trekkers are treated to panoramic views of snow-capped peaks, including Langtang Lirung and Ganesh Himal. The trek also provides opportunities to explore ancient monasteries, witness traditional cheese-making processes, and experience the warm hospitality of the local communities. With a maximum elevation of 4,984 meters at Tserko Ri, this moderate trek is suitable for trekkers with a reasonable level of fitness. The Langtang Valley Trek is not just a journey through diverse terrains but also a cultural odyssey that offers a deep connection with the Himalayan way of life.
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
  { day: 2, title: "Drive to Syabrubesi", description: "Drive from Kathmandu to Syabrubesi (1,550m/5,085ft)." },
  { day: 3, title: "Trek to Lama Hotel", description: "Trek from Syabrubesi to Lama Hotel (2,380m/7,808ft)." },
  { day: 4, title: "Trek to Langtang Village", description: "Trek from Lama Hotel to Langtang Village (3,430m/11,253ft)." },
  { day: 5, title: "Trek to Kyanjin Gompa", description: "Trek from Langtang Village to Kyanjin Gompa (3,870m/12,697ft)." },
  { day: 6, title: "Acclimatization and Exploration", description: "Explore Kyanjin Gompa and hike to Tserko Ri (4,984m/16,352ft)." },
  { day: 7, title: "Trek to Lama Hotel", description: "Return trek from Kyanjin Gompa to Lama Hotel." },
  { day: 8, title: "Trek to Syabrubesi", description: "Trek from Lama Hotel back to Syabrubesi." },
  { day: 9, title: "Drive to Kathmandu", description: "Drive from Syabrubesi to Kathmandu." },
  { day: 10, title: "Free Day in Kathmandu", description: "Explore Kathmandu or rest." },
  { day: 11, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default LangtangValleyTrek;
