import React from 'react';
import{Label} from 'semantic-ui-react';

function InlineError({message}){
    return(
      
        <Label basic color='red' pointing>
            Please enter a value
        </Label>
      
    )
}

export default InlineError