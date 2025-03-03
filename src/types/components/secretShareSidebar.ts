import { SecretData } from '../models/secret';

export interface SecretShareSidebarProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    data: SecretData | null;
    isGenerating?: boolean;
}