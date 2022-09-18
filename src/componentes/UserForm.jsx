import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";


const UserForm = ({ getUsers, selectUser, update, deselect, Alert }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (selectUser) {

      update(data)
      Alert("update")
    } else {
      axios.post("https://users-crud1.herokuapp.com/users/", data)
        .then(getUsers)
        .catch(error => { console.log(error.response) })
      Alert("new")
    }
    clear()
  }

  useEffect(() => {
    if (selectUser) {
      reset(selectUser)
    }
  }, [selectUser]);

  const clear = (selectUser) => {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: ""
    })
    deselect()
  }

  return (
    <>
      <div className="grid-second">
        <h1>Users Form</h1>
        <form onSubmit={handleSubmit(submit)} className="form">

          <div className="input-container">
            <input type="text" id="first_name" {...register("first_name")} placeholder="Name" />
            <input type="text" id="last_name" {...register("last_name")} placeholder="LastName" />
          </div>


          <div className="input-container">
            <input type="email" id="email" {...register("email")} placeholder="Email" />
          </div>

          <div className="input-container">
            <input type="password" id="password" {...register("password")} placeholder="Password" />
          </div>

          <div className="input-container">
            <input type="date" id="birthday" {...register("birthday")} />
          </div>

          <button className="btn">{selectUser ? "Update" : "Submit"}</button>

          <button type="button" className="btn" onClick={clear}>Clear</button>

        </form>

      </div>
    </>
  );
}

export default UserForm;