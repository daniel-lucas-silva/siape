import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';

import 'framework7/css/framework7.bundle.css';
import './css/icons.css';
import './css/app.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

Framework7.use(Framework7React);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
