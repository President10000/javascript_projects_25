const postListContainer = document.querySelector(".posts-list-container");

// Fetch using xhr method

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

// Fetch using fetch method

function getApiByFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

// Fetch using async await

async function fetchUsingAsyncAwait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const result = await response.json();
  displayResults(result);
}

// Fetch using XHR and async await

function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        {
          resolve(xhr.response);
        }
      } else {
        reject(xhr.response);
      }
    };
  });

  return promise;
}
async function fetchUsingXHRAndAsyncAwait() {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  displayResults(response);
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

// getApiByXhrMethod();

// getApiByFetchMethod();

// fetchUsingAsyncAwait();

fetchUsingXHRAndAsyncAwait();
