import {Boards, Types} from './board.js'
import {Note, PropertyTitle} from './notes.js'
import sequelize from './dbConnect.js'

await sequelize.sync()


