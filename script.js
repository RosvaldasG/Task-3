/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const showUser = document.getElementById("btn");
showUser.onclick = () => {
  fetch(ENDPOINT)
    .then((responce) => responce.json())
    .then((data) => {
      const output = document.getElementById("output");
      console.log(data);

      output.innerHTML = null;
      data.forEach((data) => {
        console.log(data.login);
        const row = document.createElement("div");

        const login = document.createElement("p");
        const avatar = document.createElement("img");
        // --------
        row.className = "block";
        avatar.className = "img";
        //   -----
        avatar.setAttribute("src", data.avatar_url);
        avatar.setAttribute("alt", "avatar");

        login.textContent = data.login;

        row.append(login, avatar);
        output.append(row);
      });
    });
};
