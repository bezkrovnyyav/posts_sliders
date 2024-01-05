// JavaScript для загрузки данных из JSONPlaceholder и создания постов и пользователей

// Загрузка постов
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const slider = document.querySelector(".slider");
    posts.slice(0, 10).forEach((post) => {
      const postElement = createPostElement(post);
      slider.appendChild(postElement);
    });
  })
  .catch((error) => console.error("Ошибка загрузки данных (посты):", error));

// Загрузка пользователей
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const userSlider = document.querySelector(".user-slider");
    users.slice(0, 10).forEach((user) => {
      const userElement = createUserElement(user);
      userSlider.appendChild(userElement);
    });
  })
  .catch((error) =>
    console.error("Ошибка загрузки данных (пользователи):", error)
  );

// Функция для создания элемента поста
function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;
  return postElement;
}

// Функция для создания элемента пользователя
function createUserElement(user) {
  const userElement = document.createElement("div");
  userElement.classList.add("user");
  userElement.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/${user.id}.jpg" alt="User">
    <h2>${user.name}</h2>
    <p>${user.email}</p>
  `;
  // Добавляем обработчик клика для перехода на страницу пользователя
  userElement.addEventListener("click", () => {
    window.location.href = `user.html?userId=${user.id}`;
  });
  return userElement;
}
