import React from 'react';

/*
	Container to hold question and options 


	TODO :
	 replace options with map
*/
function Play(){

	return(
	<div>
	   <Question {question}/>
	   <Option {option1}/>
	   <Option {option2}/>
	   <Option {option3}/>
	   <Option {option4}/>
	</div>
	);
}

export default Play;
