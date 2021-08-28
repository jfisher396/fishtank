import React, { useState } from "react";
import "./App.css";
import Tank from "./components/Tank/Tank";
import AddFishForm from "./components/AddFishForm/AddFishForm";
import API from "./utils/API";

function App() {
  const [addFishFormData, setAddFishFormData] = useState({
    color1: "#FFA500",
    color2: "#000000",
    width: 100,
  });

  const [retrieveFish, setRetrieveFish] = useState([]);

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
      API.getAllFish().then((res) => {
        setRetrieveFish(res.data);
      });
      setAddFishFormData({
        color1: "#FFA500",
        color2: "#000000",
        width: 100,
      });
    });
  };
  return (
    <>
      <h1>My Fishtank</h1>
      <AddFishForm
        formData={addFishFormData}
        changeHandler={handleFishFormChange}
        formSubmit={saveFishButton}
      />
      <Tank fishFromDb={retrieveFish} />
    </>
  );
}

export default App;
