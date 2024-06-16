import React, {useState} from "react";
import { Grid, Typography, useScrollTrigger } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import Button from "@mui/material/Button";
import BuildIcon from "@mui/icons-material/Build";
import ComputerIcon from "@mui/icons-material/Computer";
import BarChartIcon from "@mui/icons-material/BarChart";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloudIcon from "@mui/icons-material/Cloud";
import MeassageIcon from "@mui/icons-material/Message";
import CancelIcon from "@mui/icons-material/Cancel";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "AI-Powered Tracking",
    text: "Our advanced livestock monitoring system utilizes artificial intelligence algorithms to track and analyze the feeding habits of your livestock in real-time. By understanding their dietary patterns, we can optimize feeding schedules and ensure proper nutrition for healthy growth..",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Health Monitoring",
    text: "With our integrated health monitoring capabilities, you can remotely monitor the health status of your livestock. Our system can detect early signs of illness or distress, allowing for timely intervention and proactive veterinary care.",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Pen Condition Analysis",
    text: "We provide insights into the environmental conditions within your livestock pens, including temperature, humidity, and ventilation. By monitoring and optimizing these conditions, we can create a comfortable and healthy environment for your animals, leading to improved productivity and well-being.",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Performance Analytics",
    text: "Our platform generates detailed performance analytics, including growth rates, feed conversion ratios, and overall livestock productivity. By analyzing these metrics, you can make informed decisions to optimize your operations and maximize profitability",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  }];
  const features2 = [
  {
    color: "#DD2C00",
    headline: "Flood Early Warning Systems",
    text: " Our disaster and risk preparedness solutions include advanced flood early warning systems. By integrating weather data, river levels, and predictive modeling, we can provide timely alerts and recommendations to help farmers mitigate the impacts of flooding on their crops and livestock.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    headline: "Climate Resilience Strategies",
    text: "We offer tailored climate resilience strategies to help farmers adapt to changing climatic conditions. This includes recommendations for drought-resistant crops, water management practices, and soil conservation techniques to minimize the risks of crop failure and livestock losses.",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
  {
    color: "#304FFE",
    headline: "Emergency Response Planning",
    text: "Our team provides expert guidance on developing emergency response plans tailored to your farm's specific needs. From evacuation procedures to resource allocation, we ensure that you are prepared to effectively respond to emergencies and safeguard your assets.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  }];
  const features3 = [
  {
    color: "#C51162",
    headline: "GIS Data Analysis",
    text: "Our crop monitoring services leverage geographic information systems (GIS) to analyze spatial data related to soil types, topography, and land use patterns. By overlaying this information with satellite imagery, we can identify optimal planting locations and recommend land management practices to maximize crop yields.",
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#00B8D4",
    headline: "Satellite Data Insights",
    text: "We utilize satellite imagery to monitor crop health and growth throughout the growing season. By detecting changes in vegetation indices and identifying areas of stress or disease, we can provide early warnings of potential crop damage and recommend targeted interventions to mitigate losses.",
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#00B8D4",
    headline: "Yield Forecasting",
    text: " Our predictive modeling capabilities enable us to forecast crop yields based on historical data, current weather conditions, and future climate projections. By anticipating potential yield fluctuations, we help farmers make informed decisions regarding planting schedules, input investments, and marketing strategies.",
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  }
];
const features4 = [  {
  color: "#00B8D4",
  headline: "Energy Consumption Analysis",
  text: "In addition to livestock and crop monitoring, we offer energy monitoring solutions to help farmers optimize energy usage and reduce operational costs. By tracking energy consumption patterns and identifying areas of inefficiency, our systems enable farmers to implement energy-saving measures and enhance sustainability on their farms.",
  icon: <CancelIcon style={{ fontSize: iconSize }} />,
  mdDelay: "400",
  smDelay: "0",
}]

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const [activeTitle, setActiveTitle] = useState(null);

  const handleTitleHover = (title) => {
    setActiveTitle(title);
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          LIVESTOCK
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                  <FeatureCard
                    Icon={element.icon}
                    color={element.color}
                    headline={element.headline}
                    text={element.text}
                  />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
        Disaster & Risk Preparedness
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features2.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
        Crop Monitoring
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features3.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
        Energy Monitoring
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features4.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
