const resultDiv = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

const filterData = (keyword) => {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(keyword)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
};

filter.addEventListener('change', (e) => {
  filterData(e.target.value);
});

const getData = async () => {
  const res = await fetch('https://randomuser.me/api/?results=20');

  const { results } = await res.json();

  resultDiv.innerHTML = '';
  results.forEach((user) => {
    const li = document.createElement('li');
    li.className = 'user';
    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                  <h4>${user.name.first} ${user.name.last}</h4>
                  <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
    listItems.push(li);
    resultDiv.appendChild(li);
  });
};

window.addEventListener('load', getData);
