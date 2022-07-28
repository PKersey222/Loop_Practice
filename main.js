let i = 0;

do {
  i = i + 1;
  console.log(i);
} while (i < 1000);

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

let logOut = () => {
  console.log(Object.keys(person));
};
logOut();

let logEntries = () => {
  console.log(Object.entries(person));
};
logEntries();

let arrayOfPerson = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
  },
  {
    firstName: "Sally",
    lastName: "Cat",
    birthDate: "Jan 7, 1978",
    gender: "female",
  },
  {
    firstName: "Paul",
    lastName: "Spider",
    birthDate: "Aug 4, 2008",
    gender: "Male",
  },
];

// const birthdateValue = arrayOfPerson[0].birthDate
// console.log(birthdateValue)
for (const element of arrayOfPerson) {
  //     // if birth year = odd number the log the object in the console
  if (element.birthDate.charAt(element.birthDate.length - 1) % 2 !== 0) {
    console.log(element.birthDate);
  }
}

// .map() the array of objects above. to return information in the console.
// array of objects above is made up of element, index, array. They are the three peramiters that .map() can use. depending on what is entered in console.log it will return
// different number and ammounts 0,1,or 2 returns. Depends on if i tell it to run just element, index, or array or all 3. 
arrayOfPerson.map((element, index, array) => {
    console.log('this is the',index,'th',element)
})

// use mdn to problem solve. for some reason curly brackets didnt work here.
// created "result" === array of person to filter the array of objects and return only male gender. function doesnt need if statment not needed it just needs the condition. if statment is implied. console log ouside otherwise it wont show any.

let result = arrayOfPerson.filter((element,index,array)=> 
    // only return if gender === male
    element.gender == "Male"  
)
console.log(result)

let last4= arrayOfPerson[0].birthDate.slice(-4);
console.log(last4)



let beforeDateTrue = arrayOfPerson.map((element,index,array) => {
// // return true if value of birthDate year is < 1990  (need to turn a string into a number to be able to refrence it)
if (arrayOfPerson[index].birthDate.slice(-4) < 1990){
    return true
}
})
console.log(beforeDateTrue)

let beforeDate = arrayOfPerson.filter((element,index,array)=>{
//     // return the whole object only if the date is before Jan 1, 1990

    return (arrayOfPerson[index].birthDate.slice(-4) < 1990)
})
console.log(beforeDate)