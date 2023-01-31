import { useEffect, useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import Button from '@material-ui/core/Button';
import Card from "../componentsFolder/Card/CardOfProduct"
import Grid from "@mui/material/Grid";
import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Drives() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://localhost:7195/product/drive").then(
            (response) => {
                setData(response.data);
            });
    }, [data]);
    return (
        <>
            <Grid item md={10}>
            <Button variant="outlined" size="medium" 
                title="Go to Details"
                onClick={() => navigate(`/product/addnewdrive`, { replace: true, state: { formData: data, productType: "drive" } }
                )}
            ><AddIcon color="success" ></AddIcon>DRIVE</Button>
            </Grid>
            <Card dataProperties={data} productType="drive" />
            </>
    )
}