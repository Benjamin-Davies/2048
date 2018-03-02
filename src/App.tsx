import * as React from 'react';

import Game from './Game';

class App extends React.Component {
  public render() {
    return (
      <div>
        <header className="center container">
          <h1>2048</h1>
          <p>
            This is not an original game. I made this game to expand my skills,
            not to claim credit for the idea. You are welcome to play this game
            and to share my work.
          </p>
          <p>
            <a className="btn-flat" href="https://benjamin-davies.github.io/">
              My Site
            </a>
            <a className="btn-flat" href="https://github.com/benjamin-davies/">
              My GitHub profile
            </a>
          </p>
        </header>
        <main className="center">
          <Game />
        </main>
        <footer className="page-footer blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Credits</h5>
                <p className="grey-text text-lighten-4">
                  This is not an original game.
                </p>
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
                      href="https://gabrielecirulli.github.io/2048/"
                    >
                      Original Game
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
              © 2017 Benjamin Davies - Free for use under MIT liscence
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
