import React from 'react';

const Validation = (props) => {
 
 let result = 'Text too short';

 if(props.text.length > 5){
    result ='Text long enough'
 }

 return (
    <p>{result}</p>
 )
}

export default Validation