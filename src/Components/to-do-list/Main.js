import React, { useState } from 'react'
import './Main.css'
import DeleteIcon from '@mui/icons-material/Delete';
function Main() {
    const [inputState, setInputState] = useState('');
    const [arr, setArr] = useState([]);
    function handleInputChnange(e) {
        setInputState(e.target.value);

    }
    function handleButtonClick() {
        console.log(arr)
        setArr((prevState) => {
            return [...prevState, inputState]
        });
        setInputState('');
    }
    function handleSpanClick(e) {
        console.log(e.target.value);
    }
    return (
        <div className='main-container'>
            <h1>To Do List</h1>
            <div className='menu-container'>
                <input
                    onChange={handleInputChnange}
                    value={inputState}
                    placeholder='Enter your task'
                />
                {inputState && <button onClick={handleButtonClick}>+</button>}
            </div>
            <div className='data-div'>{
                arr.map((item, index) => {
                    return <p value={item}>{index + 1}.{item}<span value={index} onClick={handleSpanClick} classname='valueof' id={`valueid${index}`} ><DeleteIcon /></span></p>
                })
            }</div>
            <br></br>
            <br></br>
            <br></br>
            <h3>Developed by Mehul</h3>

        </div>
    )
}

export default Main;