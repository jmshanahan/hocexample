import React from "react";
import StockList from "./components/StockList";
import UserList from "./components/UserList";
import Hoc from "./HOC";
import "./App.css";

const StocksData = [
  {
    id: 1,
    name: "TCS"
  },
  {
    id: 2,
    name: "Infosys"
  },
  {
    id: 3,
    name: "Reliance"
  }
];
const UsersData = [
  {
    id: 1,
    name: "Krunal"
  },
  {
    id: 2,
    name: "Ankit"
  },
  {
    id: 3,
    name: "Rushabh"
  }
];

const Stocks = Hoc(StockList, StocksData);

const Users = Hoc(UserList, UsersData);

function App() {
  return (
    <div className="App">
      <Stocks />
    </div>
  );
}
export default App;
