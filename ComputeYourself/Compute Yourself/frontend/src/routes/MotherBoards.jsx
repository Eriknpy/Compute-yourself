import { useEffect, useState } from "react";
import Card from "../componentsFolder/Card/CardOfProduct"
import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from "@mui/material/Grid";

export default function MotherBoards() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://localhost:7195/product/motherboard").then(
            (response) => {
                setData(response.data);
            });
    }, []);
    
    return (
        <>
            <Grid item md={10}>
            <Button variant="outlined" size="small" 
                title="Go to Details"
                onClick={() => navigate(`/product/addnewmotherboard`, { replace: true, state: { formData: data, productType: "motherboard" } }
                )}
            >Add new</Button>
            </Grid>
            <Card dataProperties={data} productType="motherboard" />
        </>
    )
}