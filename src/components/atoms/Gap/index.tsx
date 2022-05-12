import React from 'react'

export type Props = {
  width: number;
  height: number
}

const Gap: React.FC<Props> = ({width, height}) => {
  return (
    <div style={{width, height}} className="inline-block" />
  )
}

export default Gap