// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Button from '@mui/material/Button';

function App() {
  const Text = "testtest";
  const styleText = {fontSize:"2em"};
  const btnClick = function(){
    console.log("test입니다.");
  };
  const [title,setTitle] = useState(["서울","대구","부산"]);
  const changeData=()=>{
    const newArray = [...title]
    newArray[0] = "마계인천"
    setTitle(newArray);
  };

  const [num,setNum] = useState(0);
  const changeNum=()=>{
    setNum(1);
  }
  const zeroNum=()=>{
    setNum(0);
  }
  const [myNum,setMyNum] = useState(0);
  return (
    <>{num}
      <div className='text' style={styleText}>
      <button onClick={changeData}>클릭</button></div>
      <button onClick={changeNum}>클릭</button>
      <button onClick={zeroNum}>클릭</button>
      <div>{title[0]}{myNum} <span onClick={()=>{setMyNum(myNum +1)}}>♥</span></div>
      
    </>
  );
}
export default App;