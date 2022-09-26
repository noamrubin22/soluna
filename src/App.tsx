import { Grid } from "@mui/material";
import "./App.css";
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
      spacing={3}
    >
      <Grid
        item
        container
        xs={12}
        alignContent="center"
        justifyContent="center"
      >
        <img src="/full-moon.png" alt="Full moon" width="40%" />
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <Wallet />
      </Grid>
    </Grid>
  );
}

export default App;
