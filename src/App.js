import sprite from './img/svg-sprite/sprite.svg';

function App() {
  return (
    <div className="App">
      <svg>
        <use href={sprite + '#logo'} />
      </svg>
    </div>
  );
}

export default App;
