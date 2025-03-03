export interface RevealErrorProps {
    error: Error;
    hash: string | undefined;
}

export interface RevealErrorState {
    isLoading: boolean;
    error: string | null;
}