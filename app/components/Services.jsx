import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-1 text-lg font-Ovo">
        What I offer
      </h4>

      <h2 className="text-center text-5xl font-Ovo mb-4">
        My Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a MERN stack developer from CBEES Pharma, with
        6 months of internship experience in React.js,
        Node.js, and Express.js.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(
          ({ icon, title, description, link }, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-xl p-6 cursor-pointer
              hover:shadow-xl hover:shadow-black
              hover:-translate-y-2 transition-all duration-500"
            >
              {icon && (
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="w-10 h-auto"
                />
              )}

              <h3 className="text-lg my-4 text-gray-700">
                {title}
              </h3>

              <p className="text-sm text-gray-600 leading-5">
                {description}
              </p>

              <a
                href={link}
                className="flex items-center gap-2 text-sm mt-5"
              >
                Read more

                {assets.right_arrow && (
                  <Image
                    src={assets.right_arrow}
                    alt="right arrow"
                    width={16}
                    height={16}
                    className="w-4 h-auto"
                  />
                )}
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Services;