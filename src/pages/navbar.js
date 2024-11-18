import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
    Button,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InputBase from '@mui/material/InputBase';
import { AuthDialog } from '../common/AuthDialog';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const Navbar = ({ aboutRef }) => {
    const [isFixed, setIsFixed] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.querySelector('.hero_wrapper').offsetHeight;
            setIsFixed(window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => {
        setOpenDialog(false);
        setIsSignUpMode(false);
    };
    const toggleSignUpMode = () => setIsSignUpMode((prev) => !prev);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Toggle mobile menu

    return (
        <div className={`navbar_wrapper ${isFixed ? 'fixed' : ''}`}>
            <div className='nav_logo'>
                <img
                    src={isFixed ? "assets/logo/Logo (2).png" : "assets/logo/Logo (3).png"}
                    alt="Logo"
                />
            </div>

            <div className='nav_items'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToAbout(); }}>About us</a></li>
                    <li><a href="/product-list">Product</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Customer Service</a></li>
                </ul>
            </div>

            {/* Hamburger menu for mobile */}
            <div className='nav_hamburger'>
                <IconButton onClick={toggleMenu} edge="end">
                    <MenuIcon sx={{color:"white"}} />
                </IconButton>
            </div>

            {/* Mobile menu slide down */}
            {isMenuOpen && (
                <div className={`nav_mobile_menu ${isMenuOpen ? 'open' : ''}`}>
                    <IconButton onClick={toggleMenu} edge="start">
                        <CloseIcon sx={{color:"white"}} />
                    </IconButton>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToAbout(); }}>About us</a></li>
                        <li><a href="/product-list">Product</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Customer Service</a></li>
                    </ul>
                </div>
            )}

            <div className='nav_activities'>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <ShoppingCartIcon />
                <FavoriteIcon />
            </div>

            <div className='nav_actions'>
                <Button variant='contained' onClick={handleDialogOpen}>Sign up/Sign In</Button>
            </div>

            <AuthDialog
                open={openDialog}
                onClose={handleDialogClose}
                isSignUpMode={isSignUpMode}
                toggleSignUpMode={toggleSignUpMode}
            />
        </div>
    );
};
