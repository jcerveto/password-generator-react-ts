import { MutableRefObject } from 'react';

export interface NavigationMenuProps {
    refresh: () => void,

    copyToClipboard: () => void,

    justCopied: MutableRefObject<boolean>,

    uppercase: boolean,
    setUppercase: (currentStatus: boolean) => void,
    handleUppercase: (setUppercase:  (currentStatus: boolean) => void, uppercase: boolean) => void,

    lowercase: boolean,
    setLowercase: (currentStatus: boolean) => void,
    handleLowercase: (setLowercase:  (currentStatus: boolean) => void, lowercase: boolean) => void,

    numbers: boolean,
    setNumbers: (currentStatus: boolean) => void,
    handleNumbers: (setNumbers:  (currentStatus: boolean) => void, numbers: boolean) => void,

    symbols: boolean,
    setSymbols: (currentStatus: boolean) => void,
    handleSymbols: (setSymbols:  (currentStatus: boolean) => void, symbols: boolean) => void,

    length: number,
    setLength: (currentLength: number) => void,
    handleLength: (setLength:  (currentLength: number) => void, length: number) => void,

    bad: boolean,
    setBad: (currentStatus: boolean) => void,
    handleBad: (setBad:  (currentStatus: boolean) => void, bad: boolean) => void,

    doubtful: boolean,
    setDoubtful: (currentStatus: boolean) => void,
    handleDoubtful: (setDoubtful:  (currentStatus: boolean) => void, doubtful: boolean) => void,
}