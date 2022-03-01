import React, {useState} from 'react';
import './SubForm.css';

export default function DietForm(props) {

    const preventFunc = e => e.preventDefault()
    const handleRadio = ( ) => {}

  return (
    <form
        onSubmit={preventFunc}
        className='diet-form'
    >
        <p>Quel est ton régime alimentaire ?</p>

        <label htmlFor='nodiet'>Pas de régime particulier.</label>
        <input 
            onChange={handleRadio}
            type="radio"
            name="diet"
            id="nodiet"
            value="nodiet"
        />
        <label htmlFor='omnivorous'>Omnivore</label>
        <input 
            onChange={handleRadio}
            type="radio"
            name="diet"
            id="omnivorous"
            value="omnivorous"
        />
        <label htmlFor='vegetarian'>Végétarien</label>
        <input 
            onChange={handleRadio}
            type="radio"
            name="diet"
            id="vegetarian"
            value="vegetarian"
        />
        <label htmlFor='vegan'>Pas de régime particulier.</label>
        <input 
            onChange={handleRadio}
            type="radio"
            name="diet"
            id="vegan"
            value="vegan"
        />

        <button onClick={() => props.modifyIndex(3)}>Valider</button>
    </form>
  )
}
