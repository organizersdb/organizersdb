import { Typography, Button, Container, Box } from "@mui/material";

const Hero = () => {
  const handleEmailClick = () => {
    const user = "info";
    const domain = "organizersdb.com";

    window.location.href = `mailto:${user}@${domain}?subject=Inquiry`;
  };

  return (
    <Box
      id="home"
      sx={{
        bgcolor: "#2c3e50",
        color: "white",
        py: 15,
        textAlign: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "url(/uploads/hero.jpg)",
      }}
    >
      <Container maxWidth={false}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Professional IT Team for Your Project
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Leveraging a robust IT background and over a decade of
          multidisciplinary expertise, we deliver secure, tailor-made systems
          designed to scale your business.
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handleEmailClick}
        >
          Contact for Quotation
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
