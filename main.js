"use strict";
const axios = require("axios");
// const jsdom = require("jsdom");

const getData = async (url) => {
  // const response = await fetch(url);
  const res = await axios.get(url);
  const data = res.data;
  console.log(data);
  // for (let i in data.result) {
  //   const ul = document.getElementById('ul');
  //   const li = document.createElement('li');
  //   const img = document.createElement('img');
  //   const title = document.createElement('h3');
  //   img.src = data.result[i].foodImageUrl;
  //   title.textContent = data.result[i].recipeTitle;
  //   li.appendChild(img);
  //   li.appendChild(title);
  //   ul.appendChild(li);

  //   // liをクリックしたら非表示に
  //   li.addEventListener("click", () => {
  //     li.style.visibility = "hidden";
  //   });
  // };
};
const baseURL =
  "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=1086382364385531386&categoryId=";
// const url2 = `${baseURL}30`;
const url1 = `${baseURL}32`;

getData(url1);
// getData(url2);
