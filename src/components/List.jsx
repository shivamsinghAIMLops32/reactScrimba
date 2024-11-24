import React from 'react'

const List = (props) => {
  return (
      <ol>
        <li>{props.listContent}</li>
    </ol>
  )
}

export default List;