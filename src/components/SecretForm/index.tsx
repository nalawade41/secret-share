import { useState } from 'react';
import {
    Box,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    type SelectChangeEvent,
    FormGroup,
    Typography,
    alpha,
    useTheme,
    Stack,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import TimerIcon from '@mui/icons-material/Timer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import type {SecretFormProps, SecretFormData} from "../../types/components/secretForm";
import {expirationOptions} from "../../constants/constant";
import StyledButton from '../Button';
import StyledTextField from '../TextField';
import type { ExtendedTheme } from '../../types/theme';

const SecretForm: React.FC<SecretFormProps> = ({ onFormSubmit }) => {
    const theme = useTheme();
    const [formData, setFormData] = useState<SecretFormData>({
        secret: '',
        expireAfter: 0,
        expireAfterViews: 10,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'expireAfterViews' ? parseInt(value) : value,
        }));
    };

    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        const name = event.target.name as keyof typeof formData;
        const value = event.target.value as number;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 600,
                mx: 'auto',
                mt: 4,
                p: { xs: 2, sm: 4 },
                borderRadius: 3,
                bgcolor: 'background.paper',
                boxShadow: `0 0 60px ${alpha(theme.palette.primary[200] || '#C2E0FF', 0.12)}`,
            }}
        >
            <Stack spacing={4} sx={{ mb: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Box
                        sx={{
                            width: 64,
                            height: 64,
                            borderRadius: '50%',
                            bgcolor: alpha(theme.palette.primary[100], 0.5),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2,
                        }}
                    >
                        <LockIcon
                            sx={{
                                fontSize: 32,
                                color: theme.palette.primary.main,
                            }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography 
                            variant="h1" 
                            sx={{ 
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                mb: 2,
                                background: `linear-gradient(135deg, ${theme.palette.primary[600]}, ${theme.palette.primary[400]})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'block',
                            }}
                        >
                            Share a Secret
                        </Typography>
                        <Typography 
                            variant="subtitle1"
                            sx={{ 
                                color: alpha(theme.palette.text.primary, 0.7),
                                fontSize: '1.1rem',
                                maxWidth: '600px',
                                mx: 'auto',
                                display: 'block',
                            }}
                        >
                            Securely share sensitive information that will self-destruct
                        </Typography>
                    </Box>
                </Box>

                <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
                    <StyledTextField
                        label="Your Secret"
                        placeholder="Type your secret message here..."
                        name="secret"
                        multiline
                        fullWidth
                        rows={6}
                        value={formData.secret}
                        onChange={handleInputChange}
                        required
                        InputProps={{
                            sx: {
                                fontSize: '1.05rem',
                                lineHeight: 1.6,
                                '&::placeholder': {
                                    fontStyle: 'italic',
                                    fontSize: '1rem',
                                },
                            },
                        }}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="expire-label">
                            <Stack direction="row" spacing={1} alignItems="center">
                                <TimerIcon sx={{ 
                                    fontSize: 20,
                                    color: theme.palette.primary[400],
                                }} />
                                <span>Expires in</span>
                            </Stack>
                        </InputLabel>
                        <Select
                            labelId="expire-label"
                            value={formData.expireAfter}
                            label={<Stack direction="row" spacing={1} alignItems="center">
                                <TimerIcon sx={{ 
                                    fontSize: 20,
                                    color: theme.palette.primary[400],
                                }} />
                                <span>Expires in</span>
                            </Stack>}
                            name="expireAfter"
                            onChange={handleSelectChange}
                            sx={{
                                '& .MuiSelect-select': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                },
                            }}
                        >
                            {expirationOptions.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <StyledTextField
                        label={<Stack direction="row" spacing={1} alignItems="center">
                            <VisibilityIcon sx={{ 
                                fontSize: 20,
                                color: theme.palette.primary[400],
                            }} />
                            <span>Maximum Views</span>
                        </Stack>}
                        name="expireAfterViews"
                        fullWidth
                        value={formData.expireAfterViews}
                        onChange={handleInputChange}
                        required
                        type="number"
                        InputProps={{
                            inputProps: { min: 1, max: 100 },
                            sx: {
                                '& input': {
                                    fontSize: '1.05rem',
                                    fontWeight: 500,
                                    color: theme.palette.primary[700],
                                },
                            },
                        }}
                    />

                    <Box sx={{ width: '100%', display: 'flex' }}>
                        <StyledButton
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            endIcon={<SendIcon sx={{ fontSize: 24 }} />}
                            sx={{
                                minHeight: 56,
                                mt: 2,
                                flex: 1,
                                background: theme.gradients.primary.main,
                                fontSize: '1.125rem',
                                maxWidth: 'none !important',
                                boxShadow: `0 8px 24px ${alpha(theme.palette.primary[500], 0.25)}`,
                                '&:hover': {
                                    background: theme.gradients.primary.hover,
                                    boxShadow: `0 12px 32px ${alpha(theme.palette.primary[500], 0.35)}`,
                                },
                                '&:active': {
                                    background: theme.gradients.primary.active,
                                    boxShadow: `0 6px 16px ${alpha(theme.palette.primary[500], 0.2)}`,
                                }
                            }}
                        >
                            Share Secret Securely
                        </StyledButton>
                    </Box>
                </FormGroup>
            </Stack>
        </Box>
    );
};

export default SecretForm;
