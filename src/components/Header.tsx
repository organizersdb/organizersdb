import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const Header = () => (
  <AppBar position="sticky" color="default" elevation={1}>
    <Container>
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src="/images/favicon.png" style={{aspectRatio: 1, height: 30}} />
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            THE ORGANIZERS
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {["Home", "Services", "Team", "About", "Contact"].map((item) => (
            <Button key={item} color="inherit" href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
        </Box>
        <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
