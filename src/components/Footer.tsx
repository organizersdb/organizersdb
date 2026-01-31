import { Typography, Container, Box, Grid } from "@mui/material";

const Footer = () => {
  const handleEmailClick = () => {
    const user = "info";
    const domain = "organizersdb.com";

    window.location.href = `mailto:${user}@${domain}?subject=Inquiry`;
  };

  return (
  <Box sx={{ py: 8, bgcolor: "primary.main", color: "white" }}>
    <Container>
      <Grid container spacing={4} textAlign="center" justifyContent="center">
        <Grid onClick={handleEmailClick} sx={{cursor: "pointer"}}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Contact Us
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
)
};

export default Footer;
