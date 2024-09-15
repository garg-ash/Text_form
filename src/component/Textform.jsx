import React, { useState } from 'react'

function Textform(props) {
    const handleUpClick = (() => {
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    })

    const handlelowerClick = (() => {
        let newText = text.toLowerCase();
        setText(newText)
    })

    const handleClearClick = (() => {
        let newText = '';
        setText(newText)
    })

    const handleCopy = (() => {
        var newText = document.getElementById("myBox")
        newText.select()
        navigator.clipboard.writeText(newText.value)
    })

    const handleOnChange = ((event) => {
        // console.log("onChange")
        setText(event.target.value)
    })
    const [text, setText] = useState("Enter Your Text");
    // setText("Enter text here")
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example Textarea</label> */}
                    <input type="textarea" className="form-control" id="myBox" placeholder="" value={text} onChange={handleOnChange} />
                    {/* <textarea class="form control" name="" id="myBox" rows="8" col="10"></textarea> */}
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelowerClick}>Convert to lowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>


            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read</p>
            </div>
        </>
    )
}

export default Textform
