// console.log('method 1 normal function');
// const square = function (x) {
//     return x * x;
// }

// console.log('method 2 arrow function');
// const square = (x) => {
//   return x * x;
// };

// console.log('method 3 arrow function');
// const square = (x) => x * x;

// console.log(square(2));

//--------------------------------------------------------------------------------------------------------

//note : "this binding" is not well suited for arrow finction

const event = {
  name: "Birthday Party",
  guestList: ["Aseel", "Andrew", "Jen", "Mike"],
  //not an arrow function, its an alternate function syntax
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
