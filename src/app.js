/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["my", "our", "this"];
  let adjectives = ["great", "big", "best"];
  let nouns = ["cat", "racoon", "dicctionary"];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let y = 0; y < nouns.length; y++) {
        console.log(pronouns[i] + adjectives[j] + nouns[y] + ".com");
      }
    }
  }
};
