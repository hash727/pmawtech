'use client'

import React from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { IconType } from 'react-icons';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
  onClick: () => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, onClick }) => {
  return (
    <motion.div 
        onClick={onClick}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white cursor-pointer dark:bg-gray-950 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800">
      <div className="text-slate-800 dark:text-gray-300 mb-4 flex justify-center">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
