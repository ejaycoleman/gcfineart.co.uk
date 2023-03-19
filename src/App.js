import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
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
            <div style={{ marginTop: 10, marginBottom: 20 }}>
              {[
                "nostalgia",
                "materiality",
                "poetry",
                "installation",
                "alternative photography",
              ].map((label) => (
                <Chip
                  sx={{ mx: 1 }}
                  label={label}
                  variant="outlined"
                  color="secondary"
                />
              ))}
            </div>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
              Gabrielle Cummings is an emerging fine artist from London. She
              works with installation, combining alternative photography with
              the 3-dimensional. Her themes currently revolve around materiality
              and memory; creating immersive exhibtiions that lead the audience
              into a shared sense of nostalgia.
            </Typography>
          </div>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
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
