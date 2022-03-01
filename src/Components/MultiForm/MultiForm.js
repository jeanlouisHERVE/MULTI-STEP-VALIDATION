import React, {useState} from 'react';
import './MultiForm.css';
import Indicator from './Indicator/Indicator';
export default function MultiForm() {

    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        foodStyle:[],
        allergies:[],
        pref: {}
    });
 
  return (
    <div className='container-multiform'>
        <Indicator />
    </div>
  )
}
