import React from "react";
import axios from "axios";

// Login
export const search = (query) =>
  axios
    .post(
      `https://shanebodimer.com/project/vetted_api/actions/search.php?query=${query}`,
      {},
      { headers: { "Content-Type": "application/json" } }
    )
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

// Search hot
export const searchHot = () =>
  axios
    .post(
      `https://shanebodimer.com/project/vetted_api/actions/searchHot.php`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

// Search hot
export const searchNear = (near) =>
  axios
    .post(
      `https://shanebodimer.com/project/vetted_api/actions/searchNear.php?state=${near}`,
      {},
      { headers: { "Content-Type": "application/json" } }
    )
    .then(function (response) {
      console.log("near", near);
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

// Search hot
export const getBiz = (id) =>
  axios
    .post(
      `https://shanebodimer.com/project/vetted_api/actions/getBiz.php?id=${id}`,
      {},
      { headers: { "Content-Type": "application/json" } }
    )
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

// Rate
export const updateRating = (rate, id) =>
  axios
    .post(
      `https://shanebodimer.com/project/vetted_api/actions/updateRating.php?rate=${rate}&id=${id}`,
      {},
      { headers: { "Content-Type": "application/json" } }
    )
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
