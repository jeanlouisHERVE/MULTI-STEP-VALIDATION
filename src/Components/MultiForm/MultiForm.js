import React, {useState} from 'react';
import './MultiForm.css';
import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';

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
        <CardBegin />
    </div>
  )
}
