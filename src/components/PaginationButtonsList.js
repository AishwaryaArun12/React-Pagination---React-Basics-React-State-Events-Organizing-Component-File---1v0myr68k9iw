import React from 'react'
const PaginationButtonsList = (props) => {
const noOfPages=20;
function createButtons(){
    const buttonsArr=[];
    for(let i=0;i<noOfPages;i++){
      if(i+1!=props.page){
        buttonsArr.push(<button id={'button-'+(i+1)} value={i+1} key={i+1} onClick={buttonClick}>{i+1}</button>);
    }else{
    buttonsArr[props.page]=<button id={'button-'+props.page} value={props.page} key={props.page} onClick={buttonClick} className='active-btn'>{props.page}</button>
    }
  }
    return buttonsArr;
    }
    function buttonClick(e) {
      // const redButtons = document.querySelectorAll(".active-btn");
      // redButtons.forEach((button) => {
      //   button.classList.remove("active-btn");
      // });
      // const button = document.getElementById("button-" + e.target.value);
      // button.classList.add("active-btn");
      props.handleChange(e);
    }
  
  return  <div className="pagination-buttons-list">{createButtons()}</div>;
  };

export { PaginationButtonsList };
