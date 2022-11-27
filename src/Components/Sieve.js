import React from "react";
import Container from "react-bootstrap/Container";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Sieve = (props) => {
  return (
    <>
      <Container className="d-flex flex-md-row flex-lg-row flex-xl-row flex-column justify-content-center my-4 mx-0">
        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Filter by type:</span>
          <DropdownButton
            variant="success"
            onSelect={props.changeTypeFilter}
            title={props.type}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Non-chocolate">
              Non-chocolate
            </Dropdown.Item>
            <Dropdown.Item eventKey="Chocolate">Chocolate</Dropdown.Item>
            <Dropdown.Item eventKey="Chocolate w/ Nuts">
              Chocolate w/ Nuts
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Filter by company: </span>
          <DropdownButton
            variant="primary"
            onSelect={props.changeBrandFilter}
            title={props.brand}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Hershey">Hershey</Dropdown.Item>
            <Dropdown.Item eventKey="Mars">Mars</Dropdown.Item>
            <Dropdown.Item eventKey="Nestle">Nestle</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Sort by calories: </span>
          <DropdownButton
            variant="secondary"
            onSelect={props.changeCaloriesSort}
            title={props.cals}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="Select">Select</Dropdown.Item>
            <Dropdown.Item eventKey="Low to High">Low to High</Dropdown.Item>
            <Dropdown.Item eventKey="High to Low">High to Low</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Sort by sugar: </span>
          <DropdownButton
            variant="danger"
            onSelect={props.changeSugarSort}
            title={props.sugar}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="Select">Select</Dropdown.Item>
            <Dropdown.Item eventKey="Low to High">Low to High</Dropdown.Item>
            <Dropdown.Item eventKey="High to Low">High to Low</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Sort by saturated fat: </span>
          <DropdownButton
            variant="warning"
            onSelect={props.changeSatFatSort}
            title={props.satfat}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="Select">Select</Dropdown.Item>
            <Dropdown.Item eventKey="Low to High">Low to High</Dropdown.Item>
            <Dropdown.Item eventKey="High to Low">High to Low</Dropdown.Item>
          </DropdownButton>
        </div>
      </Container>
    </>
  );
};

export default Sieve;
