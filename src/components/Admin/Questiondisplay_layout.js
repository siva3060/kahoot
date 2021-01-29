/*
import React,{useState} from 'react';
import Question from './Question';
import Options from './Options';
import Result from '../Result/Result';


function Questiondisplay_layout(params) {
    const [submit,setSubmit]  = useState(false);
    const [nextque,setNextQue]  = useState(false);
    const Resultfun = () =>{ setSubmit(true); }
    const NextQuestion = () =>{ setNextQue(true); setSubmit(false);}
    return( 
        <div className='container'>
            {(submit) ? <Result fun2={NextQuestion} /> : <div><Question que='Question.'/><Options opt1='Option1' opt2='Option2' opt3='Option3' opt4='Option4' fun1={Resultfun} /></div> }  
        </div>
    )
}
export default Questiondisplay_layout; 
*/