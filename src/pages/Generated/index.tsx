import { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, keyframes, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import { getSecretData } from "./loader/getSecretData";
import RevealError from "../RevealError";
import StyledButton from "../../components/Button";
import SecretShareSidebar from "../../components/SecretShareSidebar";
import { BlurOverlay } from "../../components/Overlay";
import SecretRevealAnimation from "../../components/Animations/SecretRevealAnimation";
import { SecretData } from '../../types/models/secret';

const floatAnimation = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
`;

const GradientBox = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, rgba(0, 127, 255, 0.1) 0%, rgba(255, 183, 0, 0.1) 50%, rgba(0, 230, 118, 0.1) 100%)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
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

const FloatingText = styled(Typography)(({ theme }) => ({
    animation: `${floatAnimation} 3s ease-in-out infinite`,
    background: 'linear-gradient(45deg, #007FFF, #FFB700, #00E676)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
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
    },
    '&:disabled': {
        background: 'linear-gradient(45deg, #007FFF88, rgba(255, 183, 0, 0.3), #00E67688)',
        color: 'rgba(255,255,255,0.7)',
    }
}));


const Generated: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const [revealing, setRevealing] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<Error | null>(null);
    const [result, setResult] = useState<SecretData | null>(null);

    const [secretData, setSecretData] = useState<SecretData | null>(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        if (secretData && animationComplete) {
            setResult(secretData);
            setOpenSidebar(true);
            setRevealing(false);
        }
    }, [secretData, animationComplete]);

    const handleReveal = () => {
        if (!id) {
            setErrorCode(new Error('404'));
            return;
        }
        setRevealing(true);
        
        // Wait for initial animation
        setTimeout(() => {
            // Start fetching data
            getSecretData(id).then((data) => {
                if (data) {
                    setSecretData(data);
                }
            }).catch((error) => {
                // Show animation for a moment before error
                setTimeout(() => {
                    setErrorCode(error);
                    setRevealing(false);
                }, 1500); // Give time to see the animation
            });
        }, 500); // Small delay to start the animation
    }

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            {openSidebar && <BlurOverlay />}
            {revealing && (
                <SecretRevealAnimation 
                    onComplete={() => setAnimationComplete(true)} 
                />
            )}
            {errorCode ? (
                <RevealError error={errorCode} hash={id}/>
            ) : (
                <Container maxWidth="md">
                    <SecretShareSidebar open={openSidebar} setOpen={setOpenSidebar} data={result} isGenerating={false} />
                    <GradientBox>
                        <FloatingText variant='h3' gutterBottom>
                            Reveal the Magic Recipe!
                        </FloatingText>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: 'text.secondary',
                                marginBottom: '2rem',
                                fontSize: '1.1rem',
                                opacity: revealing ? 0.7 : 1,
                                transition: 'opacity 0.3s ease'
                            }}
                        >
                            Your secret is waiting to be discovered. Click below to unveil the mystery!
                        </Typography>
                        <AnimatedButton
                            onClick={handleReveal}
                            disabled={revealing}
                            sx={{
                                transform: revealing ? 'scale(0.98)' : 'scale(1)',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            {revealing ? '✨ Revealing Magic...' : '🔮 Reveal Secret Now'}
                        </AnimatedButton>
                    </GradientBox>
                </Container>
            )}
        </Box>
    );
};

export default Generated;
