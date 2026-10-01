// Алхам 8: Async/Await
const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP алдаа: ${response.status}`);
    const users = await response.json();
    users.forEach((user) => console.log(user.name));
    return users;
  } catch (error) {
    console.error("Алдаа:", error.message);
  }
};
getUsers();
