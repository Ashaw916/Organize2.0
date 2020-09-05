const users = [
  {
    _id: "0001",
    email: "doctorsUni@seedemail.com",
    password: "doctorspassword",
    organization: "Doctors United",
    role: "admin",
    website: "www.doctors.fakeweb.com",
    facebook: "http://facebook/doctorsunifake.com",
    instagram: "@doctorsunited.seed",
    twitter: "@doctorsunitedseed",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0002",
    email: "teachersUni@seedemail.com",
    password: "teacherspassword",
    organization: "Teachers United",
    role: "admin",
    website: "www.teachers.fakeweb.com",
    facebook: "http://facebook/teachersunifake.com",
    instagram: "@teachersunited.seed",
    twitter: "@teachersunitedseed",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0003",
    email: "lawyersUni@seedemail.com",
    password: "lawyerspassword",
    organization: "Lawyers United",
    role: "admin",
    website: "www.lawyers.fakeweb.com",
    facebook: "http://facebook/lawyersunifake.com",
    instagram: "@lawyersunited.seed",
    twitter: "@lawyersunitedseed",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0004",
    email: "volunteersUni@seedemail.com",
    password: "volunteerspassword",
    organization: "Volunteers United",
    role: "admin",
    website: "www.volunteers.fakeweb.com",
    facebook: "http://facebook/volunteersunifake.com",
    instagram: "@volunteersunited.seed",
    twitter: "@volunteersunitedseed",
    date_added: new Date(Date.now()),
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
