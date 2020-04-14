import React, { useState } from "react";
import Col from "../components/Col";
import { data, statusIcons } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);

    return (
        <div className="row">
            {["open", "in progress", "in review", "done"].map(status => {
                return (
                    <div key={status} className={"col-wrapper"}>
                        <div className={"col-group"}>
                            <h5 className={"col-header"}>{status.toUpperCase()}</h5>
                            <p className={"col-count"}>{items.filter(i => i.status === status).length}</p>
                        </div>
                        <Col>
                            {items
                                .filter(i => i.status === status)
                                .map(i => (
                                    <div key={i.id}>Item! {i.content}</div>
                                ))
                            }
                            <button onClick={e => onAddItem(status)}>
                                Add ticket
                            </button>
                        </Col>
                    </div>
                )
            })}
        </div>  
    );
};

export default Homepage;