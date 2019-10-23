import React, { Component } from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";
import { Star, IceCream } from "../assets/icons";
import { history } from "../history";

const Wrapper = styled(Col)({
  border: "1px solid #048BA8",
  borderRadius: "3px",
  padding: 20,
  height: "100%",
  margin: 10
});

const IconWrapper = styled("div")({
  height: 30,
  marginRight: 10,
  position: "relative",
  svg: {
    height: 30,
    position: "absolute"
  }
});

export default class IcecreamItem extends Component {
  render() {
    const { name, yummyIndex } = this.props;

    return (
      <Wrapper xs={12} sm={6} md={4} onClick={() => history.push(`/${name}`)}>
        <Row middle="xs">
          <Col xs={2}>
            <IconWrapper>
              <IceCream />
            </IconWrapper>
          </Col>
          <Col xs={10}>
            <h3>{name.toUpperCase()}</h3>
          </Col>
        </Row>
        <Row middle="xs">
          <IconWrapper>
            {Array.from(new Array(yummyIndex), (i, index) => (
              <Star key={index} />
            ))}
          </IconWrapper>
        </Row>
      </Wrapper>
    );
  }
}
