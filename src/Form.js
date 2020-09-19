import React from "react";
import "./Form.css";

export default function Form() {
    return (
        <div className="Form">
            <i className="fas fa-map-marked-alt"></i>
            <form>
                <input
                    type="text"
                    placeholder="Search for a new City"
                    className="new-city-search"
                />
                <input type="submit" value="Go" className="my-location-button" />
            </form>
        </div>
    );
}
