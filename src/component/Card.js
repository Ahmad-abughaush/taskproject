import React from "react";
import Form from "./Form";
import { useState, useEffect } from "react";
import "../css/Card.css"

export default function Card({ taskTitle, taskDescription, taskPriority }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("formData"));
        if (data) {
            setData(data);
        }
    }, []);

    const handleDelete = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
        localStorage.setItem("formData", JSON.stringify(updatedData));
    };

    return (
        <>
        
            {data.map((item, index) => (
                <div key={index} id="cardinput">
                    <h3>Task Title: {item.taskTitle}</h3>
                    <p>Task Description: {item.taskDescription}</p>
                    <p>Task Priority: {item.taskPriority}</p>
                    <button id="deletebtn" onClick={() => handleDelete(index)}
                    > Delete</button>
                </div >
            ))
            }
        </>);

}

