import React, { useState } from "react";
import "./App.css";
import Tank from "./components/Tank/Tank";
import AddFishForm from "./components/AddFishForm/AddFishForm";
import API from "./utils/API";

function App() {
  // holds form data in state ; sets default colors to orange and black
  const [addFishFormData, setAddFishFormData] = useState({
    color1: "#FFA500",
    color2: "#000000",
    width: 100,
  });

  // hides the add fish form until the "Add Fish" button is clicked
  const [showAddFishForm, setShowAddFishForm] = useState(false);

  // holds fish data from db in state
  const [retrieveFish, setRetrieveFish] = useState([]);

  // change handler for form; retrieves user input and sets data to state
  const handleFishFormChange = (event) => {
    const { name, value } = event.target;
    setAddFishFormData({
      ...addFishFormData,
      [name]: value,
    });
  };

  // click handler for save button;
  // takes data from addFishFormData state and pushes it to db;
  // then retrieves data from the db and sets it to retrieveFish state;
  // resets user input fields and colors to default
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
      setShowAddFishForm(false)
    });
  };
  return (
    <>
      <h1>My Fishtank</h1>
      {showAddFishForm ? (
        <AddFishForm
          formData={addFishFormData}
          changeHandler={handleFishFormChange}
          formSubmit={saveFishButton}
        />
      ) : (
        <button onClick={() => setShowAddFishForm(true)}>Add Fish</button>
      )}
      {/* sends fish form data and handlers back to the form */}

      {/* sends retrieved fish from db to the tank componenent for rendering */}
      <Tank fishFromDb={retrieveFish} />
    </>
  );
}

export default App;
