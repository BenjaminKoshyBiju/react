import React, {useState} from 'react'

export default function TestForm(props) {

    const handleOnClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);

    }

    const handleOnchange=(event)=>{
        setText(event.target.value)
    }

    const clearText=()=>{
      
      setText('')
    }

    const onLower=()=>{
      let newText=text.toLowerCase()
        setText(newText)
      
    }

    const [text,setText]=useState('Enter the text')

  
    

  return (
    <>
    
  <div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" id='textArea' value={text} onChange={handleOnchange} rows={8}></textarea>
</div>
<button className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={onLower}>Lower Text</button>
<button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
<div className="container my-2">
<h1>Preview</h1>
<p>{text}</p>
<h1>Text Summary</h1>
<p>{text === '' ? 0 : text.split(" ").length} words and {text.length}Characters</p>
</div>
</>
  )
}
