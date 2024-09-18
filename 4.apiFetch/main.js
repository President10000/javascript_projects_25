const postListContainer = document.querySelector(".posts-list-container");

function getApiByXhrMethod() {
  xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.responseType = "json";

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);

      displayResults(xhr.response);
    } else {
      console.log(" Something Went Wrong Error: " + xhr.status);
    }
  };
}

function displayResults(posts) {
  postListContainer.innerHTML = posts
    .map(
      (post) =>
        `<div class="postItem">
      <h1>${post.title}</h1>
    <p>${post.body}</p>
      </div>
    `
    )
    .join("");
}

getApiByXhrMethod();
