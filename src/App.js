// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tabMenu,setTabMenu] = useState(0);
  const [content,setContent] = useState([
    "1. 첫페이지를 불러옵니다 얍!",
    "2. 둘째페이지를 불러옵니다 얍!",
    "3. 셋째 페이지를 불러옵니다 얍얍!"
  ]);
  const [modalView,setModalView] = useState(false)
  const modalClick = ()=>{
    setModalView(true);
  }
  return (
    <>
    <ul className='tabmenu'>
      <li className={`${tabMenu == 0 ? "active" : null}`} onClick={()=>{setTabMenu(0);}}>tab1</li>
      <li className={`${tabMenu == 1 ? "active" : null}`} onClick={()=>{setTabMenu(1);}}>tab2</li>
      <li className={`${tabMenu == 2 ? "active" : null}`} onClick={()=>{setTabMenu(2);}}>tab3</li>
    </ul>
    <div>{content[tabMenu]}</div>
    <button className='primary' onClick={modalClick}>모달창을 열어랏</button>
    {modalView == true ? <div className='madals'>모달 테스트</div>:null}
    </>
  );
}
export default App;