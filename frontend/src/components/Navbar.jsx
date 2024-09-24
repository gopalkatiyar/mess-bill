import { Link } from "react-router-dom";


const Navbar = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-red-500 text-2xl font-bold">
					<Link to="/">mess bill</Link>
				</div>
				<ul className="flex space-x-4">
					<li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
					<li><Link to="/upload" className="text-white hover:text-gray-400">Upload bill</Link></li>
					<li><Link to="" className="text-white hover:text-gray-400">Services</Link></li>
					<li><Link to="" className="text-white hover:text-gray-400">Contact</Link></li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;