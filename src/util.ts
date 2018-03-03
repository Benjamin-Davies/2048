import { Direction } from './Game';

/**
 * Convert coordinates into a string for the key of a SquareMap
 */
export function coords(x: number, y: number) {
  return `${x},${y}`;
}

/**
 * Convert coordinates into a string for the key of a SquareMap using a direction
 */
export function coordsDir(x: number, y: number, dir: Direction) {
  switch (dir) {
    case Direction.Up:
      return coords(x, y);
    case Direction.Right:
      return coords(3 - y, x);
    case Direction.Down:
      return coords(x, 3 - y);
    case Direction.Left:
      return coords(y, x);
    default:
      return '';
  }
}

/**
 * Convert a string into coordinates
 */
export function deconCoords(s: string) {
  return s.split(',').map(x => parseInt(x, 10));
}

const colors = [
  'red',
  'grey lighten-5',
  'grey lighten-5',
  'grey lighten-4',
  'grey lighten-4',
  'grey lighten-3',
  'grey lighten-3',
  'grey lighten-2',
  'grey lighten-2',
  'grey lighten-1',
  'grey lighten-1',
  'light-green lighten-2'
];
const LOG2 = Math.log(2);

/**
 * Get's the square's materialize-css color class
 * @param value Number to be displayed on the square
 */
export function getSquareColor(value: number) {
  return colors[Math.log(value) / LOG2];
}

/**
 * Pick a random value for a square to start with
 */
export function randomStartValue() {
  return 2 + 2 * Math.floor(2 * Math.random());
}

/**
 * Pick a random single coordinate for a square
 */
export function randomSquare() {
  return Math.floor(4 * Math.random());
}
