import React , {useState} from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Result from './components/Result';

import './App.css';


function App() {
  const [index, setIndex] = useState(null)

  const calculateIndex = (text) => {
    const chunkArray = text.split('')
  

    // The array containing the openings
    let previousOpensArray= []

    // The array of the closings
    let previousClosuresArray = []

    let falseIndex

    let lastOpenedplace = 1

    // The last element of the array containing the previous openings
    let lastOpening

    // the matching  closing of the last opening in the 'previousOpensArray'
    let closingOfLastOpening 

   
    
    for (let i =0; i < chunkArray.length; i ++){
      console.log("the element is ")
      console.log(chunkArray[i])
      console.log(`Its place is: ${i}`)
      // If the element is an opening 

      if(chunkArray[i] ==="(" || chunkArray[i] ==="[" || chunkArray[i] ==="{" || chunkArray[i] ==="<")  {
     
        console.log("------------------------------")

        // If the closures array is not empty and not having the same amount of the openings array it is a mistake
        // if (previousClosuresArray.length>0 && previousClosuresArray.length!== previousOpensArray.length){
        //   console.log(`the index is: ${i} and previousClosuresArray length is : ${previousClosuresArray}`)
        //   break;

        // }

        // We push it to the array of oppenings
   
        previousOpensArray.push({element:chunkArray[i], status:true})
        console.log("the array of previousOpensArray is:")
        console.log(previousOpensArray)
        // We put the last opening againg to the last one in openings array
        lastOpenedplace=1
       
        console.log("lastOpenedplace is:")
        console.log(lastOpenedplace)
        console.log("------------------------------")
       
      }
      // If the element is a closing 

      else if (chunkArray[i] ===")" || chunkArray[i] ==="]" || chunkArray[i] ==="}" || chunkArray[i] ===">")
      {
        // The element should be matching the right closing of the last opening in the 'previousOpensArray'
        console.log("------------------------------")
        lastOpening = previousOpensArray[previousOpensArray.length-lastOpenedplace].element
        console.log("lastOpening is:")
        console.log(lastOpening)

        switch (lastOpening) {
          case "(":
            closingOfLastOpening = ")";
            break;
    
            case "[":
            closingOfLastOpening = "]";
            break;
    
            case "{":
              closingOfLastOpening = "}";
              break;
    
              case "<":
                closingOfLastOpening = ">";
                break;
          default:
         
        }
       
   
        if (chunkArray[i] !== closingOfLastOpening ) {

          
          falseIndex =i
                  
        }
        else if (chunkArray[i] === closingOfLastOpening )
        {
          // If it is matching we move to the next one and match it with the opening before the one that was the last opening
            // previousClosuresArray.push(chunkArray[i] )
            // console.log("the array of previousClosuresArray is:")
            // console.log(previousClosuresArray)
          
            previousOpensArray[previousOpensArray.length-lastOpenedplace].status=false
            console.log("it is matching with the last opened one so we make is false this one:")
            console.log(previousOpensArray[previousOpensArray.length-lastOpenedplace])
           

            let c = previousOpensArray.length
            lastOpenedplace= 1
            console.log(`c equals: ${c}`)

            console.log(`lastOpenedplace first is: ${lastOpenedplace}`)

            while(c!==0 && 
              
              previousOpensArray[c-1].status === false){
                console.log(" previousOpensArray[c-1] is:")
                console.log(previousOpensArray[c-1])

              lastOpenedplace++
              c=c-1
            }
            console.log(`lastOpenedplace after is: ${lastOpenedplace}`)

          
        }
        console.log("------------------------------")
      }


    }
    

    
    
    
    
 setIndex(falseIndex)

}
  return (
    <div className="App">
    <Navbar />
    <Form calculateIndex={calculateIndex}/>
    <Result index={index}/>
    
    </div>
  );
}

export default App;
