// import React from 'react'
import Main from './component/Main'
import AddDel from './component/AddDel'

export default function Add_Del(prop) {
    const { CurrentUserContext } = prop
  return (
   <>
    <Main CurrentUserContext={CurrentUserContext}></Main>
    <AddDel CurrentUserContext={CurrentUserContext}></AddDel>
   </>
  )
}
