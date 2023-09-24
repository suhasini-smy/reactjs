import React,{useState} from 'react'


export const TextForm = (props) => {
    const [text,seText] = useState('set text');

    const handleupClick = ()=>{
                           //console.log('hello world'+text);
                           let uptext = text.toUpperCase();
                           seText(uptext)
                         }

    const handleOnchange =  (event) => {
        console.log('hello world - 3');
        seText(event.target.value);
    }

  return (
            <>
               
                    <h1>{props.heading} </h1>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <textarea className="form-control" onChange={handleOnchange} rows="8" value={text} placeholder="Enter email"></textarea>
                    </div>
                    <button type="submit" onClick={handleupClick} className="btn btn-primary">Submit</button>
                  
                    <div className='container'>
                        <p>Yourwords {text.split(" ").length} Charecter {text.length}</p>
                    </div>

            </>
         )
}
