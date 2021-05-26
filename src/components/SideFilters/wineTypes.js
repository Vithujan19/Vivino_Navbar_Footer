import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";

function WineType() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container direction="row">
          <Grid
            container
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            justify="flex-start"
            alignItems="center"
          >
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{
                fontSize: 20,
                fontWeight: 700,
                padding: "12px 0px 0px 12px",
                color: "black",
              }}
            >
              Wine Types
            </Typography>
          </Grid>
          <Grid
            container
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            justify="flex-end"
            alignItems="flex-start"
          >
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{
                fontSize: 15,
                fontWeight: 500,
                padding: "12px 0px 0px 12px",
                color: "grey",
              }}
            >
              Select multiple
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row"  spacing={2}>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <button
              style={{
                padding: "2px 25px 2px 25px",
                fontSize: 13,
                fontWeight: 400,
                border: " 1px solid #BA1628",
                color: "#BA1628",
                backgroundColor: "#0000",
                borderRadius: 25,
                height: 35,
                width: 130,
              }}
            >
              Red
            </button>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
            <button
              style={{
                padding: "2px 25px 2px 25px",
                fontSize: 13,
                fontWeight: 400,
                border: " 1px solid #BA1628",
                color: "#BA1628",
                backgroundColor: "#0000",
                borderRadius: 25,
                height: 35,
                width: 130,
              }}
            >
              White
            </button>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <button
              style={{
                padding: "2px 25px 2px 25px",
                fontSize: 13,
                fontWeight: 400,
                border: " 1px solid #BA1628",
                color: "#BA1628",
                backgroundColor: "#0000",
                borderRadius: 25,
                height: 35,
                width: 130,
              }}
            >
              Sparking
            </button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row"  spacing={2}>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <button
              style={{
                padding: "2px 25px 2px 25px",
                fontSize: 13,
                fontWeight: 400,
                border: " 1px solid #BA1628",
                color: "#BA1628",
                backgroundColor: "#0000",
                borderRadius: 25,
                height: 35,
                width: 130,
              }}
            >
              Red
            </button>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
            <button
              style={{
                padding: "2px 25px 2px 25px",
                fontSize: 13,
                fontWeight: 400,
                border: " 1px solid #BA1628",
                color: "#BA1628",
                backgroundColor: "#0000",
                borderRadius: 25,
                height: 35,
                width: 130,
              }}
            >
              White
            </button>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <button
              style={{
                padding: "2px 25px 2px 25px",
                fontSize: 13,
                fontWeight: 400,
                border: " 1px solid #BA1628",
                color: "#BA1628",
                backgroundColor: "#0000",
                borderRadius: 25,
                height: 35,
                width: 130,
              }}
            >
              Sparking
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WineType;
