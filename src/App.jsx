import React from 'react';
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Model from './components/Model';
import Features from './components/Features';

import * as Sentry from '@sentry/react';

function App() {
  // return <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;
  return (
    <main className='bg-black'>
<Navbar/>
<Hero/>
<Highlights/>
<Model/>
<Features/>
    </main>
  )
}

export default Sentry.withProfiler(App);