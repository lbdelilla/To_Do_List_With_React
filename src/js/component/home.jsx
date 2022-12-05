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
				Made by <a href="https://github.com/lbdelilla" target="_blank">Lulu Belén</a>, with ❤️!
			</div>
		</div>
	);
};

export default Home;


