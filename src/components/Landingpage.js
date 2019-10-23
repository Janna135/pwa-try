import React, { Component } from "react";
import { Grid, Row } from "react-styled-flexboxgrid";
import { icecreams } from "../constants/icecream";
import IcecreamItem from "./icecreamItem";

export default class Landingpage extends Component {
  render() {
    return (
      <Grid>
        <h1>This is a pwa testapp about icecream</h1>
        <p>Learn everything you need to know about your favorite icecream.</p>

        <Row>
          {icecreams.map(icecream => (
            <IcecreamItem
              key={icecream.name}
              name={icecream.name}
              yummyIndex={icecream.yummyIndex}
            />
          ))}
        </Row>
      </Grid>
    );
  }
}
