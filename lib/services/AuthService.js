import Auth from '../models/Auth.js';
import bcrypt from 'bcryptjs';

export default class AuthService {
  static async create({ username, password }) {
    const user = await Auth.findByUsername(username);
    if(user){
      throw new Error('Username already exists');
    }
    const passwordHash = await bcrypt.hash(password, Number(process.env.SALT));

    return Auth.signUp(username, passwordHash);
  }

  static async authenticate({ username, password }) {
    const user = await Auth.findByUsername(username);

    if (!user) {
      throw new Error('Username does not exist');
    }

    const matchingPassword = await bcrypt.compare(password, user.passwordHash);
    if (!matchingPassword) {
      throw new Error('Incorrect password');
    }

    return user;
  }
}
