import React from 'react';
function Newquestion_input(props) {
    function sendDataToParent(data){
            props.data(data);
    }
    return(
        <div className='container'>
            <div className='questioncontainer'>
                <p className='question' >
                    <input className='inputpin' placeholder='Enter your question' type="text" onKeyUp={event => sendDataToParent(event.target.value)} />
                </p>
            </div>
        </div>
    )
}
export default Newquestion_input;