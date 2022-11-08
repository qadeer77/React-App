import React from 'react'

function componenet() {
    const obj = {
        name: "hello world",
        fatehr: "data",
      }
  return (
    <>
        {
            obj.map((componenet)=>(
                <div>{componenet.name}</div>
            ))
        }
    </>
  )
}

export default componenet
