import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from "./styles"

function Map({setCoordinates, setBounds, coordinates}) {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: "AIzaSyC-pp2aae6RJKzRL5_MTO6us6QWodDtta8" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={""}
            >
                
            </GoogleMapReact>
            
        </div>
    )
}

export default Map
