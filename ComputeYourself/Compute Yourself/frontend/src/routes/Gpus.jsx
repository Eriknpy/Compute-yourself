import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../componentsFolder/Card/CardOfProduct"
import React from 'react';
import axios from "axios";

export default function Gpus() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://localhost:7195/product/gpu").then(
            (response) => {
                setData(response.data);
            });
    }, []);

    return (
        <div className='cpus'>
            <button
                title="Go to Details"
                onClick={() => navigate(`/product/addnewgpu`, { replace: true, state: { formData: data, productType: "gpu" } }
                )}
            >Add new</button>
            <Card dataProperties={data} productType="gpu" />
        </div>
    )
}