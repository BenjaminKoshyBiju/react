import React, {useState} from 'react'

export default function TestForm(props) {
  const [text,setText]=useState('')
        const handleOnClick=()=>{
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert('Converted to Upper case', 'success')

        }

        const handleOnchange=(event)=>{
            setText(event.target.value)
        }

        const clearText=()=>{
          setText('')
          props.showAlert('Texted Cleared', 'success')
          
        }

        const onLower=()=>{
          let newText=text.toLowerCase()
            setText(newText)

            props.showAlert('Conerted to Lower case', 'success')
          
        }

     

    

  
    

  return (
    <>
    
  <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
  <h1>{props.heading}</h1>
  
  <textarea className="form-control" id='textArea' value={text} onChange={handleOnchange} rows={8} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
<button className="btn btn-primary my-2" onClick={handleOnClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={onLower}>Lower Text</button>
<button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
<div className="container my-2">
<h1>Preview</h1>
<p>{text.length>0?text:'Enter something in the above Text Box to preview'}</p>
<h1>Text Summary</h1>
<p>{text === '' ? 0 : text.split(" ").length} words and {text.length}Characters</p>
</div>
</div>
</>
  )
}
