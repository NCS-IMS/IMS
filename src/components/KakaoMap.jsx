import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";

import { Map } from "react-kakao-maps-sdk"

import ReportorInfo from "./ReportorInfo";
import HospitalInfo from "./HospitalInfo";


function KakaoMap( { mode } ) {

    const [state, setState] = useState({
        center: {
          lat: 36,
          lng: 127,
        }
      })
    
      useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setState((prev) => ({
                ...prev,
                center: {
                  lat: position.coords.latitude, // 위도
                  lng: position.coords.longitude, // 경도
                }
              }))
            }
          )
        }
      }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
                <Map
                    className="MuiPaper-elevation1"
                    center={state.center}
                    style={{ width:"100%", height: "87.7vh", borderRadius: "5px"}}
                >

                </Map>
            </Grid>
            <Grid item xs={12} lg={4}>
                {mode === "Home" &&
                    <ReportorInfo/>
                }
                {mode === "Hospital" &&
                    <HospitalInfo/>
                }
            </Grid>
        </Grid>
    )
}

export default KakaoMap;
