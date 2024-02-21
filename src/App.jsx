import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';
function App(props) {
  useEffect(() => {
    props.getUserAuth()
   
}, [])
  
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      
    </>
  );
}
const mapStateToProps=(state)=>{
  return{

  }
}
const mapDispatchtoProps=(dispatch)=>({
  getUserAuth: dispatch(getUserAuth)
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
