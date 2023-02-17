import { Box, Typography, Button } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

function SignUp() {
  const [userData, setUserdata] = useState(initialValues);
  const navigate = useNavigate();

  const handleUserData = ((e) => {

    const { name, value } = e.target;
    setUserdata({
      ...userData,
      [name]: value,
    });
    // console.log(userData);
  })
  const sendDataToHome = (userObject) => {

    console.log(userObject);
    navigate("/home", {
      state: userObject,
    })
    
  }

    return (
    <>
      <Box className='mainBox'>
        <Typography variant='h5' >Sign up</Typography>
        <Box className='p-5 insideMainBox'>
          <Box> <input placeholder='first name' name="firstName" value={userData.firstName} onChange={handleUserData} /> </Box>
          <Box> <input placeholder='last name' name="lastName" value={userData.lastName} onChange={handleUserData} /> </Box>
          <Box> <input placeholder='email' name="email" value={userData.email} onChange={handleUserData} /> </Box>
          <Box> <input placeholder='password' name="password" type="password"value={userData.password} onChange={handleUserData} /> </Box>
          <Box> <input placeholder='confirmed password'type="password" name="confirmedPassword" value={userData.confirmedPassword} onChange={handleUserData} /> </Box>
          <Box><Button variant='contained' fullWidth className='mt-4' onClick={()=>{sendDataToHome(userData)}} > Sign Up</Button></Box>
        </Box>

      </Box>
    </>
  )
}

export default SignUp

// import React, { useState } from "react";

// const initialValues = {
//   company: "",
//   position: "",
//   link: "",
//   date: "",
//   note: "",
// };

// function Form() {
//   const [values, setValues] = useState(initialValues);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   return (
//         <form>
//           <input
//             value={values.company}
//             onChange={handleInputChange}
//             name="company"
//             label="Company"
//           />
//           <input
//             value={values.position}
//             onChange={handleInputChange}
//             name="position"
//             label="Job Title"
//           />
//            // ... Rest of the input fields
//           <button type="submit"> Submit </button>
//         </form>
//   );
// }

// export default Form;