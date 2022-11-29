import Body from './components/body';
import Header from './components/header';
import Share from './components/share';
import './global/style.css'
import Provider from './context/provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Body />
        <Share />
      </Provider>
    </div>
  );
}

export default App;
