import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './index.helmet';
import * as serviceWorker from './serviceWorker';

/**
 * Website is still under construction
 */

ReactDOM.render(<ReactApp />, document.getElementById('root'));

serviceWorker.register();
