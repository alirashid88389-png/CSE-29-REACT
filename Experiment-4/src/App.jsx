import React from "react";
import "./App.css";

// Student Component
function Student(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <Student name="Rahul Sharma" course="Computer Science" marks="85" />
      <Student name="Anita Verma" course="Information Technology" marks="92" />
      <Student name="Rohan Gupta" course="Electronics" marks="78" />
      
    </div>
  );
}

export default App;