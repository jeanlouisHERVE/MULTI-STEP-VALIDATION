import React from 'react';
import './Indicator.css';
import healthy from './icons/healthy.svg';
import love from './icons/love.svg';
import diet from './icons/diet.svg';
import allergie from './icons/allergy.svg';
import thumb from './icons/thumb.svg';

export default function Indicator({formIndex}) {



  return (
    <div className='container-indicator'>
        <div className='lines-container'>
            <div 
                className='line upper-line'
                style={{
                    width: formIndex === 1 ? "0%"
                        : formIndex === 2 ? "0%" 
                        : formIndex === 3 ? "25%"  
                        : formIndex === 4 ? "50%"  
                        : formIndex === 5 ? "75%"    
                        : formIndex === 6 ? "100%"
                        : ""  
            }}>
                

            </div>
            <div className='line under-line'></div>       
        </div>
        <div className='container-img'>
            <div className='bloc-img'>
                <img src={healthy} alt=""/>
            </div>
            <div className='bloc-img'>
                <img src={love} alt=""/>
            </div>
            <div className='bloc-img'>
                <img src={diet} alt=""/>
            </div>
            <div className='bloc-img'>
                <img src={allergie} alt=""/>
            </div>
            <div className='bloc-img'>
                <img src={thumb} alt=""/>
            </div>
        </div>       
    </div>
  )
}
