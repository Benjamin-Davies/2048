import * as React from 'react';

import Game from './Game';

class App extends React.Component {
  public render() {
    return (
      <div>
        <header className="center container">
          <h1>2048</h1>
        </header>
        <main className="center">
          <Game />
        </main>
        <section className="container">
          <p>
            Swipe or use the arrow keys to move the tiles around the 4&times;4
            grid. Combine 2 tiles of the same type to form their sum. The goal
            is to either get the highest score, or to form the 2048 tile.
          </p>
          <p>
            I made this game clone a while ago now. I have re-visited it to fix a couple of bugs but overall it is the same as it was in 2017. I would appreciate it if you checked out some of my{' '}
            <a href="/">more recent projects.</a>
          </p>
        </section>
        <footer className="page-footer blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Credits</h5>
                <p className="grey-text text-lighten-4">
                  Made using React and Materialize.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://benjamin-davies.github.io/"
                    >
                      My Site
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://github.com/benjamin-davies/"
                    >
                      My GitHub profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://reactjs.org/"
                    >
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="http://materializecss.com/"
                    >
                      Materialize
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2017 Benjamin Davies
              <a
                className="grey-text text-lighten-4 right"
                href="https://benjamin-davies.github.io/"
              >
                My Website
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
