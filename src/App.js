import logo from './logo.svg';
import './App.css';

function App() {
  console.log("soha")



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <section className="container-fluid d-flex flex-column h-100vh">

        <header className="flex-fill row">
          <div className="py-3 border align-items-center col bg-primary border-primary">
            <h2 className="text-center text-white">Header</h2>
          </div>
        </header>
        <section className="flex-fill row">
          <aside
              className="order-2 py-3 border align-items-center col-12 order-md-1 col-md-3 bg-primary border-primary">
            <h2 className="text-center text-white">Sidebar1</h2>
          </aside>
          <main className="order-1 py-3 border col-12 order-md-2 col-md-6 bg-primary border-primary">
            <h2 className="text-center text-white">Main</h2>
          </main>
          <aside className="order-3 py-3 border col-12 order-md-3 col-md-3 bg-primary border-primary">
            <h2 className="text-center text-white">Sidebar2</h2>
          </aside>
        </section>
        <footer className="flex-fill row">
          <div className="py-3 border align-items-center col bg-primary border-primary">
            <h2 className="text-center text-white">Footer</h2>
          </div>
        </footer>
      </section>


    </div>







  );
}

export default App;
