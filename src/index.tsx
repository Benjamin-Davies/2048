import 'materialize-css/dist/css/materialize.min.css';
import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
