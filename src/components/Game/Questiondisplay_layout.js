import React from 'react';
import Question from './Question';
import Options from './Options';


function Questiondisplay_layout(params) {
    
    return( 
        <div className='container'>
                <Question que='Question.'/>
                <Options opt1='Option1' opt2='Option2' opt3='Option3' opt4='Option4' />
        </div>
    )
}
export default Questiondisplay_layout; 