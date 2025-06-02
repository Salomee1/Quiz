const users = [
  { username: "john", gender: "boy" },
  { username: "jane", gender: "girl" },
  { username: "sam", gender: "random" },
];

const container = document.getElementById("container");

function createAvatarUrls(username, gender) {
  const safeUsername = encodeURIComponent(username);
  const genderPath =
    gender === "boy" || gender === "girl" ? `/public/${gender}` : "/public";
  return {
    genderUrl: `https://avatar.iran.liara.run${genderPath}?username=${safeUsername}`,
    usernameUrl: `https://avatar.iran.liara.run/username?username=${safeUsername}`,
  };
}

function updateUser(index, username, gender, genderImg, usernameImg) {
  users[index].username = username;
  users[index].gender = gender;
  const { genderUrl, usernameUrl } = createAvatarUrls(username, gender);
  genderImg.src = genderUrl;
  usernameImg.src = usernameUrl;
}

function renderCard(user, index) {
  const card = document.createElement("div");
  card.className = "card";

  const avatars = document.createElement("div");
  avatars.className = "avatars";

  const genderImg = document.createElement("img");
  const usernameImg = document.createElement("img");

  const { genderUrl, usernameUrl } = createAvatarUrls(
    user.username,
    user.gender
  );
  genderImg.src = genderUrl;
  usernameImg.src = usernameUrl;

  avatars.appendChild(genderImg);
  avatars.appendChild(usernameImg);

  const usernameInput = document.createElement("input");
  usernameInput.value = user.username;
  usernameInput.placeholder = "Username";

  const genderInput = document.createElement("input");
  genderInput.value = user.gender;
  genderInput.placeholder = "Gender (boy/girl/random)";

  usernameInput.addEventListener("input", () =>
    updateUser(index, usernameInput.value, genderInput.value, genderImg, usernameImg)
  );

  genderInput.addEventListener("input", () =>
    updateUser(index, usernameInput.value, genderInput.value, genderImg, usernameImg)
  );

  card.appendChild(avatars);
  card.appendChild(usernameInput);
  card.appendChild(genderInput);

  container.appendChild(card);
}

users.forEach((user, index) => renderCard(user, index));
