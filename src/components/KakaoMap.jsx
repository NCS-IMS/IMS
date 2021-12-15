import React, { useState } from "react";

import { Grid } from "@material-ui/core";

import { Map, MapMarker } from "react-kakao-maps-sdk"

import ReportorInfo from "./ReportorInfo";

function KakaoMap({ mode, state, setState }) {

  const [reportState, setReportState] = useState("None")
  const [time, setTime] = useState("None")
  const [address, setAdress] = useState("None")
  const [medicine, setMedicine] = useState("None")
  const [anamnesis, setAnamnesis] = useState("None")

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <Map
          className="MuiPaper-elevation1"
          center={state.center}
          style={{ width: "100%", height: "87.7vh", borderRadius: "5px" }}
          level={4}
          onCenterChanged={(map) => {
            setState({
              center: {
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng()
              }
            })

          }}
        >
          <MapMarker
            position={{
              lat: 36.73649757,
              lng: 127.07326128
            }}
            onClick={() => {
              setReportState("화상")
              setTime("21년 10월 15일 19시 33분")
              setAdress("충남 아산시 배방읍 세출리 165")
              setMedicine("없음")
              setAnamnesis("· 2021년 01월 01일 - 맹장 수술")
            }}
          />
        </Map>
      </Grid>
      <Grid item xs={12} lg={4}>
          <ReportorInfo
            reportState={reportState}
            time={time}
            address={address}
            medicine={medicine}
            anamnesis={anamnesis}
            />
      </Grid>
    </Grid>
  )
}

export default KakaoMap;