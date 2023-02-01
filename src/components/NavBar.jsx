import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
const drawerWidth = 240;
const navItems = [{ name: 'Inicio', route: '/' },
{ name: 'Tortas', route: '/products' },
{ name: 'Contacto', route: '/contact' }];
const theme = createTheme({
    palette: {
        primary: {
           
            main: '#FFF5E4',
        },
        secondary: {
            //Colores personalizados de la paleta de colores
            main: '#FFE3E1',
        },
        third: {
            //Colores personalizados de la paleta de colores
            main: '#FFD1D1',
        },
        fourth: {
            //Colores personalizados de la paleta de colores
            main: '#FF9494',
        },
    },
});

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Happy Cake!
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.route} disablePadding>
                        <Link to={item.route} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ textAlign: 'center', color: 'black'}}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar color="fourth" component="nav">
                    <Toolbar>
                        <IconButton
                            color="primary"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 1, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton >
                        <IconButton
                            color='third'
                            edge="start"
                            sx={{ mr: 1, mb: 0.6 }}
                            onClick={handleDrawerToggle}
                        >
                            <CakeOutlinedIcon />
                        </IconButton >
                        <Typography
                            variant="h6"
                            color="#fff"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block' } }}
                        >
                            Happy Cake

                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map(({ route, name }) => (
                                <Link to={route}
                                    style={{ textDecoration: 'none' }}
                                    key={name}>
                                    <Button sx={{ color: '#FFF' }}>
                                        {name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#FFE3E1' },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ p: 0 }}>
                    <Toolbar />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;