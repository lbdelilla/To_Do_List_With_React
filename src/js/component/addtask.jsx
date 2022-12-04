import React, {useState} from "react";
import { useEffect } from "react/cjs/react.production.min";




const AddTask = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [toDoList, setToDoList] = React.useState(['Eat', 'Sleep', 'Repeat']);
    

   {/*useEffect(() => {
       
   });*/}
    function tasker () {
        if(inputValue.length != 0){
            setToDoList([...toDoList, inputValue]);
            setInputValue('')
        }
    }
    
    const deleteTask = (index) => {
        let deletedToDo = [...toDoList];
        deletedToDo.splice (index, 1);

        setToDoList(deletedToDo);
    }

    return(
        <div className="taskManager text-center">	
            <div className="otrodiv">	
                <div className="form text-center">
                    <input value={inputValue} type="text" onKeyPress={(e)=>e.key=="Enter" ? tasker() : null} onChange= {(e) => setInputValue(e.target.value)} />
                    <button className="button-1" role="button" type="submit" onClick={()=>tasker()}> Add </button>
                </div>
                <div className="content">
                    <ul>
                        {toDoList.map((task, index)=> {
                        return(
                        <li  key={index}> {task} <i onClick={()=>deleteTask(index)} className="fa-solid fa-xmark"></i></li>)})}
                    </ul>		
                </div>	
            </div>
            <span>
			    {toDoList.length === 0 ? "No pending tasks":  `${toDoList.length} pending tasks`}
            </span>			
        </div>
    );
};


export default AddTask;

/*onClick={NewTask(value)}*/
/*const validateInput = () => {
        if(value==='')
            alert("You must have something to do!")
        else ('')
    }    */