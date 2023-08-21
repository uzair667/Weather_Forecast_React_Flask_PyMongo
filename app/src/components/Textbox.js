import { useState } from "react"
import React from "react"

export default function Textbox(props){

    const [text, newtext] = useState('')
    
    const On_click_upper = ()=>{
        let new_t = text.toUpperCase();
        newtext(new_t)
        if (text.trim() === ''){

            alert('plz insert some text');
            return;
        }
    }

    const On_click_lower = ()=>{
        let new_t = text.toLowerCase();
        newtext(new_t)
        if (text.trim() === ''){

            alert('plz insert some text');
            return;
        }
    }


    const On_click_standard = ()=>{
        let new_t = text.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
        newtext(new_t)
        if (text.trim() === ''){

            alert('plz insert some text');
            return;
        }

     }

     const On_click_clear = ()=>{
        let new_t = '';
        newtext(new_t)
        if (text.trim() === ''){

            alert('plz insert some text');
            return;
        }

     }

    const On_change = (event)=>{
        newtext(event.target.value)

    }

    return(
        <>
        <div className="container" style = {{color: props.mode==='dark'?'white':'black', marginTop:'50px'}}>

        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>Enter any text</h3></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={On_change} value = {text} rows="6"></textarea><br />
        <button className="btn btn-outline-success mx-2" onClick={On_click_upper} type="submit">Upper</button>
        <button className="btn btn-outline-success mx-2" onClick={On_click_lower} type="submit">Lower</button>
        <button className="btn btn-outline-success mx-2" onClick={On_click_standard} type="submit">Standard</button>
        <button className="btn btn-outline-success mx-2" onClick={On_click_clear} type="submit">Clear</button>
        </div>
        <div className="container">
            <h2>This is preview of your text</h2>
            <p>{text}</p>

        </div>
        </div>
        </>
    
    )
}