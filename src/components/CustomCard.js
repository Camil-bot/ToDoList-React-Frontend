import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle
} from "reactstrap";
import axios from "axios";

function CustomCard(props) {
  const [isSolved, setIsSolved] = useState(false);

  function setAsSolved() {
    setIsSolved(!isSolved); //aci eram
  }

  return (
    <>
      <Card
        style={{
          width: "18rem"
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>Aici trebuia sa fie descriere</CardText>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-sm-6  ">
                <Button>Delete</Button>
              </div>
              <div className="col-sm-6 ">
                <Button
                  onClick={() => setIsSolved(!isSolved)}
                  color={isSolved ? "success" : "danger"}
                >
                  {isSolved ? "Solved" : "Unsolved"}
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default CustomCard;
