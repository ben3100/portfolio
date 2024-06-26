import React from 'react';
import { motion } from 'framer-motion';

const ServiceSlider = ({ services }) => {
  return (
    <div className="service-slider flex overflow-x-auto gap-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="service-item flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
          whileHover={{ scale: 1.05 }}
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
