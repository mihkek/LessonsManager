
//in helps by this code, i cat send params in a component what calls in a route
<Route
                path="/Sing in"
                render={props => <LoginForm logied="false" {...props} />}
            />

//this function generated automaticly while the app was creating. May be, some blocks of code i will use in the future
function App(props) {

    //Getting data from back-app. IMPORTATNT! DONT DELETE IT!
    const [data, setData] =  useState(null)
  
    useEffect(() => {
        fetch("testReact")
        .then(response => response.json())
        .then(response => setData(response.message))
    }, [])
  
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {testElem}
          {props.test}
          <Clock date={new Date()} />
          <p>
            {
              !data ? "Loading" : data
            }
            </p>
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
      </div>
    );
  }


  function App(props) {

    //Getting data from back-app. IMPORTATNT! DONT DELETE IT!
    const [data, setData] =  useState(null)
  
    useEffect(() => {
        fetch("testReact")
        .then(response => response.json())
        .then(response => setData(response.message))
    }, [])
  
  
    return (
      <div className>
         
          <LoginForm />
          {/* {testElem}
          {props.test}
          <Clock />
          <SimpleTimer increment = {1} /> */}
          {/* <p>
            {
              !data ? "Loading" : data
            }
            </p> */}
      </div>
    );
  }