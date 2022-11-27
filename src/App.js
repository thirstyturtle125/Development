import "./App.css";
import { useState } from "react";
import FilteredList from "./Components/FilteredList";
import { candyData } from "./Data/CandyData";
import Calculator from "./Components/Calculator";

function App() {
  // state variables
  const [brand, setBrand] = useState("All");
  const [type, setType] = useState("All");
  const [cals, setCals] = useState("Select");
  const [sugar, setSugar] = useState("Select");
  const [satfat, setSatFat] = useState("Select");
  const [candies, setCandies] = useState({});

  // Header Styles
  const headerStyle = {
    textAlign: "center",
  };
  const textStyle = {
    color: "#FFF",
  };

  // Changes the brand filter category
  const changeBrandFilter = (filterName) => {
    console.log(filterName);
    console.log(brand);
    setBrand(filterName);
  };
  // Changes the type filter category
  const changeTypeFilter = (filterName) => {
    setType(filterName);
  };
  // Changes the calories sort category
  const changeCaloriesSort = (sortName) => {
    // change others back to default to avoid confusion
    setSugar("Select");
    setSatFat("Select");
    setCals(sortName);
  };
  // Changes the sugar sort category
  const changeSugarSort = (sortName) => {
    setCals("Select");
    setSatFat("Select");
    setSugar(sortName);
  };
  // Changes the saturated fat sort category
  const changeSatFatSort = (sortName) => {
    setSugar("Select");
    setCals("Select");
    setSatFat(sortName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={headerStyle} className="pt-4 pb-4">
          <h1 style={textStyle}>UIUX Candy Nutritional Calculator</h1>
        </div>
      </header>
      <div className="d-flex flex-row">
        <FilteredList
          data={candyData}
          setCandies={setCandies}
          selectedBrand={brand}
          changeBrandFilter={changeBrandFilter}
          selectedType={type}
          changeTypeFilter={changeTypeFilter}
          cals={cals}
          changeCaloriesSort={changeCaloriesSort}
          sugar={sugar}
          changeSugarSort={changeSugarSort}
          satfat={satfat}
          changeSatFatSort={changeSatFatSort}
        />
        <Calculator
          candyData={candyData}
          candies={candies}
          setCandies={setCandies}
        />
      </div>
    </div>
  );
}

export default App;
