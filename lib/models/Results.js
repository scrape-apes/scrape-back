import pool from '../utils/pool.js';

export default class Results{
  resultsId;
  userId;
  results;

  constructor(row){
    this.resultsId = row.results_id;
    this.userId = row.user_id;
    this.results = row.results;
  }

  static async create({userId, results}){
    console.log(userId)
    const {rows} = await pool.query(`
    INSERT INTO results (user_id, results) VALUES ($1, $2) RETURNING *`
    ,[userId, results])

    return new Results(rows[0])
  }

}