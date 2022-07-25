import React from "react";
import {Text} from '@chakra-ui/react';
{/*// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import {
//   FormErrorMessage,
//   FormLabel,
//   FormControl,
//   Input,
//   Button,
//   Text,
//   InputRightElement,
//   InputGroup,
// } from "@chakra-ui/react";
// import "@fontsource/raleway/400.css";
// import "@fontsource/open-sans/700.css";

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 0);
    });
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name} m='20px 200px' w='50%'>
        <Text fontSize='xl'> Register {"\n\n"} </Text>
        <FormLabel htmlFor='firstName' p='5px 0px' mt='10px'>
          First name
        </FormLabel>
        <Input
          id='firstName'
          placeholder='First name'
          isRequired
          {...register("firstName")}
        />

        <FormLabel htmlFor='lastName' p='5px 0px' mt='10px'>
          Last name
        </FormLabel>
        <Input
          id='lastName'
          placeholder='Last name'
          isRequired
          {...register("lastName")}
        />

        <FormLabel htmlFor='email' p='5px 0px' mt='10px'>
          Email
        </FormLabel>
        <Input
          id='email'
          placeholder='Email'
          isRequired
          onChange={handleChange}
          value={email}
        />
        <Text>{error}</Text>

        <FormLabel htmlFor='password' p='5px 0px' mt='10px'>
          Password
        </FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            id='password'
            placeholder='Password'
            isRequired
            {...register("name", {
              minLength: { value: 8, message: "Minimum length should be 8" },
            })}
          />

          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Text>{errors.name && errors.name.message}</Text>

        <FormLabel type='password' p='5px 0px' mt='10px'>
          Confirm password
        </FormLabel>
        <Input
          type='password'
          id='confirmPassword'
          placeholder='Please confirm your password'
          isRequired
          {...register("confirmPassword")}
        />
        <Text>{error}</Text>
      </FormControl>

      <Button
        mt={4}
        colorScheme='teal'
        isLoading={isSubmitting}
        type='submit'
        m='20px 200px'
      >
        Submit
      </Button>
    </form>
  );
}
export default Register();
*/}


export function Register() {
  return (
    <>
      <Text fontSize='larger'>Register</Text>
       
   </>
  );
 }
  
 export default Register;
