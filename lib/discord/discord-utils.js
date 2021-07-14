export function search(string) {
  return string.split(' ').slice(1).join(' ');
}

export function city(string) {
  return string.split('-c ')[1];
}
