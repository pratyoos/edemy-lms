import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-25 px-8">
      <h2 className="text-3xl font-medium text-gray-800">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>

      {/* Course Cards */}
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCourses.slice(0, 6).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      {/* Link to all courses */}
      <Link
        to={'/course-list'}
        onClick={() => window.scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded mt-8 inline-block"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
