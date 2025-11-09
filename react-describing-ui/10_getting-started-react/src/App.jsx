import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "40px",
        color: "#333",
      }}
    >
      <h1 style={{ marginBottom: "10px", textAlign: "left" }}>About Me</h1>
      <hr style={{ margin: "20px 0" }} />
            <p style={{ textAlign: "left" }}>
              <strong>Name:</strong> Estela Mae Jalac
            </p>
            <p style={{ textAlign: "left" }}>
              <strong>Course/Year:</strong> BS Information Technology, 3rd Year - B
            </p>
            <p style={{ textAlign: "left" }}>
              <strong>Fun Fact:</strong> I love dogs
            </p>

      <h1 style={{ marginBottom: "10px", textAlign: "left" }}>Why I Want to Learn React</h1>
      <hr style={{ margin: "20px 0" }} />
        <p style={{ fontSize: "18px",textAlign: "left" }}>
          I want to learn Git and GitHub because I believe that these will be very helpful for me in the future because I can get more opportunies if I am continously learning everyday new things to enhance my skills and improve my knowledge as an ICT major student.
        </p>
      </div>
  );
}

export default App;