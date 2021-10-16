import React from "react";

import { Grid } from "@material-ui/core";

import { Map} from "react-kakao-maps-sdk"

import ReportorInfo from "./ReportorInfo";

function KakaoMap({ mode, state, setState }) {

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
        </Map>
      </Grid>
      <Grid item xs={12} lg={4}>
          <ReportorInfo />
      </Grid>
    </Grid>
  )
}

export default KakaoMap;