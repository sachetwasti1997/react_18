import React, {startTransition, useState} from "react";

const selectList = [1000, 10000, 100000]

const create_array = (range) => {
    const arr = []
    for (var i=0; i<= range && i <= 100000; i++){
        arr[i] = range - i
    }
    return arr
}

const GenerateNumbers = ({setNumberRange}) => {

    const [maxRange, setMaxRange] = useState(selectList[0])

  return(
      <div
        style={{marginTop:'50px'}}
      >
          <input
            type={"range"}
            min={"0"}
            max={maxRange}
            style={{width:"90%"}}
            onChange={event => {
               startTransition(() => setNumberRange(create_array(event.target.value)))
            }}
          />
          <select
              onChange={event => {
                  setMaxRange(event.target.value)
              }}
          >
              {selectList.map((v) => (
                  <option key={v} value={v}>
                      {v.toLocaleString()}
                  </option>
              ))}
          </select>
      </div>
  )
}

export default GenerateNumbers