import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import Footer from "./footer";

export default function InfoBox({ info }) {
  const URL =
    "https://i.pinimg.com/originals/89/27/01/892701252dab9ead045f745d999cf9fc.gif";

    const HOT_URL = "https://media.lordicon.com/icons/wired/lineal/823-celsius-temperature.gif";
    const COLD_URL = "https://cdn-icons-gif.flaticon.com/6455/6455060.gif";
    const RAIN_URL = "https://i.pinimg.com/originals/89/27/01/892701252dab9ead045f745d999cf9fc.gif";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 400 }} image={info.humidity>80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {info.weather}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature : {info.temp}&deg;C</p>
              <p>Humidity : {info.humidity} </p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>Feels Like : {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <br /> <br />
      <Footer />
    </div>
  );
}
