//Fetch and Display Users(READ)
let users = [];

fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.json())
   .then(data => {
    users = data;
    displayUsers(users);
   });

function displayUsers(userList){
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    userList.forEach(user => {
        table.innerHTML += `
        <tr>
           <td>${user.name}</td>
           <td>${user.email}</td>
           <td>${user.address.city}</td>
           <td>
             <button onclick="viewUser(${user.id})">View</button>
             <button onclick="editUser(${user.id})">Edit</button>
             <button onclick="deleteUser(${user.id})">Delete</button>
           </td>
        </tr>
        `;
    });
}

//View User Details
function viewUser(id) {
    const user = users.find(u => u.id === id);

document.getElementById("details").innerHTML = `
    <h3>User Details</h3>
    <p>Phone: ${user.phone}</p>
    <p>Company: ${user.company.name}</p>
    <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
}

//Edit User (UPDATE)
function editUser(id) {
    const user = users.find(u => u.id === id);
    const newName = prompt("Enter new name", user.name);
    const newEmail = prompt("Enter new email", user.email);

    if (!newName || !newEmail) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: newName,
            email: newEmail
        })
    })
    .then(res => res.json())
    .then(updated => {
        user.name = updated.name;
        user.email = updated.email;
        displayUsers(users);
    });
}

//Delete User (DELETE)
function deleteUser(id) {
    if (!confirm("Are you sure?")) return;

fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  })
  .then(() => {
    users = users.filter(u => u.id !== id);
    displayUsers(users);
  });
}

//Search User
document.getElementById("search").addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    const filtered = users.filter(user => user.name.toLowerCase().includes(value)
    );
    displayUsers(filtered);
});