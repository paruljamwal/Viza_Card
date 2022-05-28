import React from "react";
import { Container, Flex } from "@chakra-ui/react";

import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
function App() {
  return (
    <Container maxWidth="container.lg">
      <Flex height="100vh" color="black" paddingY={20}>
        <Card></Card>
        <Form></Form>
      </Flex>
    </Container>
  );
}

export default App;
