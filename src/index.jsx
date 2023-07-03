import React from 'react';
// import ReactDOM from 'react-dom'; Это в старой версии реак
import ReactDOM from 'react-dom/client'; /*Это в новой версии */


import App from './components/app/app'

// ReactDOM.render(<App />, document.getElementById('root'))  Это в старой версии реакт
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />) /*Это в новой версии */
