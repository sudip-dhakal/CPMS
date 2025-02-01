import React from "react";

const ComplainBox = () => {
  return (
    <>
      <div className=" rounded-md p-4 shadow-xl shadow-blue-700 w-[48%]  max-w-[400px] ">
        <span className="flex justify-between">
          <h1 className="font-semibold pb-4">Name</h1>
          <p>Date</p>
        </span>

        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure,
          repudiandae eaque quisquam autem error architecto iusto. Consectetur,
          similique atque? Quis repudiandae unde, nihil tempore quos quam dicta
          accusantium! In blanditiis mollitia iusto assumenda repudiandae
          nostrum sit vero minus laborum accusamus, facilis, perferendis enim
          ullam cum.
        </p>

        <button
          type="button"
          className=" w-full mt-4 text-xl hover:bg-blue-500 transition duration-300 bg-blue-700 px-4 py-2 text-white rounded-md ml-auto"
        >
          Reply
        </button>
      </div>
    </>
  );
};

export default ComplainBox;
