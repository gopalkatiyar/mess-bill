import { useSelector } from "react-redux";

const DataCard = () => {
	const data = useSelector((state) => state.data.data);
	  const ok = useSelector((state) => state.data.ok);
  console.log(data);
  const personData = data == 0 ? {} : data[0];
  console.log(personData);
  return (
    <div className="flex justify-center items-center bg-gray-100">
      {!ok ? (
        <div className="mt-4 p-6 bg-white shadow-lg w-2/3 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Welcome to the Mess billing System
          </h2>
          <p className="text-center text-lg">
            This website is managed by Gopal katiyar.Our goal is to provide a
            seamless and efficient management system for all our residents.
          </p>
        </div>
      ) : (
        <div className="mt-4 p-6 bg-white shadow-lg w-2/3 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Your Bill Details
          </h2>
          <div>
            <div className="text-xl my-4 text-center">
              <span className="font-semibold">Name: </span>
              {personData.Namee}
            </div>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <p className="text-lg">
                <span className="font-semibold">Room No: </span>
                {personData.RoomNo}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Extra: </span>
                {personData.Extra}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Off Rupee: </span>
                {personData.offRs}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Maintenance: </span>
                {personData.Main}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Diposit: </span>
                {personData.Diposit}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Balance: </span>
                {personData.Balance}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCard;
