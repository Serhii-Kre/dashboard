import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import bcrypt from 'bcryptjs';

const KEY = 'serhii'; // just for dummy testing

export function createJSONToken(email) {
  return sign({ email }, KEY, { expiresIn: 60 * 10 });
}

export function validateJSONToken(token) {
  return verify(token, KEY);
}

export function isValidPassword(password, storedPassword) {
  return bcrypt.compare(password, storedPassword);
}

export function checkAuthMiddleware(req, res, next) {
  if (req.method === 'OPTIONS') {
    return next();
  }
  if (!req.headers.authorization) {
    console.log('NOT AUTH. AUTH HEADER MISSING.');
    return next(new Error('Not authenticated.'));
  }
  const authFragments = req.headers.authorization.split(' ');

  if (authFragments.length !== 2) {
    console.log('NOT AUTH. AUTH HEADER INVALID.');
    return next(new Error('Not authenticated.'));
  }
  const authToken = authFragments[1];
  try {
    const validatedToken = validateJSONToken(authToken);
    req.token = validatedToken;
  } catch (error) {
    console.log('NOT AUTH. TOKEN INVALID.');
    return next(new Error('Not authenticated.'));
  }
  next();
}


