import './global/style.css'
import Routes from "./components/routes/index"
import Provider from './context/provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
