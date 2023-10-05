import CourseList from "./CourseList";
import { Divider } from "@mui/material";
import TermSelector from "./TermSelector";
import { useState } from "react";

function CoursesPage({ courses, profile }) {
  const [term, setTerm] = useState("All");

  return (
    <>
      <TermSelector setTerm={setTerm} />
      <Divider sx={{ width: "100%" }} />
      <CourseList
        courses={
          term === "All"
            ? courses
            : Object.fromEntries(
                Object.entries(courses).filter(
                  ([key, value]) => value.term === term
                )
              )
        }
        profile={profile}
      />
    </>
  );
}

export default CoursesPage;
