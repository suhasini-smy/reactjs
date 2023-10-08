import React,{useState} from 'react'


export const TextForm = (props) => {
    const [text,setText] = useState('set text');

    const handleupClick = ()=>{
                           let uptext = text.toUpperCase();
                           setText(uptext);
                         }

    const handleOnchange =  (event) => {
        setText(event.target.value);
        
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success")
    }

    const handleExtraSPaces=()=>{
        let newText =  text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed extra space","success")
    }

  return (
            <>
               
               <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                    <h1>{props.heading} </h1>
                    <div className="form-group">
                        <label >Email address</label>
                        <textarea id="myText" className="form-control" onChange={handleOnchange} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} placeholder="Enter email"></textarea>
                    </div>
                    <button type="submit" onClick={handleupClick} className="btn btn-primary">Submit</button>
                    | 
                    <button onClick={handleCopy} className="btn btn-primary">Handle Copy</button>
                    
                    <button onClick={handleExtraSPaces} className="btn btn-primary">Remove Extra Spaces</button>

                    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                        <p>Yourwords:-- {text.split(" ").length} Charecter {text.length}</p>
                        <p>Preview:--{text.length>0? text:'Enter Soething To preview Here'}</p>
                    </div>
                    </div>

            </>
         )
}
