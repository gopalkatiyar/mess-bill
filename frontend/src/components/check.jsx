import { useState } from "react";
import axios from "axios";

const Check = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
	//   const [error, setError] = useState(null);
	
  const [roomNo, setroomNo] = useState(null);

  const onChangeHandler = (e) => {
    setroomNo(e.target.value);
  };

  // function handleInputErrors({
  //   fullName,
  // }) {
  //   if (!fullName || !username || !password || !confirmPassword || !gender) {
  //     toast.error("Please fill in all fields");
  //     return false;
  //   }
  //   return true;
  // }

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/data?roomNo=${roomNo}`
      );
      setData(response.data);

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <label
        htmlFor="roomNo"
        className="block text-red-600 text-xl font-bold mb-2">
        Room Number:
      </label>
      <input
        type="text"
        placeholder="Enter room number"
        name="roomNo"
        className="shadow appearance-none border rounded w-30% py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChangeHandler}
        value={roomNo}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleSubmit}>
        Submit
      </button>
          
    </div>
  );
};

export default Check;
