import React, { useState } from "react";
import "../app2.css";
import {
  Box,
  Heading,
  Text,
  Divider,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
} from "@chakra-ui/core";

function Note(props) {
  const [name, setName] = useState(props.name);
  const [body, setBody] = useState(props.body);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const editNoteHandler = (event) => {
    setBody(event.target.value);
    props.handleBodyChange(event.target.value);
  };

  return (
    <Box
      className="Note"
      marginRight="30px"
      marginLeft="30px"
      marginTop="30px"
      w="90%"
    >
      <Flex>
        <Heading>{props.name}</Heading>
        <Button
          variantColor="blue"
          variant="solid"
          style={{ marginLeft: "auto" }}
          onClick={onOpen}
        >
          Edit Note
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.name}</ModalHeader>
            <ModalCloseButton />
            <Textarea value={body} onChange={editNoteHandler} height="200px" />
            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Save & Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button
          variantColor="red"
          variant="solid"
          marginLeft="4px"
          value={props.name}
          onClick={(event) => props.clickedDelete(event)}
        >
          Delete Note
        </Button>
      </Flex>
      <Text fontSize="md" color="grey">
        {"Last updated: " + props.date}
      </Text>
      <Divider />
      <Text fontSize="lg">{props.body}</Text>
    </Box>
  );
}

export default Note;
