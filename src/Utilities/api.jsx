import React from 'react'
import axios from 'axios'

// If no location stored
if (!localStorage.getItem('state')) {
  // Get position, call function
  navigator.geolocation.getCurrentPosition(showPosition)

  // Get state from position
  function showPosition (position) {
    var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude + ',' + position.coords.longitude}&key=AIzaSyBWeMU1MHTGjl4QKTW7cUPZHOvXd5_zkfk`
    var method = 'GET'
    var shouldBeAsync = true
    var request = new XMLHttpRequest()
    request.open(method, url, shouldBeAsync)
    request.send()

    // Execute on load and store
    request.onload = function () {
      var data = JSON.parse(request.responseText)
      localStorage.setItem('state', data.results[0].address_components[5].short_name)
    }
  }
}

// Login
export const search = (query) =>
  axios
    .post(
      `https://vetted.springlaunch.com/actions/search.php?query=${query}`,
      {},
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return error
    })

// Search hot
export const searchHot = () =>
  axios
    .post(
      `https://vetted.springlaunch.com/actions/searchHot.php`,
      {},
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return error
    })

// Search hot
export const searchNear = (near) =>
  axios
    .post(
      `https://vetted.springlaunch.com/actions/searchNear.php?state=${near}`,
      {},
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return error
    })

    // Search hot
export const getBiz = (id) =>
  axios
    .post(
      `https://vetted.springlaunch.com/actions/getBiz.php?id=${id}`,
      {},
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return error
    })

// Rate
export const updateRating = (rate, id) =>
  axios
    .post(
      `https://vetted.springlaunch.com/actions/updateRating.php?rate=${rate}&id=${id}`,
      {},
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return error
    })
