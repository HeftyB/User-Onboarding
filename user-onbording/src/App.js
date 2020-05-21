import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup"
import "./App.css";
import Forms from "./components/Forms";
import TeamMembers from "./components/TeamMembers";
import formSchema from "./components/formSchema";

const initialTeam = [
  {
  id: "",
  name: "Andrew Shields",
  email: "Andrew.Shields@SweetCo.com",
  passwd: "******",
  role: "Full-Stack Developer",
  tos: true
  },
]

const initialFormData = {
name: "",
email: "",
passwd: "",
role: "",
tos: false
}

const initialFormErrors = {
name: "",
email: "",
passwd: "",
role: "",
tos: "",
}

function App() {

  const initialDisabled = true;
  const [teamMembers, setteamMembers] = useState(initialTeam);
  const [formData, setformData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  


  const getData = () => {
    axios.get("https://reqres.in/api/users")
      .then(data => {
        setteamMembers(data.data.data)
        // debugger
      })
      // .then(data => {
      //   axios.get("https://reqres.in/api/users?page=2")
      //   .then(datas => {
      //     console.log(datas.data)
      //     console.log(teamMembers)
      //     debugger
      //     setteamMembers(...teamMembers, datas.data.data)
      //     console.log(teamMembers)
      //     debugger
      //   })
      //   .catch(err => {
      //     debugger
      //   })
      // })
      .catch(err => {
        debugger
      })
  }

  const sendData = newMember => {
    axios.post("https://reqres.in/api/users", newMember)
    .then(data => {
      setteamMembers([data.data, ...teamMembers])
      // debugger
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setformData(initialFormData)
    })
  }

  useEffect(() => {
    getData(); 
    },[]);

  useEffect(() => {
    formSchema.isValid(formData)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formData])

  const onInputChange = event => {
    const { name } = event.target
    const { value } = event.target

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""})
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })

    setformData({
      ...formData,
      [name]: value})
  }
  
  const onSubmit = event => {
    event.preventDefault()

    const newMember = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      passwd: formData.passwd,
      role: formData.role,
      tos: formData.tos,
    }
    sendData(newMember)
  }

  const onCheckboxChange = event => {
    const { name } = event.target
    const { checked } = event.target

    setformData({
      ...formData,
        [name]: checked,
      }   
    )
  }
  
  return (
    <div className="App">
      <div className="wrapper">
        <TeamMembers teamMembers={teamMembers}></TeamMembers>
        <Forms
          values={formData}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={formErrors}
          onCheckboxChange={onCheckboxChange}>
        </Forms>
      </div>
    </div>
  );
}

export default App;
