import { SecretData } from '../models/secret';

export interface SecretRevelSidebarProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    data: SecretData | null;
}