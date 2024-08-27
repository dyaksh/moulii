import React from 'react';
import { FaPen, FaLaptopCode, FaCog, FaChartLine, FaBullhorn, FaHandshake } from 'react-icons/fa';

const PrimaryColor = '#9400d3'; // Primary color variable

const ValuesSection = () => {
  return (
    <section id="values" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 rounded-md px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h3
                className="text-4xl font-bold mb-4 text-center text-black dark:text-white"
                style={{ color: PrimaryColor }}
              >
                Our Values
              </h3>
              <p className="text-base lg:text-lg text-justify text-gray-800 dark:text-gray-300">
                Moulis Defined! Moulis (plural for Mouli) means Lord Shiva. Is Shiva a form? Is Shiva somebody sitting in some place? No. Shiva is the entire Universe. Shiva is the essence from which everything is created, everything is sustained, and into which everything is dissolved. Shiva is the entire creation (Vishwaroopa) and yet he is formless or Nirakaar. Similarly, our advertising agency is a creative representation of Shiva, where our world of communication solutions comes to life; they are sustained and later relinquished to give birth to the new. Our five values are but a derivative of the threefold power of Shiva – symbolized by the Tripundra or Trident, namely, Ichha Shakti (Willpower), Jnana Shakti (Knowledge power), and Kriya Shakti (Power of Action).
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 flex flex-wrap -mx-4">
            {[
              { icon: <FaPen />, title: 'Creative Print Solutions' },
              { icon: <FaLaptopCode />, title: 'Engaging Digital Content' },
              { icon: <FaBullhorn />, title: 'High-Quality TV Commercials' },
              { icon: <FaHandshake />, title: 'Exceptional Customer Service' },
              { icon: <FaCog />, title: 'Innovative Solutions' },
              { icon: <FaChartLine />, title: 'Strategic Growth' }
            ].map((item, index) => (
              <div
                key={index}
                className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 mb-8 flex justify-center"
              >
                <div
                  className="flex flex-col items-center p-6 border-2 border-transparent rounded-lg shadow-md transition-transform transform hover:scale-105"
                  style={{ width: '240px', height: '160px' }}
                >
                  <div className="text-4xl mb-4" style={{ color: PrimaryColor }}>
                    {item.icon}
                  </div>
                  <h4 className="text-md font-bold text-black dark:text-white text-center">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
