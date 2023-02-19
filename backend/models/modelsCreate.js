import {Boards, Types} from './board.js'
import {Note, PropertyTitle} from './notes.js'
import sequelize from './dbConnect.js'
import createTypes from './createTypes.js'
import {QueryTypes} from 'sequelize'


const createTables = async () => {
  const gg = await sequelize.query("SELECT  COUNT(table_name) FROM information_schema.tables WHERE table_name = 'boards' ", { type: QueryTypes.SELECT })
  if (gg[0].count !== '1') {
    await sequelize.sync()
    await createTypes()
  }
}


export default createTables


