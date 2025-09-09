import React from "react";
import { Course as CourseType } from "./CourseTypes";
import Course from "./Course";

type CourseListProps = {
  courses: CourseType[];
};

function CourseList({ courses }: CourseListProps) {
  return (
    <>
      {courses.map((course) => (
        <Course
          key={course.courseId}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </>
  );
}

export default CourseList;
