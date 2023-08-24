import { useState, useEffect, useRef } from 'react';

import '../styles/Home.css';

import { NavigationMenu } from "../components/NavigationMenu";
import { Error } from "../components/Error";
import { Alphabet } from '../components/Alphabet';

import { NavigationMenuProps } from "../model/NavigationMenuProps";
import { PasswordOptionsProps } from "../model/PasswordOptionsProps";
import { AlphabetProps } from '../model/AlphabetProps';
import { Letter } from '../model/Letter';

import * as Handles from "../services/handleCheckboxes";
import * as Password from "../services/passwordGenerator";
import * as Alphabets from "../services/Alphabets";


export const Home = () => {
    const [password, setPassword] = useState<string>("");
    const [passwordLength, setPasswordLength] = useState<number>(12);
    const [uppercase, setUppercase] = useState<boolean>(true);
    const [lowercase, setLowercase] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<boolean>(true);
    const [symbols, setSymbols] = useState<boolean>(true);
    const [bads, setBads] = useState<boolean>(false);
    const [doubtfuls, setDoubtfuls] = useState<boolean>(false);
    const [avoidedChars, setAvoidedChars] = useState<string>("");
    const [error, setError] = useState<string|null>(null);
    const justCopiedToClipboard = useRef<boolean>(false);
    const [letters, setLetters] = useState<Letter[]>(
        Alphabets
            .getAll()
            .split('')
            .map((singleLetter: string) => {
                return new Letter(singleLetter, false);
        })

    )
    const [passwordOptionsProps, setPasswordOptionsProps] = useState<PasswordOptionsProps>({
        length: 12,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        bad: false,
        doubtful: false,
        avoidedChars: '',
    });
    const previousPasswordOptionsProps = useRef<PasswordOptionsProps>(passwordOptionsProps);

    const anyPropMarked = (props: PasswordOptionsProps): boolean => {
        return (
            props.uppercase ||
            props.lowercase ||
            props.numbers ||
            props.symbols
        );
    }

    const refreshPassword = () => {
        setPassword(Password.generatePassword(passwordOptionsProps));
    }

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(password);
        }
        catch (error) {
            setTimeout(() => {
                setError("Error copying to clipboard");
            }, 2000);
            setError(null);
        }
    }

    const navigationMenuProps: NavigationMenuProps = {
        refresh: refreshPassword,

        justCopied: justCopiedToClipboard,

        copyToClipboard: copyToClipboard,

        uppercase,
        setUppercase,
        handleUppercase: Handles.handleUppercase,

        lowercase,
        setLowercase,
        handleLowercase: Handles.handleLowercase,

        numbers,
        setNumbers,
        handleNumbers: Handles.handleNumbers,

        symbols,
        setSymbols,
        handleSymbols: Handles.handleSymbols,

        length: passwordLength,
        setLength: setPasswordLength,
        handleLength: Handles.handleLength,

        bad: bads,
        setBad: setBads,
        handleBad: Handles.handleBad,

        doubtful: doubtfuls,
        setDoubtful: setDoubtfuls,
        handleDoubtful: Handles.handleDoubtful,

        avoidedChars: avoidedChars,
        setAvoidedChars: setAvoidedChars,
        handleAvoidedChars: Handles.handleAvoidedChars,
    };

    const alphabetProps: AlphabetProps = {
        characters: Alphabets.getAll(),

        letters: letters,
        setLetters: setLetters,
        handleLetters: Handles.handleLetters,
    }

    useEffect(() => {
        previousPasswordOptionsProps.current = passwordOptionsProps;

        const newPassword = Password.generatePassword(passwordOptionsProps);
        setTimeout(() => { // prevent infinite loop
        }, 100);
        setPassword(newPassword);
    }, [passwordOptionsProps]);

    useEffect(() => {
        const newProps: PasswordOptionsProps = {
            length: passwordLength,
            uppercase: uppercase,
            lowercase: lowercase,
            numbers: numbers,
            symbols: symbols,
            bad: bads,
            doubtful: doubtfuls,
            avoidedChars: Letter.getAvoidedChar(letters),
        };

        if (! anyPropMarked(newProps)) {
            setPasswordOptionsProps(previousPasswordOptionsProps.current);
            setPassword("");
            setError("You must select at least one option");
        }
        else {
            setError(null);
            setPasswordOptionsProps(newProps);
        }

    }, [lowercase, uppercase, numbers, symbols, passwordLength, bads, doubtfuls, letters])


    return (
        <>
            <h1>Password Generator</h1>
            <header>
                <label>
                    {password}
                </label>
            </header>

            <Error 
                message={error}
            />
            <NavigationMenu 
                props={navigationMenuProps}
            />

            <Alphabet 
                props={alphabetProps}
            />
        </>
    );
};
