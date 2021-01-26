import React from 'react';


function Question(params) {
    
    return(
        <div className='container'>
                <div className='questioncontainer'>
                    <p className='question' >
                   {params.que}
                    </p>
                    
                </div>
        </div>
    )
}
export default Question;