/* ============ JSON.stringify() ============ */

const developer = {
  name: "Web Developer",
  age: 20,
  skill: ["HTMl", "CSS", "JavaScript"],
  framWork: {
    css: "Bootstrap",
    js: "React",
  },
};

let stringify = JSON.stringify(developer);

let parse = JSON.parse(stringify);

// console.log(stringify);

// console.log(parse);

/* ============ fetch('URL') ============ */

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((Res) => Res.json())
    // .then(data => console.log(data))


/* ============ Load Dynamic User Name ============ */

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userName(json))


const userName = json => {

    console.log(json)
   /*  for (const id of json) {
        
        const name = document.getElementById('user-name');
        name.innerText = id.name
    } */
    }