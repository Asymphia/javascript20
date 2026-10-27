(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    const value = document.querySelector("select[name='postId']").value;

    answer.innerHTML = "Loading...";

    fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then((response) => response.json())
      .then((array) => {
        answer.innerHTML = "<ul>";

        for (const key in array) {
          answer.innerHTML += `<li>${key}: ${array[key]}</li>`;
        }

        answer.innerHTML += "</ul>";
      });
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
