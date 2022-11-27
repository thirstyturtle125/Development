import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CalculatorItem = (props) => {
  return (
    <Container
      style={{
        backgroundColor: "#fff",
        color: "#000",
        border: "solid",
        borderRadius: "10px",
      }}
      className="p-1 mt-3"
    >
      <p>
        {props.quantity} x {props.candy.name}
      </p>
      <div className="d-flex flex-row justify-content-around">
        <Button
          onClick={() => {
            props.setCandies((prevCandies) => {
              const idx = props.candy.id - 1;
              let newCandies = { ...prevCandies };
              if (props.quantity > 1) {
                const quantity = props.quantity - 1;
                newCandies[idx] = quantity;
              } else {
                delete newCandies[idx];
              }
              return newCandies;
            });
          }}
          variant="warning"
        >
          Remove 1
        </Button>
        <Button
          onClick={() => {
            props.setCandies((prevCandies) => {
              const idx = props.candy.id - 1;
              let newCandies = { ...prevCandies };
              delete newCandies[idx];
              return newCandies;
            });
          }}
          variant="danger"
        >
          Remove All
        </Button>
      </div>
    </Container>
  );
};

export default CalculatorItem;
