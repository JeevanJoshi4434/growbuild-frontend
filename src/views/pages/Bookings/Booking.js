import React from "react";

const Booking = () => {
  return (
    <>
      <div className="container bg-white p-2 rounded-2">
        <div className="row px-4 py-4 mx-2 my-2 shadow-lg">
          <h3 className="text-alternate text-primary"> Bookings</h3>
          <hr />
        </div>
        <div className="row px-4 py-4 mx-2 my-2 shadow-lg">
          <h3 className="text-alternate text-primary">All Bookings</h3>
          <hr />

          {/* Datatable Here */}

        </div>
      </div>
    </>
  );
};

export default Booking;
