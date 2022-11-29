import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle
} from "reactstrap";

function CustomCard(props) {
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
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
}

export default CustomCard;
