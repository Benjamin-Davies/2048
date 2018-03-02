import * as React from 'react';
import './Game.css';
import {
  coords,
  deconCoords,
  getSquareColor,
  randomSquare,
  randomStartValue
} from './util';

interface Square {
  key: number;
  value: number;
  x: number;
  y: number;
}

enum MoveType {
  Up,
  Right,
  Down,
  Left
}

export default class Game extends React.Component<
  {},
  { squares: Square[]; lastKey: number }
> {
  constructor(props: {}) {
    super(props);

    this.state = { squares: [], lastKey: 0 };
  }

  public componentDidMount() {
    document.addEventListener('keydown', e => {
      let type: MoveType;

      switch (e.key) {
        case 'ArrowUp':
          type = MoveType.Up;
          break;
        case 'ArrowRight':
          type = MoveType.Right;
          break;
        case 'ArrowDown':
          type = MoveType.Down;
          break;
        case 'ArrowLeft':
          type = MoveType.Left;
          break;
        default:
          return;
      }

      e.preventDefault();
      this.move(type);
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

    this.setState({ squares: [s1, s2], lastKey: 1 });
  }

  private move(type: MoveType) {
    let lastKey = this.state.lastKey;

    const map: { [_: string]: { value: number; key: number } } = {};
    this.state.squares.forEach(
      ({ x, y, value, key }) => (map[coords(x, y)] = { value, key })
    );

    const emptySquares = [];
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (!map.hasOwnProperty(coords(x, y))) {
          emptySquares.push({ x, y });
        }
      }
    }

    if (emptySquares.length > 0) {
      lastKey++;
      const key = lastKey;
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

        squares.push({ key, value, x, y });
      }
    }

    this.setState({ squares, lastKey });
  }
}
