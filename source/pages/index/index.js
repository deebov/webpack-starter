import 'normalize.css';
import './index.sass';

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Главнfая','Обо мне','Портфолио','Блог'],'menu');
document.body.appendChild(menu);


console.log('index');