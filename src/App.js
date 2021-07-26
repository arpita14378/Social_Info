import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'


function App() {
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [occupation, setOccupation] = useState('')
  const headers = {
    "Access-Control-Allow-Origin": "*"

  }
  return (
    <section className="cardSection">
      <Card className="card" variant="outlined">
        <CardContent>
          <h2 align="center">CRUD Operation Page</h2>
          <TextField
            required
            id="filled-required"
            variant="filled"
            label="Email Id"
            className="textBox"
            onChange={
              (event) => {
                console.log("EmailId", event.target.value)
                setEmailId(event.target.value)
              }
            }
          />
          <br />
          <br />
          <TextField
            required
            id="filled-required"
            variant="filled"
            label="Password"
            className="textBox"
            onChange={
              (event) => {
                console.log("Password", event.target.value)

                setPassword(event.target.value)
              }
            }
          />
          <br />
          <br />
          <TextField
            required
            id="filled-required"
            variant="filled"
            label="Name"
            className="textBox"
            onChange={
              (event) => {
                console.log("Name", event.target.value)

                setName(event.target.value)
              }
            }
          />
          <br />
          <br />
          <TextField
            required
            id="filled-required"
            variant="filled"
            label="Age"
            className="textBox"
            onChange={
              (event) => {
                console.log("Age", event.target.value)

                setAge(event.target.value)
              }
            }
          />
          <br />
          <br />
          <TextField
            required
            id="filled-required"
            variant="filled"
            label="Occupation"
            className="textBox"
            onChange={
              (event) => {
                console.log("Occupation", event.target.value)

                setOccupation(event.target.value)
              }
            }
          />
          <br />
          <br />
          <Button variant="outlined" size="medium" color="primary" className="button" onClick={
            () => {
              console.log("I am ready to call api")
              const url = 'http://localhost:5000';
              axios.defaults.crossDomain = true
              axios.get(url + "/read", { "Access-Control-Allow-Origin": "*" }).then(resp => {
                console.log("Response for READ", resp)
                //use res to update current state
              })
            }
          }>
            Read
          </Button>
          <Button variant="outlined" size="medium" color="primary" className="button" onClick={
            () => {
              console.log("I am ready to call api")
              console.log(emailId)
              console.log(password)
              console.log(name)
              console.log(age)
              console.log(occupation)
              const url = 'http://localhost:5000';
              axios.defaults.crossDomain = true
              axios.post(url + "/create", {
              mailId: emailId, password: password, name: name, age: age, occupation: occupation, headers: {
                  "Access-Control-Allow-Origin": "*"
                }
              }).then((resp) => {
                console.log("RESPOSE for CREATE", resp)
              })
            }
          }>
            create
          </Button>
          <Button variant="outlined" size="medium" color="primary" className="button" onClick={
            () => {
              console.log("I am ready to call api")
              console.log(emailId)
              console.log(password)
              console.log(name)
              console.log(age)
              console.log(occupation)
              const url = 'http://localhost:5000';
              axios.defaults.crossDomain = true
              axios.put(url + "/update", {
                emailId: emailId, password: password, name: name, age: age, occupation: occupation, headers: {
                  "Access-Control-Allow-Origin": "*"
                }
              }).then((resp) => {
                console.log("RESPOSE for UPDATE", resp)
              })
            }
          }>
            Update
          </Button>
          <Button variant="outlined" size="medium" color="primary" className="button" onClick={
            () => {
              console.log("I am ready to call api")
              
              axios.defaults.crossDomain = true
              axios.delete("http://localhost:5000/delete",{data: {emailId}},
              {
                  headers: {
                      "Content-Type": "application/json"
                  }
              }
              ).then((resp) => {
                console.log("RESPOSE for DELETE", resp)
              })
            }
          }>
            Delete
          </Button>


        </CardContent>
      </Card>

    </section>


  );
}

export default App;
