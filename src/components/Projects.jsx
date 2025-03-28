import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "SwiftBuy",
    details:
      "SwiftBuy is a full-stack eCommerce web application built using the MERN stack. It allows users to browse products, place orders, make payments via PayPal, and track their orders. Admins have the ability to manage products and update order statuses.",
    link: "https://github.com/impushpesh/SwiftBuy",
  },
  {
    title: "Talky",
    details:
      "Talky is a real-time chat application built on the MERN (MongoDB, Express, React, Node.js) stack. It allows users to chat with each other seamlessly, leveraging Socket.IO for real-time communication.",
    link: "https://github.com/impushpesh/Talky",
  },
  {
    title: "Twitter clone",
    details:
      "Twitter Clone is a real-time social media application built on the MERN (MongoDB, Express, React, Node.js) stack. It allows users to share posts, follow other users, like and comment on posts, and receive notifications.",
    link: "https://github.com/impushpesh/twitterClone",
  },
  {
    title: "EduManager",
    details:
      "EduManager is a backend project for managing student databases with distinct roles for administrators, teachers, and students. Built with Node.js, Express, and MongoDB, it features secure JWT authentication and a RESTful API for seamless data management.",
    link: "https://github.com/impushpesh/EduManager",
  },
];

function Projects() {
  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
