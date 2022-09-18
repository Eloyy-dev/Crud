import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

const List = ({ Users, selectUser, deleteUser }) => {
  return (
    <>
      <div className="grid-first">
        <h1>Lista</h1>
        <div className="list-cards">
          {
            Users.map(user => (
              <div className="card-user" key={user.id}>
                <div className="Info-user">
                  <div className="Name">{user.first_name} {user.last_name}</div>
                  <div className="Email">{user.email}</div>
                  <div className="Birthday">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gift" width="24" height="24" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin={"round"}>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="3" y="8" width="18" height="4" rx="1" />
                      <line x1="12" y1="8" x2="12" y2="21" />
                      <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                      <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                    </svg>{user.birthday}</div>
                </div>
                <div className="container-btn">
                  <button onClick={() => deleteUser(user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="#FF0000" fill="none" strokeLlinecap="round" strokeLinejoin={"round"}>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg></button>
                  <button onClick={() => selectUser(user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin={"round"}>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg></button>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </>
  );
}

export default List;