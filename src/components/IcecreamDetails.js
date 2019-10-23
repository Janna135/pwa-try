import React, { Component } from "react";
import { icecreams } from "../constants/icecream";
import { withRouter } from "react-router";
import {Back} from "../assets/icons";
import styled from "styled-components";

const Wrapper = styled("div")({
    padding: 20,
})

const IconWrapper = styled("div")({
    width: 30,
    height: 30,
})

const Headline = styled("h1")({
    textTransform: "capitalize",
    color: "teal"
})

class IcecreamDetailsCore extends Component {
  render() {
    const { match, history} = this.props;
    const icecream = icecreams.find(
      icecream => icecream.name === match.params.id
    );
    return (
      <Wrapper>
        <IconWrapper onClick={() => history.goBack()}>
            <Back/>
        </IconWrapper>
        <Headline>{icecream.name}</Headline>
      </Wrapper>
    );
  }
}

export const IcecreamDetails = withRouter(IcecreamDetailsCore);
