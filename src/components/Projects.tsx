import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  CardActionArea,
} from "@mui/material";

const Projects = () => (
  <Box id="about" sx={{ py: 10 }}>
    <Container>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} sx={{justifyContent: 'center'}}>
        {projects.map((s, i) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} key={i}>
            <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
              <CardActionArea
                onClick={() => window.open(s.url, "_blank")}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>{s.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {s.title}
                  </Typography>
                  <Typography color="text.secondary">{s.desc}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Projects;

const projects = [
  {
    title: 'hkbus.app',
    desc: "ETA app supporting >500k+ monthly active users",
    icon: (
      <Avatar
        src="https://hkbus.app/img/logo192_full.png" 
        sx={{ width: 120, height: 120, border: '1px solid #ddd' }} 
      />
    ),
    url: 'https://hkbus.app'
  }, {
    title: 'HK Travel Time Heatmap',
    desc: "Heatmap showing traveling time from any point in HK",
    icon: (
      <Avatar
        src="https://jt.hkbus.app/jt-share.png" 
        sx={{ width: 120, height: 120, border: '1px solid #ddd' }} 
      />
    ),
    url: "https://jt.hkbus.app/",
  }, {
    title: 'HKCMT System',
    desc: 'Classroom Management System Supporting registrations, selections, attendence and payment',
    icon: (
      <img
        src="https://app.hkcmt.org/cmt.png"
        style={{ width: 120 }} 
      />
    ),
    url: "https://app.hkcmt.org"
  }, {
    title: '3scenes',
    desc: "Matching platform for script writers and investors",
    icon: (
      <img
        src="https://3scenes.io/3scenes.svg" 
        style={{ width: 80, height: 80 }} 
      />
    ),
    url: "https://3scenes.io/"
  }, {
    title: 'Organizers',
    desc: "CRM for social workers",
    icon: (
      <img
        src="/images/favicon.png" 
        style={{ width: 80, height: 80 }} 
      />
    ),
    url: "#"
  }, {
    title: '#healing matters',
    desc: "IT integration in exhibition",
    icon: (
      <img
        src="https://urbanmatters.onebitedesign.com/healing-matters/assets/candy-B-ECxSKe.gif" 
        style={{ height: 80 }} 
      />
    ),
    url: "https://urbanmatters.onebitedesign.com/healing-matters/"
  }, {
    title: 'Flavour Library',
    desc: "IT integration in exhibition",
    icon: (
      <img
        src="https://flavour-library.organizersdb.com/imgs/intermission-flower.gif" 
        style={{ height: 80 }} 
      />
    ),
    url: "https://flavourlibrary.onebitedesign.com/"
  }, 
]