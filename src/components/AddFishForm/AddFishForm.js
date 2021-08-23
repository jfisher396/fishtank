import React from 'react'

function AddFishForm(props) {
    return (
        <form>
            <label>Width:</label>
            <input onChange={props.changeHandler} value={props.formData.width} name="width" type="number" min="25" max="500"/>
            <label>Color:</label>
            <input onChange={props.changeHandler} value={props.formData.color} name="color" type="color" />
            <button>Save fish!</button>
        </form>
    )
}

export default AddFishForm