import React, { useState } from "react";
import "../app2.css";
import { Box } from "@chakra-ui/core";

function SideBarNote(props) {
  const [name, setName] = useState(props.name);
  const [date, setDate] = useState(props.date);
  return (
    <Box className="SideBarNote" align="center" value={props.name}>
      <div align="left">
        <header className="header-text">{name}</header>
        <p className="body-text">Last updated: {props.date}</p>
      </div>
    </Box>
  );
}

export default SideBarNote;
