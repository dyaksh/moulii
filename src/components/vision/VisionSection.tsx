import React from 'react';
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const PrimaryColor = '#9400d3'; // Primary color variable

const VisionSection = () => {
  return (
    <section id="Vision" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left mb-4 lg:mb-0">
            <h3 className="text-4xl font-bold mb-4" style={{ color: PrimaryColor }}>Our Vision</h3>
            <p className="text-base lg:text-lg">
              Through constant research and application of innovative solutions, we will do all it takes to be India&apos;s premier full-service advertising agency that delivers results for our clients. At the heart of everything we do is a set of shared values that serve as the basis for the decisions we make and the actions we take to create impact for our clients. The espoused values that drive our success include Clarity, Individuality, Creativity, Quality, and Accountability.
            </p>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 rounded-lg px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h3 className="text-4xl font-bold mb-4" style={{ color: PrimaryColor, textAlign:'center' }}>
                  Our Vision
                </h3>
                <p className="text-base lg:text-lg text-justify text-gray-800 dark:text-gray-300">
                  Through constant research and application of innovative solutions, we will do all it takes to be India&apos;s premier full-service advertising agency that delivers results for our clients. At the heart of everything we do is a set of shared values that serve as the basis for the decisions we make and the actions we take to create impact for our clients. The espoused values that drive our success include Clarity, Individuality, Creativity, Quality, and Accountability.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 flex flex-wrap justify-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/vision/vision.svg" // Ensure this path is correct
                  alt="Vision Image"
                  width={400}
                  height={200}
                  className="max-w-full max-h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
