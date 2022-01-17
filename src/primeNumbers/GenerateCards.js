import React, {useState} from "react";
import GenerateNumbers from "./GenerateNumbers";
import "./numbers.css"

const GenerateCards = () => {
    
    const createCard = (num) => {

      return (
              <div className={`card`} style={{width:'10rem', marginRight:'5px'}}>
                  <div className="card-body">
                      <h5 className="card-title">{num}</h5>
                  </div>
              </div>
      )
    }

    const [numberRange, setNumberRange] = useState([])

    return(
        <div>
            <GenerateNumbers setNumberRange={setNumberRange}/>
            <div className={"wrap"}>
                {
                    numberRange?.map(
                        value => createCard(value)
                    )
                }
            </div>
        </div>
    )

}

export default GenerateCards