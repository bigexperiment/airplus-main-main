import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8 tracking-wide">
          Get in Touch
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Head Office Section */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
            <h4 className="text-xl font-semibold mb-4">Head Office (Nepal)</h4>
            <p className="text-gray-400 mb-1">Madan Bhandari</p>
            <p className="text-gray-400 mb-4">
              Bhagawatisthan, Thamel, Kathmandu, Nepal
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-400" />
                <span className="text-gray-300">+977 1 4525454 / +977 9862442639</span>
              </div>
              <div className="flex items-center">
                <img src="whatsapp.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                <span className="text-gray-300">WhatsApp/Viber: +977 9862442639</span>
              </div>
              <div className="flex items-center">
                <img src="line.png" alt="Line" className="w-5 h-5 mr-2" />
                <span className="text-gray-300">Line: +977 9862442639</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <a
                  href="mailto:airplusnepal@gmail.com"
                  className="text-gray-300 hover:text-indigo-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  airplusnepal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Global Representatives Section */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
            <h4 className="text-xl font-semibold mb-4">Global Representatives</h4>
            <div className="space-y-5">
              {/* Australia */}
              <div className="flex items-center">
                <ReactCountryFlag
                  countryCode="AU"
                  svg
                  style={{ width: "2em", height: "2em" }}
                />
                <div className="ml-3 text-gray-300">
                  <span className="font-medium">Australia:</span>
                  <p>Hom Nath Bhandari, +61 404377425</p>
                  <a
                    href="mailto:homnathbhandari2016@gmail.com"
                    className="text-indigo-400 hover:underline transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    homnathbhandari2016@gmail.com
                  </a>
                </div>
              </div>
              {/* Canada */}
              <div className="flex items-center">
                <ReactCountryFlag
                  countryCode="CA"
                  svg
                  style={{ width: "2em", height: "2em" }}
                />
                <div className="ml-3 text-gray-300">
                  <span className="font-medium">Canada:</span>
                  <p>Subash Bhandari, +14374109840</p>
                  <a
                    href="mailto:Subashbhandari1902@gmail.com"
                    className="text-indigo-400 hover:underline transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subashbhandari1902@gmail.com
                  </a>
                </div>
              </div>
              {/* Japan */}
              <div className="flex items-center">
                <ReactCountryFlag
                  countryCode="JP"
                  svg
                  style={{ width: "2em", height: "2em" }}
                />
                <div className="ml-3 text-gray-300">
                  <span className="font-medium">Japan:</span>
                  <p>バンダリ　ラズ, 080-7850-6412</p>
                  <a
                    href="mailto:bhandariraju575@gmail.com"
                    className="text-indigo-400 hover:underline transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bhandariraju575@gmail.com
                  </a>
                </div>
              </div>
              {/* USA */}
              <div className="flex items-center">
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{ width: "2em", height: "2em" }}
                />
                <div className="ml-3 text-gray-300">
                  <span className="font-medium">USA:</span>
                  <p>Ganesh Adhikari, 714-485-9360</p>
                  <a
                    href="mailto:ganeshadhikari332@gmail.com"
                    className="text-indigo-400 hover:underline transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ganeshadhikari332@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/all-activities"
                  onClick={scrollToTop}
                  className="text-indigo-400 hover:underline transition"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/all-activities"
                  onClick={scrollToTop}
                  className="text-indigo-400 hover:underline transition"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  onClick={scrollToTop}
                  className="text-indigo-400 hover:underline transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-indigo-400 hover:underline transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 AirPlusNepal. All rights reserved.</p>
          <div className="mt-2 text-gray-500 text-xs">
            <p>Company registered: 194768/075/076</p>
            <p>Tourism license number: 2605</p>
            <p>VAT no: 606643944</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
