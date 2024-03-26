// import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const han = "test입니다.";
  const hancss = {color:"#000",fontSize:"2em"}
  function onmyClick(){
    console.log("test")
  }
  return (
    <>
      <h3 className='title' style={hancss}>{han}</h3>
      <button className='MuiButton-containedInfo' onClick={onmyClick}>클릭</button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <div className="container">
        <div className='row'>
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
          <div className='col'>4</div>
          <div className='col'>5</div>
          <div className='col'>6</div>
        </div>
      </div>
    </>
  );
}
export default App;