import { Box, Drawer, IconButton, Stack, TextareaAutosize, Typography, useTheme, styled } from "@mui/material";
import { CopyAnimation } from "../Animations/CopyAnimation";
import { useNavigate } from "react-router-dom";
import StyledButton from "../Button";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import React from "react";
import GradientText from "../Typography/GradientText";
import PageTransition from "../Animations/PageTransition";

interface SidebarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    data: string;
    reShare?: boolean;
    title: string;
    subTitle: string;
    isPersisted?: boolean;
}

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    width: '100%',
    minHeight: '200px',
    maxHeight: '400px',
    padding: '24px',
    borderRadius: '14px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    fontSize: '16px',
    fontFamily: '"SF Mono", "Fira Code", monospace',
    lineHeight: 1.6,
    color: '#1a237e',
    letterSpacing: '0.3px',
    resize: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 32px rgba(0, 127, 255, 0.1)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    '&::selection': {
        background: 'rgba(0, 127, 255, 0.2)',
        color: '#007FFF'
    }
}));

const GradientBox = styled(Box)({
    position: 'relative',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: -2,
        left: -2,
        right: -2,
        bottom: -2,
        background: 'linear-gradient(45deg, #007FFF, #00E676, #FFA726)',
        borderRadius: '16px',
        zIndex: 0,
        animation: 'rotate 4s linear infinite',
        opacity: 0.7,
    },
    '@keyframes rotate': {
        '0%': {
            filter: 'hue-rotate(0deg)'
        },
        '100%': {
            filter: 'hue-rotate(360deg)'
        }
    }
});

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, data, reShare, title, subTitle, isPersisted }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [showCopyAnimation, setShowCopyAnimation] = useState(false);
    const [showTransition, setShowTransition] = useState(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const handleCopyToShare = async () => {
        try {
            await navigator.clipboard.writeText(data);
            setShowCopyAnimation(true);
            setTimeout(() => {
                setShowCopyAnimation(false);
            }, 1000);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    return (
        <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            variant={isPersisted ? "persistent" : "temporary"}
            anchor="right"
            sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: '100%', sm: 420 },
                    maxWidth: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.95) 100%)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,127,255,0.15)',
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at top right, rgba(0,127,255,0.1), transparent 70%),\n                                    radial-gradient(circle at bottom left, rgba(0,230,118,0.1), transparent 70%)',
                        pointerEvents: 'none'
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: '20%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'linear-gradient(45deg, transparent 65%, rgba(255,167,38,0.05) 75%, rgba(255,167,38,0.1) 80%, transparent 100%)',
                        transform: 'rotate(-45deg)',
                        animation: 'shimmer 10s linear infinite',
                        pointerEvents: 'none'
                    },
                    '@keyframes shimmer': {
                        '0%': {
                            transform: 'rotate(-45deg) translateY(0%)'
                        },
                        '100%': {
                            transform: 'rotate(-45deg) translateY(100%)'
                        }
                    }
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    p: { xs: 2, sm: 4 },
                    position: 'relative',
                    zIndex: 1,
                }}
                role="presentation"
            >
                {!isPersisted && (
                    <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: 16,
                            background: 'rgba(255,255,255,0.7)',
                            backdropFilter: 'blur(4px)',
                            color: 'text.secondary',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(255,255,255,0.9)',
                                color: 'text.primary',
                                transform: 'rotate(90deg)'
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                )}

                <Stack 
                    spacing={4} 
                    sx={{ 
                        mt: !isPersisted ? 6 : 0,
                        position: 'relative',
                        zIndex: 1,
                        '& > *': {
                            position: 'relative',
                            zIndex: 1
                        }
                    }}>
                    <Stack alignItems="center" textAlign="center">
                        <GradientText variant="h1">
                            {title}
                        </GradientText>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                maxWidth: '80%',
                                fontWeight: 600,
                                background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textAlign: 'center',
                                mb: 3
                            }}>
                            {subTitle}
                        </Typography>
                    </Stack>

                    <GradientBox sx={{ position: 'relative' }}>
                        <StyledTextArea
                            aria-label="secret content"
                            placeholder="Decrypted Secret..."
                            readOnly
                            value={data}
                        />
                        {showCopyAnimation && (
                            <CopyAnimation theme={theme}>
                                <div className="copy-circle" />
                                <div className="copy-check">✓</div>
                            </CopyAnimation>
                        )}
                    </GradientBox>

                    <Stack spacing={3}>
                        <StyledButton
                            variant="contained"
                            color="primary"
                            onClick={handleCopyToShare}
                            startIcon={<ContentCopyIcon />}
                            fullWidth
                            sx={{
                                transition: 'all 0.3s ease',
                                '&:active': {
                                    transform: 'scale(0.95)'
                                }
                            }}
                        >
                            Copy to Share
                        </StyledButton>
                        {reShare && (
                            <StyledButton
                                variant="outlined"
                                color="primary"
                                onClick={() => {
                                    setShowTransition(true);
                                }}
                                startIcon={<AddIcon />}
                                fullWidth
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:active': {
                                        transform: 'scale(0.95)'
                                    }
                                }}
                            >
                                Share Another Secret
                            </StyledButton>
                        )}
                    </Stack>
                </Stack>
            </Box>
            {showTransition && (
                <PageTransition onComplete={() => {
                    setShowTransition(false);
                    navigate("/");
                }} />
            )}
        </Drawer>
    );
};

export default Sidebar;
