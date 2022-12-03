import React from "react";

//include images into your bundle


import AddTask from "./addtask.jsx";

//create your first component
const Home = () => {
	return (
		<div className="toDoList">	
			<div className="text-center">
				<h1 className="text-center mt-5">To Do List</h1>
			</div>
			<AddTask/>
			<div className="footer text-center">
				Made by <strong>Lulu Belén</strong>, with ❤️!
			</div>
		</div>
	);
};

export default Home;


