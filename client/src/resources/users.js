const users = [
  {
    _id: "0001",
    email: "doctorsUni@seedemail.com",
    password: "doctorspassword",
    organization: "Doctors United",
    website: "www.doctors.fakeweb.com",
    facebook: "http://facebook/doctorsunifake.com",
    instagram: "@doctorsunited.seed",
    twitter: "@doctorsunitedseed",
  },
  {
    _id: "0002",
    email: "teachersUni@seedemail.com",
    password: "teacherspassword",
    organization: "Teachers United",
    website: "www.teachers.fakeweb.com",
    facebook: "http://facebook/teachersunifake.com",
    instagram: "@teachersunited.seed",
    twitter: "@teachersunitedseed",
  },
  {
    _id: "0003",
    email: "lawyersUni@seedemail.com",
    password: "lawyerspassword",
    organization: "Lawyers United",
    website: "www.lawyers.fakeweb.com",
    facebook: "http://facebook/lawyersunifake.com",
    instagram: "@lawyersunited.seed",
    twitter: "@lawyersunitedseed",
  },
  {
    _id: "0004",
    email: "volunteersUni@seedemail.com",
    password: "volunteerspassword",
    organization: "Volunteers United",
    website: "www.volunteers.fakeweb.com",
    facebook: "http://facebook/volunteersunifake.com",
    instagram: "@volunteersunited.seed",
    twitter: "@volunteersunitedseed",
  },
];

//EXPORT FUNCTIONS
export function getUsers() {
  return users;
}

export function getUser(id) {
  return users.find((u) => u._id === id);
}

export function deleteUser(id) {
  let userInDb = users.find((u) => u._id === id);
  users.splice(users.indexOf(userInDb), 1);
  return userInDb;
}
