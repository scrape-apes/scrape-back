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
    const {rows} = await pool.query(`
    INSERT INTO results (user_id, results) VALUES ($1, $2) RETURNING *`
    ,[userId, results])

    return new Results(rows[0])
  }

  static async getResultsByUserId(id){
    const {rows} = await pool.query(`
    SELECT * FROM results WHERE user_id = $1`
    ,[id])
    
    if(!rows[0]) return null;
    return rows.map(item => new Results(item))
  }

  static async deleteResultsByResultsId({userId}, id){
    const { rows} = await pool.query(
      `DELETE FROM results WHERE user_id = $1 AND results_id = $2
      RETURNING *
    `, [userId, id])

    return new Results(rows[0])
  }
}