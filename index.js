document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  const films = [
    {
      id: 0,
      title: "Марсианин",
      originalTitle: "The Martian",
      year: "2015",
      categories: "Фантастика, приключения",
      rate: 7.8,
      image: "/images/film-image.png"
    },
    {
      id: 1,
      title: 'Гравитация',
      originalTitle: 'Gravity',
      year: '2013',
      categories: 'Фантастика, драма',
      rate: 7.7,
      image: '/images/film-image.png'
    },
    {
      id: 2,
      title: 'Интерстеллар',
      originalTitle: 'Interstellar',
      year: '2014',
      categories: 'Фантастика',
      rate: 8.6,
      image: '/images/film-image.png'
    },
    {
      id: 3,
      title: 'Пекло',
      originalTitle: 'Sunshine',
      year: '2007',
      categories: 'Фантастика',
      rate: 7.2,
      image: '/images/film-image.png'
    },
    {
      id: 4,
      title: 'Армагеддон',
      originalTitle: 'Armageddon',
      year: '1998',
      categories: 'Катастрофа, боевик',
      rate: 7.0,
      image: '/images/film-image.png'
    },
    {
      id: 5,
      title: 'Послезавтра',
      originalTitle: 'The Day After Tomorrow',
      year: '2004',
      categories: 'Катастрофа',
      rate: 6.4,
      image: '/images/film-image.png'
    }
  ];


  const renderFilms = (array) => {
    const filmsWrapper = document.querySelector(".content-cards");

    filmsWrapper.innerHTML = "";

    if (array.length === 0) {
      filmsWrapper.innerHTML = "Ничего не найдено :(";
    }

    array.forEach((film) => {
      filmsWrapper.insertAdjacentHTML("beforeend", `
        <a href="/film.html?id=${film.id}" class="content-cards__item">
                <div class="content-cards__item--image">
                  <img src="${film.image}" alt="image">
                </div>
                <div class="content-cards__item--title">
                  <h5>${film.title}, </h5>
                  <span>${film.originalTitle} ${film.year}</span>
                </div>
                <p class="content-cards__item--description">${film.categories}</p>
                <span class="content-cards__item--rate">${film.rate}</span>
              </a>
        `);
    });
  };

  searchButton.addEventListener("click", () => {
    const userInput = searchInput.value.toLowerCase();

    const filteredArray = films.filter((film) => film.title.toLowerCase().includes(userInput) || film.originalTitle.toLowerCase().includes(userInput))

    renderFilms(filteredArray);
  })

  renderFilms(films);

});