import myRefs from './refs'
const { menu: myMenu } = myRefs
import data from '../templates/menu.json'
import boilerplate from '../templates/markup.hbs'

const markup = boilerplate(data);
myMenu.insertAdjacentHTML('afterbegin', markup);


