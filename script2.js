"use strict";

const maxTemp = {
  dailyMaxTemp: [17, 21, 23],
  dailyMaxTemp2: [12, 5, -5, 0, 4],
};

console.log(
  maxTemp.dailyMaxTemp[0] +
    " degrés dans 1 jour, " +
    maxTemp.dailyMaxTemp[1] +
    " degrés dans 2 jours, " +
    maxTemp.dailyMaxTemp[2] +
    " degrés dans 3 jours"
);

console.log(
  maxTemp.dailyMaxTemp2[0] +
    " degrés dans 1 jour, " +
    maxTemp.dailyMaxTemp2[1] +
    " degrés dans 2 jours, " +
    maxTemp.dailyMaxTemp2[2] +
    " degrés dans 3 jours, " +
    maxTemp.dailyMaxTemp2[3] +
    " degrés dans 4 jours"
);
