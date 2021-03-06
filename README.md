<h1 align="center">goit-Js-hw-10-food-service<h1>
<p align="center">
<a href="https://github.com/dimalitvinenko/goit-Js-hw-10-food-service/blob/main/LICENSE?screen_name=shields_io">
        <img src="https://img.shields.io/static/v1?labelColor=lightgrey&logoColor=black&color=grey&message=License&label=MIT&style=plastic&logo=monster&url=https://github.com/dimalitvinenko/goit-Js-hw-10-food-service/blob/main/LICENSE"
             alt="GitHub license">
</a> 
<a href="https://nodejs.org/en/about/?screen_name=shields_io">
        <img src="https://img.shields.io/static/v1?labelColor=purple&color=darkorchid&message=v14.17.6&label=Node.js&style=plastic&logo=nodedotjs&url=https://nodejs.org/en/about"
             alt="Node.js">
</a>
<a href="https://parceljs.org/?screen_name=shields_io">
        <img height="18" src="https://img.shields.io/static/v1?label=Parcel&logo=pandora&message=v1.12.5&style=plastic&logoColor=gold&labelColor=teal&color=seagreen&url=https:https://parceljs.org"
             alt="Parcel js">
</a>
<a href="https://www.npmjs.com/package/simple-icons">
        <img src="https://img.shields.io/npm/v/simple-icons.svg?logo=npm&labelColor=olive&color=darkkhaki&style=plastic" 
             alt="NPM version">
</a>
<a href="https://handlebarsjs.com/?screen_name=shields_io">
        <img src="https://img.shields.io/static/v1?label=handlebars&logo=handlebarsdotjs&message=v4.7.7&style=plastic&logoColor=darkgray&labelColor=chocolate&color=darkorange&url=https://handlebarsjs.com"
             alt="Handlebars js">
</a>
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/DimaLitvinenko/goit-Js-hw-10-food-service?color=steelblue&logo=github&labelColor= slategray&logoColor=white&style=plastic"
       alt="commit activity">
  
<br>
<a href="https://linkedin.com/in/dimaly-dev/?screen_name=shields_io">
        <img height="20" src="https://img.shields.io/twitter/url?label=Linkedin&labelColor=blue&logoColor=darkblue&logo=linkedin&style=plastic&color=blue&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdimaly-dev%2F"
        alt="follow on Linkedin">
</a>
<a href="https://mail.google.com/mail/dimaly.too@gmail.com/?screen_name=shields_io">
        <img height="20" src="https://img.shields.io/twitter/url?labelColor=red&logoColor=darkred&label=Gmail&color=red&logo=gmail&style=plastic&url=https://mail.google.com/mail/dimaly.too@gmail.com"
        alt="follow on Gmail">
</a>
</p>           

      
      
 ### by Parcel boilerplate &middot; 
- Проект собран с помощью `Parcel`.
- Код отформатирован `Prettier`.

## Задание

Создай страницу меню с возможностью выбора темы для сервиса заказа еды.
[Ссылка на демо видео](https://take.ms/RxIlv).

- Обязательно используй
  parcel-project-template(https://github.com/goitacademy/parcel-project-template)
  для сборки и деплоя проекта.
- В папке [src](./src) ты найдешь стартовую разметку, стили и данные
- Массив объектов блюд лежит в [menu.json](./src/menu.json)

## Тема

Добавь функционал изменения темы при нажатии (событие `change`) на чекбокс
`#theme-switch-toggle` в тулбаре.

- По умолчанию тема светлая.
- При изменении темы, необходимо добавлять на элемент `body` класс `light-theme`
  или `dark-theme`.
- Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения
  темы используй `localStorage`.
- Если при загрузке страницы тема тёмная, не забудь поставить свойство `checked`
  у чекбокса `#theme-switch-toggle` в `true`, чтобы ползунок сдвинулся в
  правильное положение.

Для удобства хранения списка тем используй такое перечисление.

```js
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
```

## Шаблонизация

Используя шаблонизатор Handlebars(https://handlebarsjs.com/) создай шаблон
одного элемента меню. После чего, используя шаблон, создай разметку всего меню
по данным из [menu.json](./src/menu.json) и добавь в DOM в `ul.js-menu`.

Для иконок используется библиотека `Material Icons`.

Ниже указана разметка элемента меню которая должна получаться по шаблону (данные
будут разные для каждого объекта).

```html
<li class="menu__item">
  <article class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt="Картофель, запеченный в мундире"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картофель, запеченный в мундире</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        100 кредитов
      </p>

      <p class="card__descr">
        Ароматный, сытный, шипящий домашний картофель, фаршированный
        сметанно-беконной начинкой, — это очень простой и очень эффектный способ
        накормить большое количество человек, практически не потратив на готовку
        ни сил, ни времени. Обычную картошку при желании тут можно заменить на
        сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий
        красный перец.
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картофель</li>
        <li class="tag-list__item">Чеснок</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердый сыр</li>
        <li class="tag-list__item">Зеленый лук</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>
```

## Зависимости

На компьютере должена быть установлена LTS-версия [Node.js](https://nodejs.org/en/) со всеми
дополнительными инструментами кроме **Chocolatey**.

## Перед началом работы

Один раз на проект установить все зависимости.

```shell
npm ci
```

### Разработка

Запустить режим разработки.

```shell
npm run dev
```

Во вкладке браузера перейти по адресу [http://localhost:1234](http://localhost:1234).

### Деплой

Сборка будет автоматически собирать и деплоить продакшен версию проекта на GitHub Pages, в ветку
`gh-pages`, каждый раз когда обновляется ветка `main`. Например, после прямого пуша или принятого
пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле `homepage` и скрипт
`build`, заменив `имя_пользователя` и `имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
"scripts": {
  "build": "parcel build src/*.html --public-url /имя_репозитория/"
},
```

На всякий случай стоит зайти в настройки репозитория `Settings` > `Pages` и убедиться что продакшен
версии файлов раздаются из папки `/root` ветки `gh-pages`.

Через какое-то время живую страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`, например
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`, заранее оптимизировав их. Сборщик просто копирует
  используемые изображения чтобы не нагружать систему оптимизацией картинок, так как на слабых
  компьютерах это может занять много времени.
