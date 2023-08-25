export interface PasswordProps {
    password: string,
    refreshFunction: () => void,
    copyToClipboardFunction: () => void,
}