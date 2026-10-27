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
    const userId = document.querySelector("input[name='userId']").value;
    const title = document.querySelector("input[name='title']").value;
    const body = document.querySelector("textarea[name='body']").value;

    answer.innerHTML = "Processing...";

    fetch(`https://jsonplaceholder.typicode.com/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: Number(userId),
        title: title,
        body: body,
      }),
    })
      .then((response) => response.json())
      .then((post) => {
        answer.innerHTML = `Dodano nowy post o ID = ${post.id}`;
      });
  });

  cw2.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        let html = "";

        html = "<table>";

        html += `
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      `;

        array.forEach((item) => {
          html += `
          <tr>
            <td>${item.id}</td>
            <td>${item.userId}</td>
            <td style='color:red;'>${item.title}</td>
            <td style='color:green; text-align:center;'>${item.body}</td>
          </tr>
        `;
        });

        html += "</table>";

        answer.innerHTML = html;
      });
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
