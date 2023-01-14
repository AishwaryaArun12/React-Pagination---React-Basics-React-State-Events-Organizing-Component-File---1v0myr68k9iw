import React, { useState } from 'react'
const PaginationButtonsList = (props) => {
const noOfPages=20;
const buttonArr=Array(20).fill().map((_,i)=>i+1);
const arr=[1,2,3,4]
  
  return  <div className="pagination-buttons-list">
  {buttonArr.map((button,id)=>{
    
    return (
    <button key={id} className={button==props.redButton?'active-btn':'btn'} onClick={props.handleChange} value={button}>{button}</button>)
  })}
  </div>;
  };0

export { PaginationButtonsList };
