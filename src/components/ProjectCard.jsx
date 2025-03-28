import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ title, details, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{details}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-500 hover:text-blue-600 transition"
      >
        <FaGithub className="text-2xl" />
        <span className="ml-2">View Details</span>
      </a>
    </motion.div>
  );
}

export default ProjectCard;
