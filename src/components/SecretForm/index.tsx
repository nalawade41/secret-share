import { useState } from 'react';
import {
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    type SelectChangeEvent,
    FormGroup,
    colors,
} from '@mui/material';
import type {SecretFormProps, SecretFormData} from "../../types/components/secretForm";
import {expirationOptions} from "../../constants/constant";
import StyledButton from '../Button';
import StyledTextField from '../TextField';

const SecretForm: React.FC<SecretFormProps> = ({ onFormSubmit }) => {
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
        const value = event.target.value as number; // Ensuring the value is treated as a number
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
        <form onSubmit={handleSubmit}>
            <FormGroup sx={{ gap: 4 }}>
                <StyledTextField
                    label="Your secret"
                    placeholder='Type your secret here...'
                    variant="outlined"
                    name="secret"
                    multiline
                    fullWidth
                    rows={6}
                    value={formData.secret}
                    onChange={handleInputChange}
                    required
                    inputProps={{
                        maxLength: 500,
                        style: { color: colors.grey[700], fontWeight: 700 },
                    }}
                />
                <FormControl fullWidth>
                    <InputLabel id="expire-label" style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Expires in</InputLabel>
                    <Select
                        labelId="expire-label"
                        value={formData.expireAfter}
                        label="Expires in"
                        name="expireAfter"
                        sx={{ bgcolor: "#b7d3d1" }}
                        onChange={handleSelectChange}
                    >
                        {expirationOptions.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <StyledTextField
                    label="Allowed Viwes"
                    variant="outlined"
                    name="expireAfterViews"
                    fullWidth
                    value={formData.expireAfterViews}
                    onChange={handleInputChange}
                    required
                    type="number"
                />
                <StyledButton type="submit" variant="contained">
                    Share Your Secret!
                </StyledButton>
            </FormGroup>
        </form>
  );
};

export default SecretForm;
