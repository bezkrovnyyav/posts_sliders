function getUserInfo() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      displayUserInfo(user);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

function displayUserInfo(user) {
  const userDetails = document.getElementById("user-details");
  userDetails.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    <p>Website: ${user.website}</p>
    <p>Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
    <!-- Другие поля информации о пользователе -->
  `;
}

// Вызов функции для получения информации о пользователе при загрузке страницы
getUserInfo();
