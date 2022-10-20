import React from 'react'
import './App.css';
import Counter from './components/counter'
import CounterHooks from './components/counterHooks';
import Dice from './components/dice';
import Beginner from './components/begginer';
import Random from './components/random';
import RandomHooks from './components/randomHooks';
import GiphyHooks from './components/giphyHooks';
import Lifecycle from './components/lifecycle';
import Main from './GifLifecycle/Main';
import Timer from './components/timer';

class App extends React.Component {

  render() {
    return <div>
      <Timer />
    </div>
  }
}
export default App;
