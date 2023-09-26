import React,{useState} from 'react'


export const TextForm = (props) => {
    const [text,setText] = useState('set text');

    const handleupClick = ()=>{
                           //console.log('hello world'+text);
                           let uptext = text.toUpperCase();
                           setText(uptext)
                         }

    const handleOnchange =  (event) => {
        console.log('hello world - 3');
        setText(event.target.value);
    }

    const handleCopy = ()=>{
       // console.log('I am copy');
        var text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSPaces=()=>{
        let newText =  text.split(/[ ]+/);
        setText(newText.join(" "))
    }

  return (
            <>
               
                    <h1>{props.heading} </h1>
                    <div className="form-group">
                        <label >Email address</label>
                        <textarea id="myText" className="form-control" onChange={handleOnchange} rows="8" style={{backgroundColor:props.mode==='light'?'grey':'white'}} value={text} placeholder="Enter email"></textarea>
                    </div>
                    <button type="submit" onClick={handleupClick} className="btn btn-primary">Submit</button>
                    | 
                    <button onClick={handleCopy} className="btn btn-primary">Handle Copy</button>
                    
                    <button onClick={handleExtraSPaces} className="btn btn-primary">Remove Extra Spaces</button>

                    <div className='container'>
                        <p>Yourwords {text.split(" ").length} Charecter {text.length}</p>
                    </div>

            </>
         )
}
