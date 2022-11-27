import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Candy from "./Candy";
import Sieve from "./Sieve";
import { Button } from "react-bootstrap";

function FilteredList(props) {
  // state variables
  const [displayedData, setDisplayedData] = useState(props.data);

  // used to update list of candies displayed
  const updateList = () => {
    let localData = props.data;

    // type filter
    localData = localData.filter((candy) => {
      return props.selectedType === "All" || candy.type === props.selectedType;
    });

    // brand filter
    localData = localData.filter((candy) => {
      return (
        props.selectedBrand === "All" || candy.company === props.selectedBrand
      );
    });

    // sort by calories
    if (props.cals !== "Select") {
      let mult = props.cals !== "High to Low" ? 1 : -1;
      localData.sort((candyA, candyB) => {
        if (candyA.calories < candyB.calories) {
          return -1 * mult;
        } else if (candyA.calories > candyB.calories) {
          return 1 * mult;
        } else {
          return 0;
        }
      });
      console.log(localData);
    }

    // sort by sugar
    if (props.sugar !== "Select") {
      let mult = props.sugar !== "High to Low" ? 1 : -1;
      localData.sort((candyA, candyB) => {
        if (candyA.sugar < candyB.sugar) {
          return -1 * mult;
        } else if (candyA.sugar > candyB.sugar) {
          return 1 * mult;
        } else {
          return 0;
        }
      });
    }

    // sort by saturated fat
    if (props.satfat !== "Select") {
      let mult = props.satfat !== "High to Low" ? 1 : -1;
      localData.sort((candyA, candyB) => {
        if (candyA.satfat < candyB.satfat) {
          return -1 * mult;
        } else if (candyA.satfat > candyB.satfat) {
          return 1 * mult;
        } else {
          return 0;
        }
      });
    }
    setDisplayedData(localData);
  };

  useEffect(() => {
    updateList();
  });

  return (
    <Container
      style={{ backgroundColor: "#fff", color: "#000" }}
      className="p-4"
    >
      <div className="d-flex flex-row justify-content-center">
        <h1 style={{ position: "relative", left: "3rem" }}>Candies</h1>
        <Button
          variant="danger"
          size="sm"
          style={{ position: "relative", left: "25rem" }}
          onClick={() => {
            props.changeBrandFilter("All");
            props.changeTypeFilter("All");
            props.changeCaloriesSort("Select");
            props.changeSugarSort("Select");
            props.changeSatFatSort("Select");
          }}
        >
          Reset All
        </Button>
      </div>
      <Sieve
        brand={props.selectedBrand}
        changeBrandFilter={props.changeBrandFilter}
        type={props.selectedType}
        changeTypeFilter={props.changeTypeFilter}
        cals={props.cals}
        changeCaloriesSort={props.changeCaloriesSort}
        sugar={props.sugar}
        changeSugarSort={props.changeSugarSort}
        satfat={props.satfat}
        changeSatFatSort={props.changeSatFatSort}
      />
      <Row className="d-flex flex-wrap">
        {displayedData.map((candy) => (
          <Col md={4} sm={6} key={candy.id} className="my-2">
            <Candy candyProperties={candy} setCandies={props.setCandies} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FilteredList;
