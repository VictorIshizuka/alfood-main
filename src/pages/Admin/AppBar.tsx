import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";

export const AppBarLayout = () => {
  const url = useLocation();
  console.log(url.pathname);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6">Administração</Typography>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              {/* ta feio mesmo, pois a logica saiu da cabeça..arrumo outra hora */}
              {url.pathname === "/admin/restaurantes" && (
                <>
                  <Link component={RouterLink} to="/admin/restaurantes">
                    <Button sx={{ my: 2, color: "white" }}>Restaurantes</Button>
                  </Link>
                  <Link component={RouterLink} to="/admin/restaurantes/novo">
                    <Button sx={{ my: 2, color: "white" }}>
                      Novo restaurante
                    </Button>
                  </Link>
                </>
              )}
              {url.pathname === "/admin/restaurantes/novo" && (
                <>
                  <Link component={RouterLink} to="/admin/restaurantes/novo">
                    <Button sx={{ my: 2, color: "white" }}>
                      Novo restaurante
                    </Button>
                  </Link>
                </>
              )}
              {url.pathname === "/admin/pratos" && (
                <>
                  <Link component={RouterLink} to="/admin/pratos">
                    <Button sx={{ my: 2, color: "white" }}>Pratos</Button>
                  </Link>
                  <Link component={RouterLink} to="/admin/pratos/novo">
                    <Button sx={{ my: 2, color: "white" }}>Novo prato</Button>
                  </Link>
                </>
              )}
              {url.pathname === "/admin/pratos/novo" && (
                <>
                  <Link component={RouterLink} to="/admin/pratos">
                    <Button sx={{ my: 2, color: "white" }}>Pratos</Button>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Outlet />
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};
