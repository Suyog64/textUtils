import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange =(event) =>{
        //console.log("on change");
        setText(event.target.value)
    }
    const handleUpClick =() =>{
        //console.log("UpperCase was Cli9cked "+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UpperCase","success");
    }
    const handleLoClick =() =>{
        //console.log("UpperCase was Cli9cked "+text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to LowerCase","success");
    }
    const handleClearClick =() =>{
        //console.log("UpperCase was Cli9cked "+text);
        let newText= "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopy=()=>{
        var text =  document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to clipboard","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const style={
        color: 'blue',
        border: 'solid 1px orange'
        
    }
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <div style={style}>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#414447':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" placeholder="Enter Text">

                </textarea>
                </div>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick} >Covert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick} >Covert To Lowercase</button>
            <button className="btn btn-info mx-3" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-secondary mx-3" onClick={handleClearClick} >Clear</button>

            
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{text.split("\n").length} paragraphs</p>
            <p>{0.008 * text.split(" ").length} Minutes to read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
