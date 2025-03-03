import { Box, Container, Typography, keyframes, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import StyledButton from "../../components/Button";
import ErrorIcon from '../../components/Animations/ErrorIcon';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';
import PageTransition from "../../components/Animations/PageTransition";

interface RevealErrorProps {
    error: Error;
    hash: string | undefined;
}

const floatAnimation = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
`;

const GradientCard = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, rgba(0, 127, 255, 0.1) 0%, rgba(255, 183, 0, 0.1) 50%, rgba(0, 230, 118, 0.1) 100%)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '600px',
    padding: '3rem',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(0, 127, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 48px rgba(0, 127, 255, 0.2)',
    }
}));

const AnimationWrapper = styled(Box)(({ theme }) => ({
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '120px'
}));

const GradientText = styled(Typography)(({ theme }) => ({
    background: 'linear-gradient(45deg, #007FFF, rgba(255, 183, 0, 0.7), #00E676)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const AnimatedButton = styled(StyledButton)(({ theme }) => ({
    background: 'linear-gradient(45deg, #007FFF 0%, rgba(255, 183, 0, 0.7) 50%, #00E676 100%)',
    color: 'white',
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 127, 255, 0.3)',
    }
}));

const RevealError: React.FC<RevealErrorProps> = ({ error, hash }): React.ReactElement => {
    const navigate = useNavigate();
    const [showTransition, setShowTransition] = useState(false);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        if (error.message.includes('404')) {
            setErrorText(`The secret you're looking for has either expired or doesn\'t exist.`);
        } else if (error.message.includes('500')) {
            setErrorText('We encountered a server error. Please try again later.');
        } else {
            setErrorText('We encountered an error while revealing your secret. Please try again.');
        }
    }, [error]);

    const handleShare = () => {
        setShowTransition(true);
    };

    return (
        <Box sx={{ 
            minHeight: '100vh', 
            width: '100%',
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {showTransition && (
                <PageTransition onComplete={() => {
                    setShowTransition(false);
                    navigate('/');
                }} />
            )}
            <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
                <GradientCard>
                    <AnimationWrapper>
                        <ErrorIcon />
                    </AnimationWrapper>
                    
                    <GradientText 
                        variant="h3" 
                        gutterBottom
                    >
                        {error.message.includes('404') ? 'Secret Not Found!' : 'Something Went Wrong!'}
                    </GradientText>
                    
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: 'text.secondary',
                            marginBottom: '2rem',
                            fontSize: '1.1rem',
                            opacity: 0.8
                        }}
                    >
                        {errorText}
                        {hash && (
                            <Box component="pre" sx={{ 
                                mt: 2,
                                p: 2,
                                borderRadius: '8px',
                                background: 'rgba(0,0,0,0.05)',
                                fontFamily: 'monospace',
                                fontSize: '0.9rem',
                                wordBreak: 'break-all'
                            }}>
                                {hash}
                            </Box>
                        )}
                    </Typography>

                    <AnimatedButton
                        onClick={handleShare}
                        startIcon={<ShareIcon />}
                        fullWidth
                    >
                        Share A New Secret
                    </AnimatedButton>
                </GradientCard>
            </Container>
        </Box>
    );
}

export default RevealError;
