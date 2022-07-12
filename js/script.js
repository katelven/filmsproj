"use strict";

  const promo = document.querySelectorAll(".promo__adv img");
  const promoBg = document.querySelector(".promo__bg");
  const genre = promoBg.querySelector(".promo__genre");
  const movieList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector("form.add");
  const addInput = addForm.querySelector(".adding__input");
  const checkbox = addForm.querySelector('[type="checkbox"]');

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };
  //удаление рекламы
  const deleteAdv = (arr) => {
    arr.forEach((item) => {
        item.remove();
      });
  }
  deleteAdv(promo);
//обновление жанра
  const makeChenges = () => {
    genre.textContent = "Драма";
    promoBg.style.backgroundImage = 'url("img/bg.jpg")';
  };
  makeChenges();
    //отслеживаем отправку формы
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm){
        
        //проверка длинны вводимого текста
        if(newFilm.length  > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        //галочка
        if(favorite) {
            console.log('Добавляем любимый фильм');
        }
        
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
    };
    
    e.target.reset();
  });
//сортировка
  const sortArr = (arr) => {
      arr.sort();
  }
  
//нумерация фильмов
  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);


    films.forEach((film, i) => {
      parent.innerHTML += `
     <li class="promo__interactive-item">${i + 1} ${film}
     <div class="delete"></div>
     </li>
     `;
    });
    //удаление фильма
    document.querySelectorAll('.delete').forEach((btn, i)=> {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
        });

    });


  }

  createMovieList(movieDB.movies, movieList);
