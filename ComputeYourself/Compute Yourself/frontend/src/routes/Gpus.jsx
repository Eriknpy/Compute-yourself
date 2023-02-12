import { useEffect, useState } from "react";
import { AxiosGet } from "../Axios/FetchWithAxios"
import AddIcon from '@mui/icons-material/Add';
import Button from '@material-ui/core/Button';
import Card from "../componentsFolder/Card/CardOfProduct"
import Grid from "@mui/material/Grid";
import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"

export default function Gpus() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [trigger, setTrigger] = useState("false");
    useEffect(() => {
        AxiosGet("gpu").then(
            (response) => {
                setData(response.data);
            });
        setTrigger("false");
    }, [trigger]);

    const { auth } = useAuth();
    const isAdmin = auth?.roles?.includes("Admin");
    const loggedIn = localStorage.getItem("isLoggedIn");
    const adminField = [];
    if (isAdmin && loggedIn === "true") {
        adminField.push(
            <Grid item md={10}>
                <Button variant="outlined" size="medium"
                    title="Go to Details"
                    onClick={() => navigate(`/product/addnewgpu`, { replace: true, state: { formData: data, productType: "gpu" } }
                    )}
                ><AddIcon color="success" ></AddIcon>Gpu</Button>
            </Grid>
        );
    }

    return (
        <>
            {adminField}
            <Card dataProperties={data} productType="gpu" trigger={setTrigger} />
        </>
    )
}