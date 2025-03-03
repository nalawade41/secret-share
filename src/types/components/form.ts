import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export interface FormInputProps {
    label: React.ReactNode;
    name: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
    placeholder?: string;
    type?: string;
    multiline?: boolean;
    rows?: number;
    InputProps?: {
        inputProps?: {
            min?: number;
            max?: number;
        };
        sx?: SxProps<Theme>;
    };
}

export interface FormSelectProps {
    label: React.ReactNode;
    name: string;
    value: number;
    onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    options: Array<{
        value: number;
        label: string;
    }>;
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
}

export interface FormButtonProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    endIcon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    startIcon?: React.ReactNode;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}
