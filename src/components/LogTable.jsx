import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Button, ButtonGroup, Box, Typography } from "@material-ui/core";

export default function LogTable({ data, callLog }) {

  const useStyles = makeStyles((theme) => ({
    table: {
      padding: theme.spacing(2.5),
    },
    tr: {
      height: '50px',
      backgroundColor: "#FFFFFF",
      '&: hover': {
        backGroundColor: '#000000'
      }
    }
  }
  ));

  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = useState(
    [
      "화상", "골절", "화상", "절단", "외상", "복통", "골절", "두통", "골절", "기타", "화상", "기타", "절단"
    ]
  )

  return (
    <div style={{ height: '87.9vh', width: '100%', margin: '' }}>
      <table className={classes.table} style={{ width: '100%', textAlign: 'center' }}>
        <thead style={{ borderBottomColor: '#000000' }}>
          <tr className={classes.tr}>
            <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">발생 시간</Box></Typography></td>
            <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">구조 시간</Box></Typography></td>
            <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">발생 상황</Box></Typography></td>
            <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">발생 위치</Box></Typography></td>
          </tr>
        </thead>
        <tbody>
          {state.map((value, index) => {
            return (
              <tr className={classes.tr}>
                <td>21년 10월 15일 19:{33 - index}</td>
                <td>21년 10월 15일 19:{52 - index}</td>
                <td>{state[`${index}`]}</td>
                <td>충청남도 아산시 배방읍 세출리 165</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div style={{ textAlign: 'center' }}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button>Prev</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
