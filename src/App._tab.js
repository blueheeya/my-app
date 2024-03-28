// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Button from '@mui/material/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tabNum,setTabNum] = useState(0);
  const [content,setContent] = useState([
    "1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ad?",
    "2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ad?",
    "3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ad?",
  ])
  const [modalView,setModalView] = useState(false)
  const ModalViewClick = ()=>{
    setModalView(!modalView);
  }
  return (
    <>
    <ul className='tabmenu'>
      <li className={`${tabNum ==0 ? "active" :null}`} onClick={()=>{setTabNum(0);}}>tab1</li>
      <li className={`${tabNum ==1 ? "active" :null}`} onClick={()=>{setTabNum(1);}}>tab2</li>
      <li className={`${tabNum ==2 ? "active" :null}`} onClick={()=>{setTabNum(2);}}>tab3</li>
    </ul>
    <div>{content[tabNum]}</div>
    <button onClick={ModalViewClick}>모달창을 열어랏</button>
    {modalView == true ? <div className='modals'>test</div>:null}

    </>
  );
}
export default App;