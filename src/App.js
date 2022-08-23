import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import AddBlog from "./components/AddBlog/AddBlog";
import AddItem from "./components/AddItem/AddItem";
import BLogs from "./components/Blogs/BLogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import MyItems from "./components/MyItems/MyItems";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";
import StockOutItems from "./components/StockOutItems/StockOutItems";
import UpdateItem from "./components/UpdateItem/UpdateItem";

function App() {
  return (
    <div >

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/manageinventory" element={<PrivateRoute><ManageInventory /></PrivateRoute>}></Route>
          <Route path="/additem" element={<PrivateRoute><AddItem/></PrivateRoute>}></Route>
          <Route path="/myitems" element={<PrivateRoute><MyItems/></PrivateRoute>}></Route>
          <Route path="/updateitem/:updateid" element={<PrivateRoute><UpdateItem /></PrivateRoute>}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/blogs" element={<BLogs />}></Route>
          <Route path="/stockoutitems" element={<PrivateRoute><StockOutItems /></PrivateRoute>}></Route>
          <Route path="/addblog" element={<PrivateRoute><AddBlog /></PrivateRoute>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
