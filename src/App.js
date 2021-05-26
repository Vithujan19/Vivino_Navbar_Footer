import React from "react";
import "./App.css";
import TopBar from "./components/Header/TopBar";
import SecondBar from "./components/Header/BottomBar";
import TopFooter from "./components/Footer/top-footer/TopFooterComponent";
import SecondFooter from "./components/Footer/second-footer/SecondFooterComponent";
import DropDownProvider from "./providers/DropDownProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "rc-slider/assets/index.css";
// import TopNav from './components/Navbar/TopNav';
import Wine from "./components/WineCard/card";
import SideFilter from "./components/SideFilters/wineTypes";
import PriceRange from "./components/SideFilters/priceRange";
import UserRating from "./components/SideFilters/userRating";
import Grapes from "./components/SideFilters/Grapes";
import Regions from "./components/SideFilters/Regions";
import Countries from "./components/SideFilters/contries";
import WineStyles from "./components/SideFilters/wineStyles";
import FoodPairings from "./components/SideFilters/foodPairings";

import { Grid } from "@material-ui/core";
import FilterDrawer from "./components/Filters/FilterDrawer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FAFAFA" }}>
      <DropDownProvider>
        <TopBar />
        <SecondBar />
        <Grid container direction="row" spacing={4} style={{ paddingLeft: 60 }}>
          <Grid
            item
            container
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            direction="column"
            style={{ background: "" }}
            spacing={4}
          >
            <Grid item>
              <SideFilter />
            </Grid>
            <Grid item>
              <PriceRange />
            </Grid>
            <Grid item>
              <UserRating />
            </Grid>
            <Grid item>
              <Grapes />
            </Grid>
            <Grid item>
              {" "}
              <Regions />
            </Grid>
            <Grid item>
              {" "}
              <Countries />
            </Grid>
            <Grid item>
              {" "}
              <WineStyles />
            </Grid>
            <Grid item>
              {" "}
              <FoodPairings />
            </Grid>
          </Grid>
          <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
            <Wine />
          </Grid>
          <Grid item xl={1} lg={1} md={1} sm={false} xs={false}></Grid>
        </Grid>

        <TopFooter />
        <SecondFooter />
      </DropDownProvider>
      <FilterDrawer />
    </div>
  );
}

export default App;
