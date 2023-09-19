var user = {
first_name: "Vishnu",
last_name: "Sankar",
age: "19",
department: "AI and DS"
};
console.log(Object.keys(user).length);
delete user.last_name;
console.log(user);
console.log(Object.keys(user).length);
