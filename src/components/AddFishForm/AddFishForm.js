import React from "react";

function AddFishForm(props) {
  return (

    // form for creating a new fish;
    // props come from the app component;
    <form onSubmit={props.formSubmit}>
      <div className="form-group">
      <label>Width:</label>
      <input
        // className="input-group"
        onChange={props.changeHandler}
        value={props.formData.width}
        name="width"
        type="number"
        min="25"
        max="500"
      />
      <label>Color 1:</label>
      <input
        onChange={props.changeHandler}
        value={props.formData.color1}
        name="color1"
        type="color"
      />
      <label>Color 2:</label>
      <input
        onChange={props.changeHandler}
        value={props.formData.color2}
        name="color2"
        type="color"
      />
      <button type="button" className="btn btn-warning">Save fish!</button>
      </div>
    </form>
  );
}

export default AddFishForm;
