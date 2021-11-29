const bernard = {
  firstName: "Bernard",
  weight: "",
  height: "",
  calcBMI: function () {
    return Number(this.weight / this.height ** 2).toFixed(2);
  },
  bmi: "",
};

const marcel = {
  firstName: "Marcel",
  weight: {},
  height: {},
  calcBMI: function () {
    return Number(this.weight / this.height ** 2).toFixed(2);
  },
  bmi: "",
};
bernard.weight = 78;
bernard.height = 1.69;

marcel.weight = 92;
marcel.height = 1.95;

console.log((bernard.bmi = bernard.calcBMI()));
console.log((marcel.bmi = marcel.calcBMI()));

console.log(
  `L'IMC de ${bernard.firstName} (${bernard.bmi}) est plus élevé que celui de ${marcel.firstName} (${marcel.bmi})`
);
