import {getGroupByProperty} from '../db/sorts.js'
import {choicesGet} from '../db/notes.js'
export const groupBy = async (req, res, next) => {
  const groupByProperty = await getGroupByProperty(1, 1)
  const choices = await choicesGet(groupByProperty.property_id)
  req.groupByChoices = choices
  req.groupByPropertyId = groupByProperty.property_id
  next()
}
