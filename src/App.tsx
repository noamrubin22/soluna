import { Grid, Typography } from "@mui/material";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import { Moon } from "./components/Moon";
import { Wallet } from "./components/Wallet";
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent="center"
      flexDirection="row"
      className="container"
    >
      <Grid item xs={12}>
        <Typography
          variant="h1"
          color="rgb(255,105,180)"
          style={{
            fontFamily: "arial",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          soluna
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        alignContent="center"
        justifyContent="center"
      >
        <CanvasContainer>
          <Moon />
        </CanvasContainer>
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <Wallet />
      </Grid>
    </Grid>
  );
}

export default App;
