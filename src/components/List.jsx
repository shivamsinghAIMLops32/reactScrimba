import React from 'react'

const List = (props) => {
  return (
      <ul>
        <li style={{listStyle: 'none',marginTop: '10px',marginBottom: '10px',paddingLeft: '10px'}}>{props.listContent}</li>
    </ul>
  )
}

export default List;