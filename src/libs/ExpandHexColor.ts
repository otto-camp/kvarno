export default function expandHex(hex: string) {
  hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  return `#${hex}`;
}
