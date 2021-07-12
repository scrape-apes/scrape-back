import pool from '../utils/pool.js';
import jwt from 'jsonwebtoken';

export default class Auth{
  id;
  username;
  passwordHash;

  constructor(row){
    this.id = row.id;
    this.username = row.username;
    this.passwordHash = row.password_hash;
  }

  static async signUp(username, passwordHash) {
    const {rows} = await pool.query(`
    INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username`
    ,[username, passwordHash])

    return new Auth(rows[0])
  };

  static async findByUsername(username){
    const {rows} = await pool.query(`
    SELECT * FROM users WHERE username = $1`
    ,[username])

    if(!rows[0]) return null;
    return new Auth(rows[0]);
  }

  authToken(){
    return jwt.sign({ ...this }, process.env.APP_SECRET, {
      expiresIn: '48h'
    });
  };

  toJSON(){
    return {
      id: this.id,
      username: this.username
    }
  };
}
