function CourseList({ courses }) {
    return (
        <>
            {Object.values(courses).map(course => (
                <div key={course.id}>
                    {course.term} CS {course.number}
                    <ul>
                        <li>{course.title}</li>
                        <li>{course.meets}</li>
                    </ul>
                </div>
            ))}
        </>
    );
};

export default CourseList;