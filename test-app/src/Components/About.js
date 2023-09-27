import React, { useState } from 'react'

export default function About() {

    
    const [myStyle,setmyStyle]=useState({
    color:'black',
    backgroundColor:'white'
})
const [btnText, setbtnText] = useState("Turn on Dark mode")
const darkMode=()=>{
    if (myStyle.color==='black'){
        
        setmyStyle({ 
            color:'white',
            backgroundColor:'black'})
        setbtnText("Turn on Light Mode")
    }
    
    else
   {setmyStyle(
        {color:'black',
    backgroundColor:'white'})
    setbtnText("Turn on Dark Mode")}
}
  return (
    <div className='container' style={myStyle}>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header " >
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
          
        </div>
        <button type="button " className="btn btn-primary my-2" onClick={darkMode}>{btnText}</button>
        </div>
  )
}
