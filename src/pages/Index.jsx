// Complete the Index page component for a Todo App
import { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, IconButton, useColorModeValue, Heading, Container } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Container maxW="container.md" p={5}>
      <VStack spacing={8}>
        <Heading mb={6}>Todo App</Heading>
        <HStack>
          <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="blue" aria-label="Add todo" />
        </HStack>
        <VStack spacing={4} align="stretch">
          {todos.map((todo) => (
            <HStack key={todo.id} p={4} bg={useColorModeValue("gray.100", "gray.700")} borderRadius="md">
              <Text flex={1}>{todo.text}</Text>
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(todo.id)} colorScheme="red" aria-label="Delete todo" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
