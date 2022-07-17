import React from 'react'

interface Props {
  text:string
}

const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input type="text"/>
    </div>
  )
}

export default TextField