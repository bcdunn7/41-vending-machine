import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Snack from "./Snack";
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";


function App() {
  const [snacks, setSnacks] = useState(['apple', 'soda', 'candy', 'coca cola', 'chips', 'chocolate'])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar snacks={snacks}/>
        <Route exact path="/">
          <VendingMachine snacks={snacks}/>
        </Route>
        {snacks.map(s => {
          return (
            <Route exact path={`/${s}`}>
              <Snack name={s} />
            </Route>
          )
        })}
      </BrowserRouter>
    </div>
  );
}

export default App;
