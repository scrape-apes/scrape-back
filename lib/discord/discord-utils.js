export function search(string) {
  const search = string.split('-c ')[0];
  return search.split(' ').slice(1).join(' ');
}

export function city(string) {
  return string.split('-c ')[1];
}
