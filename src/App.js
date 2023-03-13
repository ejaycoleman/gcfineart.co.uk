import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import bg from "./bg.jpg";
import gabby from "./gabby.jpg";

const App = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        minHeight: "100vh",
        background: `url(${bg}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <Card style={{ padding: 30 }} elevation={10}>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 30,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Avatar sx={{ width: 90, height: 90 }} src={gabby}>
              GC
            </Avatar>
            <Typography variant="h3" style={{ marginTop: 20 }}>
              Gabrielle Cummings
            </Typography>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
              Fine Art / Curation
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            href="https://instagram.com/gabrielle.fineart"
            target="_blank"
          >
            Instagram
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default App;
