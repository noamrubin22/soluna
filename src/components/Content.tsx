import { useWallet } from "@solana/wallet-adapter-react";
import { Grid } from "@mui/material";
import "../styles/Content.css";

export const Content = () => {
  const wallet = useWallet();
  return (
    <Grid item container justifyContent="center">
      <p className="welcome">{wallet?.publicKey?.toBase58()}</p>
    </Grid>
  );
};
