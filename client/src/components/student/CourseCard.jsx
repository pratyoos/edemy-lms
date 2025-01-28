import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext); // Get currency from context

  // Calculate the final price after discount
  const finalPrice = (course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2);

  // Calculate dynamic rating and reviews count
  const totalRatings = course.courseRatings.reduce((sum, rating) => sum + rating.rating, 0);
  const rating = course.courseRatings.length > 0 ? (totalRatings / course.courseRatings.length).toFixed(1) : 0;

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="text-gray-500 border border-gray-500/30 p-4 rounded-lg transition-all hover:shadow-md hover:bg-gray-50 max-w-xs sm:max-w-sm md:max-w-md"
    >
      <div className="flex flex-col items-center">
        <img
          src={course.courseThumbnail}
          alt={`${course.courseTitle} thumbnail`}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{course.courseTitle}</h3>
          <p className="mt-2 text-sm text-gray-500">
            Learn how to excel in {course.courseTitle}
          </p>
          <div className="mt-2 flex items-center">
            <p className="mr-2 text-sm">{rating}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={assets.star}
                  alt="star"
                  className="w-4 h-4"
                  style={{ opacity: i < Math.floor(rating) ? 1 : 0.5 }}
                />
              ))}
            </div>
          </div>
          <p className="mt-3 text-lg font-semibold">
            {currency} {finalPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
