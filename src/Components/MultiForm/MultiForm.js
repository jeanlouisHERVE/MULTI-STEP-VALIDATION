import React, {useState} from 'react';
import './MultiForm.css';
import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import DietForm from './SubForms/DietForm';
import FoodStyleForm from './SubForms/FoodStyleForm';
import Allergies from './SubForms/Allergies';
import HateLove from './SubForms/HateLove';

export default function MultiForm() {

    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        foodStyle:[],
        allergies:[],
        pref: {}
    });

    const modifyIndex = (index, data) => {
        setFormIndex(index)
        if(data){
            const newData = {...allFormData};
            const firstPropNewdata = Object.keys(data)[0];

            newData[firstPropNewdata] = data[firstPropNewdata]
            setAllFormData(newData)
        }
    }

    //
    const elements = [
        <CardBegin key="1" modifyIndex={modifyIndex} />,
        <DietForm key="2" modifyIndex={modifyIndex} />,
        <foodStyle  key="3"modifyIndex={modifyIndex} />,
        <Allergies key="4"modifyIndex={modifyIndex} />,
        <HateLove key="5"modifyIndex={modifyIndex} />,
        <CardEnd key="6" modifyIndex={modifyIndex} />,
    ]
 
  return (
    <div className='container-multiform'>
        <Indicator formIndex={formIndex}/>

        {elements.map((item, index) => {
            if((index+1) === formIndex){
            return elements[index]
            }
        })}

        {/* {formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} /> 
        : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} />
        : formIndex === 3 ? <FoodStyleForm modifyIndex={modifyIndex} />
        : formIndex === 4 ? <Allergies modifyIndex={modifyIndex} />
        : formIndex === 5 ? <HateLove modifyIndex={modifyIndex} />
        : formIndex === 6 ? <CardEnd modifyIndex={modifyIndex} />
        : ""}  */}
    </div>
  )
}
