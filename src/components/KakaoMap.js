import React, { useEffect } from "react";

import { Grid } from "@material-ui/core";

import ReportorInfo from "./ReportorInfo";
import Test from './Test';

const { kakao } = window;

function KakaoMap( { mode } ) {
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
        new kakao.maps.Map(container, options);
    }, [])
    
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
                <div
                    className="MuiPaper-elevation1"
                    id="map"
                    style={{width:"100%", height:"87.7vh", borderRadius:"5px"}} // F11 버전 89.6vh 기본 버전 87.9vh 모바일 버전 81.7vh
                >
                </div>
            </Grid>
            <Grid item xs={12} lg={4}>
                {mode === "Home" &&
                    <ReportorInfo/>
                }
                {mode === "Hospital" &&
                    <Test/>
                }
            </Grid>
        </Grid>
    )
}

export default KakaoMap;
