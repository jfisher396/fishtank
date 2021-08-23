import React, { useState } from "react";
import "./App.css";
import Tank from "./components/Tank/Tank";
import AddFishForm from "./components/AddFishForm/AddFishForm";
import API from "./utils/API";

function App() {
  const [addFishFormData, setAddFishFormData] = useState({
    color1: "#ff6348",
    color2: "black",
    width: 100,
  });

  const handleFishFormChange = (event) => {
    const { name, value } = event.target;
    setAddFishFormData({
      ...addFishFormData,
      [name]: value,
    });
  };

  const saveFishButton = (event) => {
    event.preventDefault();
    API.saveFish(addFishFormData).then((res) => {
      console.log('fish saved')
    })
  }
  return (
    <>
      <h1>My Fishtank</h1>
      <AddFishForm formData={addFishFormData} changeHandler={handleFishFormChange} formSubmit={saveFishButton} />
      <Tank />
    </>
  );
}

export default App;
