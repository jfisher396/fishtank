import React from 'react'

function AddFishForm() {
    return (
        <form>
            <label>Width:</label>
            <input name="width" type="number" />
            <label>Color:</label>
            <input name="width" type="color" />
        </form>
    )
}

export default AddFishForm