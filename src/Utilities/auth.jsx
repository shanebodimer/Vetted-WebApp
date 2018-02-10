import React from 'react'
import axios from 'axios'

// Login
export const login = (email, password) =>
  axios
    .post(
      `https://k2.att.com/actions/login.php`,
      {
        email: email,
        password: password
      },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(function (response) {
      // TODO
    })
    .catch(function (error) {
      // TODO
      return error
    })

// Login
export const signup = (name, email, password) =>
  axios
    .post(
      `https://k2.att.com/actions/login.php`,
      {
        name: name,
        email: email,
        password: password
      },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(function (response) {
    // TODO
    })
    .catch(function (error) {
    // TODO
      return error
    })
