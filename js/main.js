// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBYm9MRBdbr8XFupP8jdBZqLQPbYkF2BIc",
      authDomain: "pikapika-3a8d4.firebaseapp.com",
      projectId: "pikapika-3a8d4",
      storageBucket: "pikapika-3a8d4.appspot.com",
      messagingSenderId: "488176210907",
      appId: "1:488176210907:web:6cf33ad6c044eedc6c8dfe"
    }

    

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const exitElem = document.querySelector('.exit');

const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarElem = document.querySelector('.user-avatar');
const postsWrapper = document.querySelector('.posts');
const buttonNewPost = document.querySelector('.button-new-post');
const addPostElem = document.querySelector('.add-post');
// Variables
const likeBtn = document.querySelector('.heart-icon');
const numberOfLikesElement = document.querySelector('.number-of-likes');
let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
let isLiked = false;
// Functions
const likeClick = () => {
  if (!isLiked) {
    likeBtn.classList.add('isLiked');
    numberOfLikes++;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  } else {
    likeBtn.classList.remove('isLiked');
    numberOfLikes--;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
};
// Event Listeners
likeBtn.addEventListener('click', likeClick);
const listUsers = [
{
  id:'01',
  email: 'Danya@mail.com',
  password: '123456789',
  displayName: 'DanyaJS',
  photo: 'https://borodadeda.ru/wp-content/uploads/2019/09/minoxidil-beard-1.jpg',
  },
  {
  id:'02',
  email: 'vitalya@mail.com',
  password: '123456789999',
  displayName: 'VitoSkaletto',
  photo:'https://cs6.pikabu.ru/post_img/big/2014/08/27/1/1409091619_1970050481.jpg',
  },
];
const setUsers ={
  user: null,
  logIn(email,password, handler) {
    if(!regExpValidEmail.test(email)) {
    alert('Email не валиден');
    return;
    }
    const user = this.getUser(email);
    if(user && user.password === password){
      this.authorizedUser(user)
      handler();
    } else {
      alert('Пользователь с такими данными не найден')
    }
  },
  logOut(handler) {
    console.log('Выход')
    this.user = null;
    handler();
  },
  signUp( email,password, handler) {
    if(!regExpValidEmail.test(email)) {
      alert('Email не валиден');
      return;
    }
    if (!email.trim() || !password.trim()){
      alert ('Введите данные')
      return;
    }
    if(!this.getUser(email)){
    const user ={email,password, displayName:email.substring(0, email.indexOf('@'))};
    listUsers.push({user})
    this.authorizedUser(user)
    handler();
    } else{
      alert('Пользователь с таким email уже зарегестрирован')
    }
  },
  editUser(userName,userPhoto, handler){
  if(userName){
    this.user.displayName = userName;
  }
  if(userPhoto){
    this.user.photo = userPhoto;
  }
  handler();
  },
  getUser(email){
  return listUsers.find(item => item.email === email)
  },
  authorizedUser(user){
    this.user = user;
  }
};
  const setPosts = {
    allPosts: [
      {
        title: 'Заголовок поста',   
        text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что ротмаленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
        tags: ['Свежее','Новое','Горячее','Моё','Случайность'],
        author: {displayName: 'danya', photo: 'https://borodadeda.ru/wp-content/uploads/2019/09/minoxidil-beard-1.jpg' },
        date: '11.11.2024, 11:11:11',
        like: 15,
        commetns: 20
      },
      {
        title: 'Заголовок поста',   
        text: 'sdfsdfsdfsdfsdfsd',
        tags: ['Свежее','Новое','Горячее','Моё','Случайность'],
        author: {displayName: 'vitalya', photo: 'https://funik.ru/wp-content/uploads/2018/12/4d615a274b1f53e0d2cd.jpg'},
        date: '11.11.2024, 11:11:11',
        like: 15,
        commetns: 20
      },
      {
        title: 'Заголовок поста3',   
        text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что ротмаленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
        tags: ['Свежее','Новое','Горячее','Моё','Случайность'],
        author: {displayName: 'vitalya', photo:'https://cs6.pikabu.ru/post_img/big/2014/08/27/1/1409091619_1970050481.jpg'},
        date: '11.11.2024, 11:11:11',
        like: 15,
        commetns: 20
      },
    ],
    addPost(title, text, tags, handler){
      this.allPosts.unshift({
        title,
        text,
        tags: tags.split(',').map(item => item.trim()),
        author: {
          displayName: setUsers.user.displayName,
          photo: setUsers.user.photo,
        },
        date: new Date().toLocaleString(),
        like: 0,
        commetns: 0,
      })
      if (handler){
        handler();
      }
    }
  };
const toggleAuthDom = () => {
const user = setUsers.user;
console.log('user', user);
if(user){
  loginElem.style.display = 'none';
  userElem.style.display = '';
  userNameElem.textContent = user.displayName;
  userAvatarElem.src = user.photo || userAvatarElem.src;
  buttonNewPost.classList.add('visible');
} else {
  loginElem.style.display = '';
  userElem.style.display = 'none';
  buttonNewPost.classList.remove('visible');
  addPostElem.classList.remove('visible');
  postsWrapper.classList.add('visible');
}
}; 
const showAddPost = () => {
  addPostElem.classList.add('visible');
  postsWrapper.classList.remove('visible');
}
const showAllPosts = () =>{
  addPostElem.classList.remove('visible');
  postsWrapper.classList.add('visible');
  let postsHTML = '';
  setPosts.allPosts.forEach(({title,text,date,tags,like, commetns,author})=> {
    postsHTML += `
    <section class="post">
    <div class="post-body">
      <h2 class="post-title">${title}</h2>
      <p class="post-text">${text}</p>
      <div class="tags">
      ${tags.map(tag => `<a href="#" class="tag">#${tag}</a>`)}
      </div>
    </div>
    <div class="post-footer">
      <div class="post-buttons">
        <button class="post-button likes">
          <svg width="19" height="20" class="icon icon-like">
            <use xlink:href="img/icons.svg#like"></use>
          </svg>
          <span class="likes-counter">${like}</span>
        </button>
        <button class="post-button comments">
          <svg width="21" height="21" class="icon icon-comment">
            <use xlink:href="img/icons.svg#comment"></use>
          </svg>
          <span class="comments-counter">${commetns}</span>
        </button>
        <button class="post-button save">
          <svg width="19" height="19" class="icon icon-save">
            <use xlink:href="img/icons.svg#save"></use>
          </svg>
        </button>
        <button class="post-button share">
          <svg width="17" height="19" class="icon icon-share">
            <use xlink:href="img/icons.svg#share"></use>
          </svg>
        </button>
      </div>
      <div class="post-author">
        <div class="author-about">
          <a href="#" class="author-username">${author.displayName}</a>
          <span class="post-time">${date}</span>
        </div>
        <a href="#" class="author-link"><img src=${author.photo || "img/avatar.jpeg"} alt="avatar" class="author-avatar"></a>
      </div>
    </div>
  </section>
    `;
  })
  postsWrapper.innerHTML = postsHTML
};
const init = () => {
  loginForm.addEventListener('submit',event=>{
    event.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset ();
  });
  loginSignup.addEventListener('click', event=>{
    event.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset ();
  });
  exitElem.addEventListener('click',event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });
  editElem.addEventListener('click', event =>{
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });
  editContainer.addEventListener('submit', event =>{
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom)
    editContainer.classList.remove('visible');
  });
  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  })
  buttonNewPost.addEventListener('click', event => {
    event.preventDefault();
    showAddPost();
  });
  addPostElem.addEventListener('submit', event => {
    event.preventDefault();
    const { title, text, tags } = addPostElem.elements; 
    if (title.value.length < 6){
      alert ('Слишком короткий заголовок');
      return;
    }
    if (text.value.length < 50){
      alert ('Слишком короткий пост');
      return;
    }
    setPosts.addPost(title.value, text.value, tags.value, showAllPosts);
    addPostElem.classList.remove('visible');
    addPostElem.reset();
  });
  showAllPosts();
  toggleAuthDom();
}
document.addEventListener('DOMContentLoaded', init)
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const h1element = document.querySelector('.hel');
btn.addEventListener('click',clickplus);
btn2.addEventListener('click',clickminus);
let count = 0;
function clickplus(){
  count ++
  h1element.innerHTML = `${count}`
}
function clickminus(){
  count --
  h1element.innerHTML = `${count}`
}


