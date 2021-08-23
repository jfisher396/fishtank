import React, { useState } from "react";
import "./App.css";
import Tank from "./components/Tank/Tank";
import AddFishForm from "./components/AddFishForm/AddFishForm";

function App() {
  const [addFishFormData, setAddFishFormData] = useState({
    color: "#ff6348",
    width: 100,
  });

  const handleFishFormChange = (event) => {
    const { name, value } = event.target;
    setAddFishFormData({
      ...addFishFormData,
      [name]: value,
    });
  };
  return (
    <>
      <h1>My Fishtank</h1>
      <AddFishForm formData={addFishFormData} changeHandler={handleFishFormChange}  />
      <Tank />
    </>
  );
}

export default App;
