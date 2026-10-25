import React from 'react';
import ReactDOM from 'react-dom/client';


const data = [
  {
    id: 1,
    firstname: "Molly",
    lastname: "Begbie",
    email: "mbegbie0@parallels.com",
    gender: "Non-binary",
    age: 12,
    job: "Tax Accountant",
  },
  {
    id: 2,
    firstname: "Mayer",
    lastname: "Kuhnke",
    email: "mkuhnke1@myspace.com",
    gender: "Agender",
    age: 39,
    job: "Legal Assistant",
  },
  {
    id: 3,
    firstname: "Susy",
    lastname: "Kyneton",
    email: "skyneton2@buzzfeed.com",
    gender: "Male",
    age: 36,
    job: "Director of Sales",
  },
  {
    id: 4,
    firstname: "Raquela",
    lastname: "Littlefield",
    email: "rlittlefield3@google.co.uk",
    gender: "Genderqueer",
    age: 69,
    job: "Business Systems Development Analyst",
  },
  {
    id: 5,
    firstname: "Robinetta",
    lastname: "Loughney",
    email: "rloughney4@typepad.com",
    gender: "Female",
    age: 40,
    job: "Financial Advisor",
  },
  {
    id: 6,
    firstname: "Orelle",
    lastname: "Domanski",
    email: "odomanski5@angelfire.com",
    gender: "Polygender",
    age: 32,
    job: "VP Accounting",
  },
  {
    id: 7,
    firstname: "Brandi",
    lastname: "Haliburton",
    email: "bhaliburton6@baidu.com",
    gender: "Bigender",
    age: 57,
    job: "Engineer IV",
  },
  {
    id: 8,
    firstname: "Ario",
    lastname: "Cormack",
    email: "acormack7@sfgate.com",
    gender: "Bigender",
    age: 43,
    job: "Speech Pathologist",
  },
  {
    id: 9,
    firstname: "Kirsti",
    lastname: "Kimmerling",
    email: "kkimmerling8@statcounter.com",
    gender: "Female",
    age: 27,
    job: "Design Engineer",
  },
  {
    id: 10,
    firstname: "Orton",
    lastname: "Renachowski",
    email: "orenachowski9@amazon.co.uk",
    gender: "Genderfluid",
    age: 55,
    job: "Technical Writer",
  },
];




function PersonCard(props) {
  return (
    <div>
      <h1>{props.id} </h1>
      <p> {props.firstname}</p>
      <p>{props.lastname}</p>
      <p>{props.email}</p>
      <p>{props.gender}</p>
      <p>{props.age}</p>
      <p>{props.job}</p>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<React.StrictMode>

<div>
  {data.map((person) => (
    <PersonCard
      id={person.id}
      firstname={person.firstname}
      lastname={person.lastname}
      email={person.email}
      age={person.age}

    />
  ))}
</div>

</React.StrictMode>

);


