import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Uppercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        console.log("Uppercase was clicked" + Text);
        let newText = " ";
        setText(newText);
    }

    const handleOnClick = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [Text, setText] = useState('Enter Text here2');
    // text = "new Text"; //Wrong way to change the state
    // setText = ("new Text"); //Wrong way to change the state
    return (
        <>
            <div className='container'>
                <h1>{props.heading}  </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} id="myBox" rows="8" onChange={(e) => setText(e.target.value)}></textarea><br />
                    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to upper case</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to lower case</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
                </div>

            </div>

            <div className='container my-3'>
                <h1>Your text summary</h1>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minuts read</p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
        </>
    )
}