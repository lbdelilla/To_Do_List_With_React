import React, {useState} from "react";




const AddTask = () => {
    const [value, setValue] = React.useState('');
    const [list, setList] = React.useState('');

    const NewTask = (task) => {
        
    }
    
   
    return(
        <div className=" text-center">
			<input type="text" onChange={e => setValue (e.target.value)} ></input>
			<button className="button-1" role="button" type="submit"> Add </button>
			<hr className="line"/>
        </div>

    );
};


export default AddTask;

{/*onClick={NewTask(value)}*/}
{/*const validateInput = () => {
        if(value==='')
            alert("You must have something to do!")
        else ('')
    }    */}