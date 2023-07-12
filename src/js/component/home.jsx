import React from "react";
import ToDoList from "./todolist";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container-fluid text-center">
			<h1 className="mt-2" style={{fontFamily: 'Mynerve', fontSize: '3rem'}}>You've Got Stuff To Do, Bucko!</h1>
			<ToDoList />
		</div>
	);
};

export default Home;
