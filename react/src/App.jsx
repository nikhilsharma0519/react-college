import React from "react";
import Student from "./components/Student";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <h1>STUDENT RECORDS</h1>

      <div>
        <Student
          name="ROHIT"
          roll="123456"
          class="B.Tech(cse)"
          img="https://ap2hyc.com/wp-content/uploads/2016/04/Ash-Ketchum.jpg"
        />

        <Student
          name="SOHAN"
          roll="789012"
          class="M.Tech(cse)"
          img="https://static0.colliderimages.com/wordpress/wp-content/uploads/2024/12/every-ash-ketchum-pok-mon-team-ranked.jpg?w=1200&h=675&fit=crop"
        />
      </div>
    </div>
  );
};

export default App;
