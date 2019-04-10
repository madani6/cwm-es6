const address = {
  street: "jl. kenangan",
  city: "hati",
  country: "cinta"
};

const street = address.street;
const city = address.city;
const country = address.country;
console.log(street);
console.log(city);
console.log(country);

//   const { street, city, country } = address;
const { street: st } = address;
