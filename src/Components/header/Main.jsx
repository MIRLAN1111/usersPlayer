import React, { useEffect, useState } from "react";
import Maincss from "./Main.css";
const Main = () => {
	const [data, setData] = useState([]);
	const [inputSet, setInput] = useState("");
	const [inputLoc, setInputLoc] = useState("");
		useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => setData(json));
	}, []);

	const deleteUsers = () => {
		setData([]);
	};
	async function resultGet() {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const dataResult = await res.json();
			setData(dataResult);
		} catch (e) {
			console.error(e);
		}
	}
	useEffect(() => {
		resultGet();
	}, []);
	useEffect(() => {
		localStorage.setItem("", inputSet);
	}, [inputSet]);

	useEffect(() => {
		console.log(inputLoc.length);
	}, [inputLoc]);
	return (
		<div>
			<div id="USERSBUTTONS">
				<button onClick={resultGet} id="ADDGET">
					ADD
				</button>
				<button onClick={deleteUsers} id="deleteAdd">
					DELETE
				</button>

				<input
				 id="input2"
					onChange={(e) => setInput(e.target.value)}
					value={inputSet}
					type="text"
					placeholder="НАПИШИТЕ"
				/>
				<input 
				id="input3"
					onChange={(e) => setInputLoc(e.target.value)}
					value={inputLoc}
					type="text"
					placeholder="НАПИШИТЕ"
				/>
			</div>
			<div id="PLAYER3">
				{data.map((item) => {
					return (
						<div id="player2">
							<h3 id="playaer1">{item.name}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Main;
