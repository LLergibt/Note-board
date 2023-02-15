import Pool from 'pg'
const Connection = Pool.Pool


const pool = new Connection({
  user: 'gosha',
  host: 'localhost',
  database: 'notes',
  password: 'ggrttr',
  port: 5432,
})
export default pool
