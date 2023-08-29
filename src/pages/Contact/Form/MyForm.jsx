import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";

import "./index.scss";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:8000";

  const sendEmail = async () => {
    let dataSend = {
      email: "juanpak12@gmail.com", // Your email address here
      subject: subject,
      message: `User Email: ${email}\n\n${message}`,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (res.status > 199 && res.status < 300) {
        alert("Send Successfully !");
      }
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      
    >
      <Stack spacing={4} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontFamily={'yatra one'} fontSize={"4xl"}>Vamos a Crear Juntos</Heading>
          <Text fontFamily={'yatra one'} fontSize={"20px"} color={"gray.600"}>
            Contactame ✌️
          </Text>
        </Stack>
        <Box 
          id="box-contact"
          rounded={"lg"}
          bg={useColorModeValue("azure", "azure")}
          p={8}
          borderRadius="10px" // Ajusta el valor según lo deseado
          boxShadow="md" // Agrega una sombra opcional para resaltar el borde
        >
          <Stack id="containerForms" spacing={4}>
            {/* <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Receiver's Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl> */}
            <FormControl id="user-email">
              <FormLabel>Your Email</FormLabel>
              <Input
                type="email"
                placeholder="Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Subject</FormLabel>
              <Input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                placeholder="Enter the subject here..."
              />
            </FormControl>
            <FormControl id="text">
              <FormLabel>Message</FormLabel>
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here..."
              />
            </FormControl>
            
            <Stack id="contButtom" spacing={10}>
              <Button
                id="buttomContact"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => sendEmail()}
              >
                Send Email
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}