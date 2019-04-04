import {
  configure
} from 'enzyme';

let Adapter;
if (process.env.REACT === '15') {
  Adapter = require('enzyme-adapter-react-15'); // eslint-disable-line
} else {
  Adapter = require('enzyme-adapter-react-16');
}

configure({
  adapter: new Adapter()
});