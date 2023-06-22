import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;
import { v4 as generateId } from 'uuid';
import { readData, writeData } from './user-util.js';

export async function add(data) {
  const storeFileData = await readData();
  const storedData = JSON.parse(storeFileData);
  const userId = generateId();
  const hashedPw = await hash(data.password, 12);
  if (!storedData.users) {
    storedData.users = [];
  }
  storedData.users.push({ ...data, password: hashedPw, id: userId });
  await writeData(storedData);
  return { id: userId, email: data.email };
}

export async function get(email) {
  const storeFileData = await readData();
  const storedData = JSON.parse(storeFileData);
  if (!storedData.users || storedData.users.length === 0) {
    throw new Error('Could not find any users.');
  }

  const user = storedData.users.find((ev) => ev.email === email);
  if (!user) {
    throw new Error('Could not find user for email ' + email);
  }

  return user;
}

