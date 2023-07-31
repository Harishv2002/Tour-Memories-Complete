import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from "react";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import AddEditTour from './pages/AddEditTour';
import SingleTour from './pages/SingleTour';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import TagTours from './pages/TagTours';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    
    // <GoogleOAuthProvider clientId='246338967249-9hoqb5if860dego1uvtm8ubb03oq7lin.apps.googleusercontent.com'>
      <BrowserRouter>
    <div className="App">
    <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/tours/search" element={<Home />} />
        <Route path="/tours/tag/:tag" element={<TagTours />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/addTour' element={<PrivateRoute><AddEditTour/></PrivateRoute>}/>
        <Route path='/editTour/:id' element={<PrivateRoute><AddEditTour/></PrivateRoute>}/>
        <Route path='/tour/:id' element={<SingleTour/>}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path='*' element={<h2 style={{margin:"200px"}}>404 Error Page Not Found</h2>}/>
      </Routes>
    </div>
    </BrowserRouter>
    // </GoogleOAuthProvider>
    
  );
}

export default App;
