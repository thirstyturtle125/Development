import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Candy = (props) => {
  const imgPath = "./assets/" + props.candyProperties.imageName;
  const cardStyle = {
    textAlign: "center",
    height: "100%",
  };
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Img variant="top" src={imgPath}></Card.Img>
        <Card.Title>
          {" "}
          {props.candyProperties.name} ({props.candyProperties.company})
        </Card.Title>
        <Card.Text>
          <span>Type: {props.candyProperties.type}</span>
          <br />
          <span>Serving Size: {props.candyProperties.serving}</span>
          <br />
          <span>Calories: {props.candyProperties.calories}</span>
          <br />
          <span>Sugar: {props.candyProperties.sugar}g</span>
          <br />
          <span>Saturated Fat: {props.candyProperties.satfat}g</span>
        </Card.Text>
        <Button
          onClick={() => {
            props.setCandies((prevCandies) => {
              const idx = props.candyProperties.id - 1;
              const newCandies = { ...prevCandies };
              newCandies[idx] = (newCandies[idx] || 0) + 1;
              return newCandies;
            });
          }}
          variant="primary"
        >
          Add to Calculator
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Candy;
