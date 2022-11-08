let dashboard = document.getElementsByClassName("dashboard");
let restaurant = document.getElementById("btn-rtr");
let logout = document.getElementById("btn-logout");
let api = "http://localhost:3000";
dashboard[0].addEventListener("click", (req, res) => {});
dashboard[1].addEventListener("click", (req, res) => {});
restaurant.addEventListener("click", (req, res) => {});

logout.addEventListener("click", (e) => {
  fetch(api + "/auth/logout", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        window.location.href = api + "/auth/login-admin";
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

let edit = document.querySelectorAll(".status-edit");
// console.log(edit);
edit.forEach((e, i) => {
  //   console.log(e.children[8]);
  e.onclick = (event) => {
    if (
      event.target.classList.contains("btn-update-blogs") ||
      event.target.classList.contains("hydrated")
    ) {
      e.children[9].children[1].classList.remove("btn-update-blogs");

      //   console.log(e.children[8].innerText);
      e.children[9].children[1].innerHTML = "Save";
      e.children[9].children[1].classList.add("save-edit");
      e.children[8].innerHTML = `<td><input class="input-edit" value="${e.children[8].innerText}" style="color:black" ></td>`;
      let inputEdit = document.querySelectorAll(".input-edit");
      let saveEdit = document.querySelectorAll(".save-edit");
      inputEdit[i].onkeyup = () => {
        if (event.target.classList.contains("save-edit")) {
          saveEdit[i].onclick = () => {
            console.log(inputEdit[i].value);
            let data = {
              status: inputEdit[i].value,
            };
            let id = e.parentElement.children[i].classList[1];
            //fetch
            fetch(api + `/users/${id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              });
          };
        }
      };
    }
  };
});
