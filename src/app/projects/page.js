import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProjectCard from '../components/ProjectCard';
const projects = [
  {
    img1: '/images/projects/Impressive1.JPG',
    img2: '/images/projects/Impressive11.JPG',
  },
  {
    img1: '/images/projects/Impressive2.jpg',
    img2: '/images/projects/Impressive2.1.jpg',
  },
  {
    img1: '/images/projects/Impressive3.JPG',
    img2: '/images/projects/Impressive31.JPG',
  },
  {
    img1: '/images/projects/Impressive4.jpg',
    img2: '/images/projects/Impressive4.1.jpg',
  },
  {
    img1: '/images/projects/Impressive5.jpg',
    img2: '/images/projects/Impressive5.1.jpg',
  },
  {
    img1: '/images/projects/Impressive6.jpeg',
    img2: '/images/projects/Impressive6.1.jpeg',
  },
  {
    img1: '/images/projects/Impressive7.jpeg',
    img2: '/images/projects/Impressive7.1.jpeg',
  },
  {
    img1: '/images/projects/Impressive8.jpg',
    img2: '/images/projects/Impressive8.1.jpg',
  },
];

export default function page() {
  return (
    <div>
      <Breadcrumb name={'Our Projects'} />

      <div className='flex flex-wrap p-2 md:p-5 lg:p-10'>
        {projects.map((project, index) => (
          <div className='w-full md:w-1/2' key={'project' + index}>
            <ProjectCard img1={project.img1} img2={project.img2} />
          </div>
        ))}
      </div>
    </div>
  );
}
