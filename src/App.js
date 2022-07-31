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

    let falseIndex

    let lastOpenedplace = 1

    // The last element of the array containing the previous openings
    let lastOpening

    // the matching  closing of the last opening in the 'previousOpensArray'
    let closingOfLastOpening 

   
    
    for (let i =0; i < chunkArray.length; i ++){
   
      // If the element is an opening 

      if(chunkArray[i] ==="(" || chunkArray[i] ==="[" || chunkArray[i] ==="{" || chunkArray[i] ==="<")  {
     
        // We push it to the array of oppenings
   
        previousOpensArray.push({element:chunkArray[i], status:true})
    

        // We put the last opening againg to the last one in openings array
        lastOpenedplace=1
     
       
      }
      // If the element is a closing 

      else if (chunkArray[i] ===")" || chunkArray[i] ==="]" || chunkArray[i] ==="}" || chunkArray[i] ===">")
      {
        // The element should be matching the right closing of the last opening in the 'previousOpensArray'
   
        lastOpening = previousOpensArray[previousOpensArray.length-lastOpenedplace].element
      

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
          
            previousOpensArray[previousOpensArray.length-lastOpenedplace].status=false
          
            let c = previousOpensArray.length
            lastOpenedplace= 1
         
            while(c!==0 && 
              
              previousOpensArray[c-1].status === false){
              
              lastOpenedplace++
              c=c-1
            }
        

          
        }
  
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
