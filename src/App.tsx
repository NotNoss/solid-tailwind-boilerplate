import type { Component } from 'solid-js';

import logo from './logo.svg';

const App: Component = () => {
  return (
    <div class="text-center">
      <header class="bg-background min-h-screen flex flex-col items-center justify-center text-lg text-white">
        <img src={logo} class="animate-slow-spin h-logo pointer-events-none" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class="text-link"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
