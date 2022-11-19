async function getData(url) {
    const data = await fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((data) => data);
    return data;
  }
  const url = 'https://randomuser.me/api';
  async function setUser() {
    const data = await getData(url);
    const user = data.results[0];
    const usersList = document.getElementsByClassName('users')[0];
    usersList.innerHTML += `
     <div class="user">
           <img class="user-img" src=${user.picture.large}></img>
           <div class="user-postcode">${user.location.postcode}</div>
           <div class="user-city">${user.location.city}</div>
           <div class="user-name">${user.name.title} ${user.name.first} ${user.name.last}</div>
           <div class="user-email">${user.email}</div>
        </div>
     `;
  }
  document
    .getElementsByClassName('btn-download')[0]
    .addEventListener('click', () => {
      setUser();
    });