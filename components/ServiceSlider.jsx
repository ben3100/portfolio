import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const ServiceSlider = ({ services }) => {
  return (
    <div className="service-slider flex flex-wrap gap-4 justify-center">
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2 * (index + 1))}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="service-item flex flex-col items-center bg-white rounded-lg shadow-lg p-6 min-w-[250px] max-w-[300px] text-center"
        >
          <div className="service-icon text-4xl mb-4 text-primary">{service.icon}</div>
          <h3 className="service-title text-xl font-semibold mb-2">{service.title}</h3>
          <p className="service-description text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceSlider;
