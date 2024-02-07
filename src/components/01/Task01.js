import React from 'react';

const Task01 = () => {
	return (
		<>
			<h1>Task 01</h1>
			<a href='https://trello.com/b/wy69Oe81/management'>Tablica trello</a>
			<img
				style={{
					display: 'block',
					height: '300px',
					width: '700px',
				}}
				src={require('./trelloPic.jpg')}
                // bez webpacka wymagany jest requre przy sciezce:|
				alt=''
			/>
		</>
	);
};
export default Task01;
