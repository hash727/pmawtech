'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import React from 'react';

type ServiceModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  details: string;
};

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, y: "-10%" },
  visible: { opacity: 1, y: "0%" },
};

const ServiceModal: React.FC<ServiceModalProps> = ({ open, onClose, title, description, details }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/90 bg-opacity-40 flex items-center justify-center z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-lg p-6 relative z-10"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-300 mb-2">{title}</h2>
            <p className="text-gray-500 mb-4">{description}</p>
            <div className="text-gray-500 text-sm whitespace-pre-line">{details}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
