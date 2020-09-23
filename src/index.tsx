import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './index.helmet';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReactApp />, document.getElementById('root'));

serviceWorker.register();
