import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./components/AddItem/AddItem";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import MyItems from "./components/MyItems/MyItems";
import UpdateItem from "./components/UpdateItem/UpdateItem";

function App() {
  return (
    <div >

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/manageinventory" element={<ManageInventory />}></Route>
          <Route path="/additem" element={<AddItem/>}></Route>
          <Route path="/myitems" element={<MyItems/>}></Route>
          <Route path="/updateitem" element={<UpdateItem />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
