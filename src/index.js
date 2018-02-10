import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Import App composed of components
import App from './App.jsx'

// Import custom styles
import 'bootstrap/dist/css/bootstrap.css'
import './Utilities/custom.css'

// FontAwesome
import './Utilities/fa/fontawesome-all.css'

// Render app to page
render(<App />, window.document.getElementById('root'))

// Cache
// https://stackoverflow.com/questions/47953732/what-does-registerserviceworker-do-in-react-js
registerServiceWorker()
