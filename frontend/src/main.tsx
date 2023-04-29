import { store } from '@/store'
import { Lenis as ReactLenis } from "@studio-freight/react-lenis"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import './index.css'

const options = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactLenis root options={options}>
        <App />
      </ReactLenis>
      <Toaster />
    </Provider>
  </React.StrictMode>,
)
