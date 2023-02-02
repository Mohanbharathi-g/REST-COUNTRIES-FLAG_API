'use strict';

// selecting elements
const btnEl = document.getElementById('btn-search');

const inputEl = document.getElementById('country-input');

const output = document.querySelector('.result-container');

// functions

// event listeners

btnEl.addEventListener('click', function () {
  // console.log(inputEl.value);

  let countryName = inputEl.value;

  let url = `https://restcountries.com/v2/name/${countryName}?fullText=true`;
  console.log(url);

  // console.log(countryName);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      output.innerHTML = ` <img src="${
        data[0].flags.svg
      }" alt="" class="flag">  <h2 class='name'>${data[0].name}</h2> 
  <div class="sec-container">
          <h4>capital:</h4>
          <span>${data[0].capital}</span>
        </div>
        <div class="sec-container">
          <h4>continent</h4>
          <span>${data[0].region}</span>
        </div>
        <div class="sec-container">
          <h4>population:</h4>
          <span>${data[0].population}</span>
        </div>
         <div class="sec-container">
          <h4>timezone</h4>
          <span>${data[0].timezones[0]}
</span>
        </div>
          <div class="sec-container">
          <h4>currency:</h4>
          <span>${data[0].currencies[0].code}-${
        data[0].currencies[Object.keys(data[0].currencies)].name
      }
</span>
        </div>`;
    })
    .catch(() => {
      if (countryName == 0) {
        output.innerHTML = `<h3>the input field can't be empty</h3>`;
      } else {
        output.innerHTML = `<h3>please enter valid country name</h3>`;
      }
    });
});
