export const useUpdateItem = (stateList, setStateList) => {
  const addPropertyInState = (data) => {
    const list = [...stateList]
    list.push(data)
    setStateList(list)
  }

  const changeDataInState = (data) =>  {
    const list = [...stateList]
    const b = list.findIndex((item) => item.id === data.id)
    list[b].data = data.data

    setStateList(list)
  }

  const changePropertyTitleInState = (data) =>  {
    const list = [...stateList]
    const b = list.findIndex((item) => item.property_id === data.property_id)
    list[b].title = data.title

    setStateList(list)
  }

  const removePropertyFromState = (propertyId) =>  {
    const list = [...stateList]
    const index = list.findIndex((item) => item.property_id === propertyId)
    list.splice(index, 1);
    setStateList(list)
  }
  return {
      addPropertyInState,
      changeDataInState,
      changePropertyTitleInState,
      removePropertyFromState
  }
}
