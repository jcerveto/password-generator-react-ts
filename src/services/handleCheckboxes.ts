export const handleUppercase = (
    setUppercase: (_currentStatus: boolean) => void, 
    currentStatus: boolean
): void => {
    setUppercase(!currentStatus);
}

export const handleLowercase = (
    setLowercase: (_currentStatus: boolean) => void,
    currentStatus: boolean
): void => {
    setLowercase(!currentStatus);
}

export const handleNumbers = (
    setNumbers: (_currentStatus: boolean) => void,
    currentStatus: boolean
): void => {
    setNumbers(!currentStatus);
}

export const handleSymbols = (
    setSymbols: (_currentStatus: boolean) => void,
    currentStatus: boolean
): void => {
    setSymbols(!currentStatus);
}

export const handleLength = (
    setLength: (_currentLength: number) => void,
    currentLength: number
): void => {
    setLength(currentLength);
}
