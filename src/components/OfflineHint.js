import React, { useState } from "react";
import styled from "styled-components";
import { TimesCircle } from "../assets/icons";

const Hint = styled("div")({
  border: "1px dotted teal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px auto",
  padding: 20,
  width: "fit-content"
});

const Button = styled("div")({
  backgroundColor: "teal",
  borderRadius: 3,
  color: "white",
  textTransform: "uppercase",
  padding: 8
});

export const OfflineHint = () => {
  const [display, toggleDisplay] = useState(true);
  return (
    <>
      {display && (
        <Hint>
          <TimesCircle height={30} width={30} style={{ marginRight: 10 }} />
          <p>
            Hey! Du bist gerade offline. Diese Seite funktioniert trotzdem. Ist
            das nicht toll?
          </p>
          <Button onClick={() => toggleDisplay(!display)}>Ganz toll</Button>
        </Hint>
      )}
    </>
  );
};
