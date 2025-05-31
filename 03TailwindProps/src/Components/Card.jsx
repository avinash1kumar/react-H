import React from "react";

// function Card(Props) {
//   console.log(Props)
function Card({ userName, numberValue = "No. 20. 2030" }) {
  return (
    <>
      <div className=" rounded-4xl m-2 bg-emerald-900">

        <div className="flex flex-col items-center p-7 rounded-2xl">
          <div>
            <img
              className="size-48 shadow-xl rounded-md"
              alt=""
              src="https://images.unsplash.com/photo-1746483965479-60900adf61b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <p className="text-2xl font-medium">Class Warfare</p>
            <p className="font-semibold text-xl text-sky-500">{userName}</p>
            <p className="text-green-300 font-semibold">{numberValue}</p>
            {/* <p className="text-green-300 font-semibold">{numberValue || "No. 20. 2030"}</p> */}
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
