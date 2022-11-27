import React from "react";
import Container from "react-bootstrap/Container";
import CalculatorItem from "./CalculatorItem";

const Calculator = (props) => {
  return (
    <Container
      style={{ backgroundColor: "#fff", color: "#000", width: "33%" }}
      className="pt-4"
    >
      <h2 className="mb-4">Nutritional Calculator</h2>
      {Object.entries(props.candies).length === 0 ? (
        <p>List of candies is empty.</p>
      ) : (
        <>
          <p>
            Total Calories ={" "}
            {(function () {
              let total = 0;
              Object.entries(props.candies).forEach(([index, quantity]) => {
                const candy = props.candyData[Number(index)];
                total += candy.calories * quantity;
              });
              return total;
            })()}
          </p>
          <p>
            Total Sugar ={" "}
            {(function () {
              let total = 0;
              Object.entries(props.candies).forEach(([index, quantity]) => {
                const candy = props.candyData[Number(index)];
                total += candy.sugar * quantity;
              });
              return total;
            })()}
            g
          </p>
          <p>
            Total Saturated Fat ={" "}
            {(function () {
              let total = 0;
              Object.entries(props.candies).forEach(([index, quantity]) => {
                const candy = props.candyData[Number(index)];
                total += candy.satfat * quantity;
              });
              return total;
            })()}
            g
          </p>
          {Object.entries(props.candies).map(([index, quantity]) => {
            const candy = props.candyData[Number(index)];
            return (
              <CalculatorItem
                quantity={quantity}
                key={index}
                candy={candy}
                setCandies={props.setCandies}
              />
            );
          })}
        </>
      )}
    </Container>
  );
};

export default Calculator;
