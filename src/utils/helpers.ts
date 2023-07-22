const colors = [
  'yellow',
  'orange',
  'red',
  'purple',
  'pink',
  'blue',
  'teal',
  'green',
  'cyan',
  'gray',
];

export function chakraRandomColor(variant = '') {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color + variant;
}
