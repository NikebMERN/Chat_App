import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Niko Private Chat</C.Title>
      <C.Info>
        Choose profile to chat with it 
      </C.Info>
    </C.Container>
  );
};

export default Default;
