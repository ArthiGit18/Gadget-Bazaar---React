import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Checkbox,
    FormControlLabel,
    Typography,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export const AuthDialog = ({ open, onClose, isSignUpMode, toggleSignUpMode }) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const resetForm = () => {
        setName('');
        setMobile('');
        setEmail('');
        setPassword('');
        setIsTermsChecked(false);
        setEmailError('');
        setPasswordError('');
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(value) ? '' : 'Please enter a valid email address');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value.length < 6 ? 'Password must be at least 6 characters long' : '');
    };

    const isSubmitDisabled =
        !isTermsChecked || !email || !password || emailError || passwordError ||
        (isSignUpMode && (!name || !mobile));

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogContent sx={{ padding: 0 }} className="login_common">
                <div className="login_form">
                    <DialogTitle>{isSignUpMode ? 'Sign Up' : 'Sign In'}</DialogTitle>

                    {isSignUpMode && (
                        <>
                            <TextField
                                label="Username"
                                fullWidth
                                margin="dense"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                InputProps={{
                                    style: { color: 'white' }, // Change text color
                                }}
                                InputLabelProps={{
                                    style: { color: 'white' }, // Change label color
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white', // Default border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white', // Hover border color
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white', // Focused border color
                                        },
                                    }}}
                            />
                            <TextField
                                label="Mobile Number"
                                fullWidth
                                margin="dense"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                InputProps={{
                                    style: { color: 'white' }, // Change text color
                                }}
                                InputLabelProps={{
                                    style: { color: 'white' }, // Change label color
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white', // Default border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white', // Hover border color
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white', // Focused border color
                                        },
                                    }}}
                            />
                        </>
                    )}

                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="dense"
                        value={email}
                        onChange={handleEmailChange}
                        error={!!emailError}
                        helperText={emailError}
                        InputProps={{
                            style: { color: 'white' }, // Change text color
                        }}
                        InputLabelProps={{
                            style: { color: 'white' }, // Change label color
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', // Hover border color
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white', // Focused border color
                                },
                            }}}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="dense"
                        value={password}
                        onChange={handlePasswordChange}
                        error={!!passwordError}
                        helperText={passwordError}
                        InputProps={{
                            style: { color: 'white' }, // Change text color
                        }}
                        InputLabelProps={{
                            style: { color: 'white' }, // Change label color
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', // Hover border color
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white', // Focused border color
                                },
                            }}}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isTermsChecked}
                                onChange={(e) => setIsTermsChecked(e.target.checked)}
                            />
                        }
                        label="I agree to the Terms & Conditions"
                    />

                    <Button variant="contained" fullWidth disabled={isSubmitDisabled}>
                        {isSignUpMode ? 'Sign Up' : 'Sign In'}
                    </Button>

                    <hr style={{margin: "20px 0"}}></hr>

                    <Button variant="outlined" sx={{ width: '100%' }} startIcon={<GoogleIcon />}>
                        Sign in with Google
                    </Button>

                    <Typography variant="body2" sx={{ padding: '10px', marginTop: "30px" }}>
                        {isSignUpMode ? 'Already have an account? ' : "Don't have an account? "}
                        <Button onClick={toggleSignUpMode}>
                            {isSignUpMode ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </Typography>
                </div>
            </DialogContent>
        </Dialog>
    );
};
