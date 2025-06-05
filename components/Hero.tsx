import React from 'react';
import Image from 'next/image';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
          <Image 
            src="/images/CV.jpg" 
            alt="Jeanne Charlot" 
            width={256} 
            height={256} 
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mb-6">Materials Science Engineer</p>
        <p className="text-gray-600 mb-6">{personalInfo.bio}</p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {personalInfo.location}
          </div>
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${personalInfo.email}`} className="hover:underline">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${personalInfo.phone}`} className="hover:underline">
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
