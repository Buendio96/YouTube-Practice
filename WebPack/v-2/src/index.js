import './index';
import './style';
import '@modules/welcome';
import greek from '@img/greek-ornament';

const imgWrap = document.getElementById('imgWrap')
const img = new Image();
img.src = greek;

imgWrap.append(img)