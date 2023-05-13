import React, { useState, useEffect } from "react";
import "../css/Form.css";
import { Link } from "react-router-dom";


export default function Form() {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("formData"));
        if (storedData) {
            setData(storedData);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newData = {
            taskTitle,
            taskDescription,
            taskPriority,
        };
        const updatedData = [...data, newData];
        setData(updatedData);
        localStorage.setItem("formData", JSON.stringify(updatedData));
        setTaskTitle("");
        setTaskDescription("");
        setTaskPriority("");
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset id="formhome">
                    <legend>Create Your Task</legend>
                    <div className="divP">
                        <div className="LabelInput">
                            <label>Task Title</label>
                            <input
                                className="forminput"
                                type="text"
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="divP">
                        <div className="LabelInput">
                            <label>Task Description</label>
                            <input
                                className="forminput"
                                type="text"
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="divP">
                        <div className="LabelInput">
                            <label>Task Priority</label>
                            <select
                                className="forminput"
                                value={taskPriority}
                                onChange={(e) => setTaskPriority(e.target.value)}
                            >
                                <option value="">--Please choose an option--</option>
                                <option value="Critical">Critical</option>
                                <option value="Normal">Normal</option>
                                <option value="Low Priority">Low priority</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" id="formsubmit" />
                </fieldset>
            </form>

            {/* {data.map((item, index) => (
        <Card
          key={index}
          customerName={item.customerName}
          accountNumber={item.accountNumber}
          accountType={item.accountType}
        />
      ))} */}
        </>
    );
}