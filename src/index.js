// Webpack configured with CSS loader plugin. Import CSS files to include in bundle
import './index.css';
import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call
getUsers().then(result => {
  let usersBody = '';

  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');
  // Use array.from to create an arry from a DOM collection
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      event.preventDefault();
      const element = event.target;
      const row = element.parentNode.parentNode;
      const userId = element.attributes["data-id"].value
      deleteUser(userId);
      row.parentNode.removeChild(row);
    }
  });
});

