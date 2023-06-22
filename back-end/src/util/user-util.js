import fs from 'fs/promises';

export async function readData() {
  const data = await fs.readFile('users.json', 'utf8');
  return data === '' ? '{}' : data;
}

export async function writeData(data) {
  await fs.writeFile('users.json', JSON.stringify(data));
}
