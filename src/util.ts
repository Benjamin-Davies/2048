export function coords(x: number, y: number) {
  return `${x},${y}`;
}

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

export function getSquareColor(value: number) {
  return colors[Math.log(value) / LOG2];
}

export function randomStartValue() {
  return 2 + 2 * Math.floor(2 * Math.random());
}

export function randomSquare() {
  return Math.floor(4 * Math.random());
}
