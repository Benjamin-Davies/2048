import * as React from 'react';
import './Game.css';
import {
  coords,
  coordsDir,
  deconCoords,
  getSquareColor,
  randomSquare,
  randomStartValue
} from './util';

/**
 * One square
 */
interface Square {
  key: number; // Used for animations (implemented in css)
  value: number;
  x: number;
  y: number;
}

/**
 * One square without a position
 */
interface PositionlessSquare {
  key: number;
  value: number;
}

/**
 * Map of positions to position-less squares
 */
interface SquareMap {
  [_: string]: PositionlessSquare;
}

/**
 * Direction of move
 */
export enum Direction {
  Up,
  Right,
  Down,
  Left
}

/**
 * State of game
 */
interface State {
  squares: Square[];
  keyAcc: number;
}

/**
 * Component for the main game area
 */
export default class Game extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = { squares: [], keyAcc: 0 };
  }

  public componentDidMount() {
    document.addEventListener('keydown', e => {
      let dir: Direction;

      switch (e.key) {
        case 'ArrowUp':
          dir = Direction.Up;
          break;
        case 'ArrowRight':
          dir = Direction.Right;
          break;
        case 'ArrowDown':
          dir = Direction.Down;
          break;
        case 'ArrowLeft':
          dir = Direction.Left;
          break;
        default:
          return;
      }

      e.preventDefault();
      this.move(dir);
    });

    this.reset();
  }

  public render() {
    return (
      <div className="container">
        <p>
          <button className="btn" onClick={() => this.reset()}>
            Restart
          </button>
        </p>
        <div className="Grid grey lighten-3">
          {this.state.squares.map(s => (
            <div
              className={'Square ' + getSquareColor(s.value)}
              key={s.key}
              style={{
                '--num-length': ('' + s.value).length,
                '--x': s.x,
                '--y': s.y
              }}
            >
              {s.value}
            </div>
          ))}
        </div>
      </div>
    );
  }

  /**
   * Reset the squares to a random starting state
   */
  private reset() {
    const s1: Square = {
      key: 0,
      value: randomStartValue(),
      x: 0,
      y: 0
    };
    const s2: Square = {
      key: 1,
      value: randomStartValue(),
      x: 0,
      y: 0
    };

    while (s1.x === s2.x && s1.y === s2.y) {
      s1.x = randomSquare();
      s1.y = randomSquare();
      s2.x = randomSquare();
      s2.y = randomSquare();
    }

    this.setState({ squares: [s1, s2], keyAcc: 1 });
  }

  /**
   * Make a move
   * @param dir Direction of the move
   */
  private move(dir: Direction) {
    let keyAcc = this.state.keyAcc;
    let moved = false;

    const map: SquareMap = {};
    this.state.squares.forEach(
      ({ x, y, value, key }) => (map[coords(x, y)] = { value, key })
    );

    // Move squares
    for (let col = 0; col < 4; col++) {
      for (let row = 0; row < 4; row++) {
        let i = row;
        let square: PositionlessSquare | undefined;

        // Find a square to go into that cell
        for (; i < 4; i++) {
          const c = coordsDir(col, i, dir);
          if (map.hasOwnProperty(c)) {
            square = map[c];
            delete map[c];
            if (i > row) {
              moved = true;
            }
            i++;
            break;
          }
        }

        // Check if there are any more in the row
        for (; i < 4; i++) {
          const c = coordsDir(col, i, dir);
          if (map.hasOwnProperty(c)) {
            // If it is the same then merge
            if (
              typeof square !== 'undefined' &&
              map[c].value === square.value
            ) {
              square = { key: square.key, value: square.value * 2 };
              delete map[c];
              moved = true;
            }
            break;
          }
        }

        if (typeof square !== 'undefined') {
          const c = coordsDir(col, row, dir);
          map[c] = square;
        }
      }
    }

    if (!moved) {
      return;
    }

    // Find all the empty squares
    const emptySquares = [];
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (!map.hasOwnProperty(coords(x, y))) {
          emptySquares.push({ x, y });
        }
      }
    }

    // Generate new square if there is room
    if (emptySquares.length > 0) {
      keyAcc++;
      const key = keyAcc;
      const value = randomStartValue();
      const { x, y } = emptySquares[
        Math.floor(emptySquares.length * Math.random())
      ];

      map[coords(x, y)] = { key, value };
    }

    const squares: Square[] = [];
    for (const k in map) {
      if (map.hasOwnProperty(k)) {
        const { key, value } = map[k];
        const [x, y] = deconCoords(k);

        squares.push({
          key,
          value,
          x,
          y
        });
      }
    }

    squares.sort((a, b) => a.key - b.key);

    this.setState({
      keyAcc,
      squares
    });
  }
}
