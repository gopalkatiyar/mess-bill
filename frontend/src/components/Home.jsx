import Check from "./check";
import DataCard from "./dataCard";


const Home = () => {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-4xl font-bold mb-4">Check your Mess bill</h1>
			<p className="text-lg">You can easily check your bill with the help of your room number</p>
			<Check />
		    <DataCard/>
		</div>
	);
};

export default Home;