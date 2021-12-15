import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";

import { Map, MapMarker } from "react-kakao-maps-sdk"

import axios from "axios"

import ReportorInfo from "./ReportorInfo";
import HospitalInfo from "./HospitalInfo";


function KakaoMapHospital({ mode, state, setState }) {

  const [data, setData] = useState([])

  const [markX, setMarkX] = useState()
  const [markY, setMarkY] = useState()
  const [title, setTitle] = useState("Hospital Title")
  const [address, setAddress] = useState("Hospital Adress")
  const [tell, setTell] = useState("Hospital Tel")
  const [tellED, setTellED] = useState("Hospital ED Tel")
  
  const[exist, setExist] = useState(false)

  useEffect(() => {
     axios.get(`https://dapi.kakao.com/v2/local/search/category.json?category_group_code=HP8&radius=20000&x=${state.center.lng}&y=${state.center.lat}`, {
      headers: {
        Authorization: "	KakaoAK 1dad36ef97296e3f433373c406ff7a29"
      }
    })
      .then(response => {
        setData(
          response.data.documents
        )
      })
  }, [])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <Map
          className="MuiPaper-elevation1"
          center={state.center}
          style={{ width: "100%", height: "87.7vh", borderRadius: "5px" }}
          level={5}
          onCenterChanged={(map) => {
            setState({
              center: {
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng()
              }
            })
            axios.get(`https://dapi.kakao.com/v2/local/search/category.json?category_group_code=HP8&radius=20000&x=${state.center.lng}&y=${state.center.lat}`, {
              headers: {
                Authorization: "	KakaoAK 1dad36ef97296e3f433373c406ff7a29"
              }
            })
              .then(response => {
                setData(
                  response.data.documents
                )
              })
          }}
        >
          {data.map((value, index) => { // array.map 함수를 이용하여 반복하여 callback 함수 실행
            let y = Number(data[`${index}`].y)
            let x = Number(data[`${index}`].x)

            return (
              <MapMarker
                position={{
                  lat: y,
                  lng: x,
                }}
                onClick={() => {
                  axios.get(`https://dapi.kakao.com/v2/local/search/category.json?category_group_code=HP8&radius=20000&x=${x}&y=${y}`, {
                    headers: {
                      Authorization: "	KakaoAK 1dad36ef97296e3f433373c406ff7a29"
                    }
                  })
                    .then(response => {
                      let result = response.data.documents[0]
                      setTitle(result.place_name)
                      setAddress(result.address_name)
                      setTell(result.phone)
                      setMarkY(result.y)
                      setMarkX(result.x)
                      let city = address.split(" ")[1]
                      console.log(city)
                      axios.get(`http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire?STAGE1=아산시&STAGE2=&pageNo=1&numOfRows=30&serviceKey=siIjpmaZSGdqblC9oyY1sYL2fAT1ryCSBseUTw2GUHkfNOqVJ65cX4%2FPoTBKC9nuvkFVO6VDBmOXFBjjx2BygA%3D%3D`)
                        .then(response => {
                          setExist(true)
                        })
                    })
                }}
              />
            )
          })}
        </Map>
      </Grid>
      <Grid item xs={12} lg={4}>
        {mode === "Home" &&
          <ReportorInfo />
        }
        {mode === "Hospital" &&
          <HospitalInfo markY={markY} markX={markX} title={title} address={address} tell={tell} tellED={tellED} exist={exist}/>
        }
      </Grid>
    </Grid>
  )
}

export default KakaoMapHospital;