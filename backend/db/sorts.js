import sequelize from '../models/dbConnect.js';
import {SortsGroupBy} from '../models/sorts.js'

export const getGroupByProperty = async (userId, boardId) => {
  const [property, metadata] = await sequelize.query(`select sgb.id, title, property_id, user_id, sgb.board_id from sorts_group_by sgb left join property on sgb.property_id = property.id WHERE user_id=${userId} and sgb.board_id=${boardId}`)
  return property[0]
}
export const setGroupByProperty = async (body) => {
  const property = await getGroupByProperty(body.user_id, body.board_id)
  if (property) {
      const groupBy = await sequelize.query(`UPDATE sorts_group_by SET property_id='${body.property_id}' WHERE board_id=${body.board_id} and user_id=${body.user_id}`)
      return groupBy
    }
  const groupBy = SortsGroupBy.create(body)
  return groupBy


}

