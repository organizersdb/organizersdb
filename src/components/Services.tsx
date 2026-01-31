import {
  Typography,
  Container,
  Box,
  GridLegacy as Grid,
  Card,
  CardContent,
} from "@mui/material";
import { 
  Storage, 
  Insights, 
  Language, 
  StayPrimaryPortrait, 
  SettingsInputAntenna, 
  Psychology 
} from '@mui/icons-material';  

const Services = () => {
  const services = [
  {
    title: "Company Database Development",
    desc: "Architecting secure, scalable, and high-performance data structures tailored to your unique business logic.",
    icon: <Storage fontSize="large" />,
  },
  {
    title: "Data Analysis",
    desc: "Transforming raw data into actionable insights through advanced processing and visualization techniques.",
    icon: <Insights fontSize="large" />,
  },
  {
    title: "Web Development",
    desc: "Building fast, responsive, and modern web applications using cutting-edge frameworks like React and MUI.",
    icon: <Language fontSize="large" />,
  },
  {
    title: "Mobile App Development",
    desc: "Creating seamless cross-platform mobile experiences that keep your business connected to users on the go.",
    icon: <StayPrimaryPortrait fontSize="large" />,
  },
  {
    title: "IoT Integration",
    desc: "Connecting hardware and software to bridge the gap between physical operations and digital intelligence.",
    icon: <SettingsInputAntenna fontSize="large" />,
  },
  {
    title: "IT Consultation",
    desc: "Strategic guidance leveraging a decade of multidisciplinary experience to solve your most complex tech challenges.",
    icon: <Psychology fontSize="large" />,
  },
];

  return (
    <Box id="services" sx={{ py: 10, bgcolor: "#f5f5f5" }}>
      <Container>
        <Grid container spacing={4}>
          {services.map((s, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
                <CardContent>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{s.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {s.title}
                  </Typography>
                  <Typography color="text.secondary">{s.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
