import './index.sass';
import 'normalize.css';

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Главнfая','Обо мне','Портфолио','Блог'],'menu');
document.body.appendChild(menu);


console.log('index');