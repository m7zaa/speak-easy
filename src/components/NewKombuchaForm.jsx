import React from "react";

function NewKombuchaForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name' />
        <input
          type='text'
          id='brand'
          placeholder='Brand' />
        <input
          type='text'
          id='Price'
          placeholder='Price' />
        <input
          type='text'
          id='flavor'
          placeholder='Flavor' />
                
        <button type='submit'>Add Kombucha</button>
      </form>
    </div>
  );
}

export default NewKombuchaForm;