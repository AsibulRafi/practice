import React, { useContext } from "react";
import { RoomContext } from "../context/context";
import Title from "./Title";
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const { handleChange } = context;
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value="10"
          >
            10
          </select>
        </div>
        {/* end of select type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
