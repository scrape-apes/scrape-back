import Auth from '../models/Auth.js';
import bcrypt from 'bcryptjs';

export default class AuthService {
  static async create({ username, password }){
    const passwordHash = await bcrypt.hash(password, Number(process.env.SALT)); 

    return Auth.signUp(username, passwordHash);
  }
}
