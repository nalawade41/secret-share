interface SecretData {
    hash: string;
    secretText: string;
    expiresAt: string;
    createdAt: string;
    remainingViews: number;
}

interface SecretShareSidebarProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    data: SecretData | null;
    isGenerating?: boolean;
}