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
  .then((data) => console.log(data));

/* ============ Load Dynamic User Name ============ */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => userName(json));

const userName = (json) => {
  const nameCon = document.getElementById("name-con");

  for (const id of json) {
    let h5 = document.createElement("h5");
    h5.innerText = id.name;
    nameCon.appendChild(h5);
  }
};

/* ============ Load Dynamic User Comment ============ */
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((Response) => Response.json())
  .then((comment) => displayComm(comment));

const displayComm = (text) => {
  const comments = document.getElementById("comment-con");
  for (const x of text) {
    const p = document.createElement("p");
    p.innerText = x.body;
    comments.appendChild(p);
  }
};

/* ============ Load Dynamic User ID & Title ============ */
const addPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => post(data));
};

const post = (data) => {
  const postContent = document.getElementById("post-con");
  const ul = document.createElement("ul");
  for (const comm of data) {
    const li = document.createElement("li");
    li.innerHTML = `ID: ${comm.id} <br/> Title: ${comm.title}`;
    ul.appendChild(li);
    postContent.appendChild(ul);
  }
};

/* ============ PUT Dynamic Data ============ */

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: json.stringify({
    id: 23,
    name: "Riyad",
    profession: "Worshiping Allah",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data.name));
