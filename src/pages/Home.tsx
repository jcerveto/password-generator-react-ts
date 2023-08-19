import { useState, useEffect, useRef } from 'react';

import '../styles/Home.css';

import { NavigationMenu } from "../components/NavigationMenu";
import { Error } from "../components/Error";

import { NavigationMenuProps } from "../model/NavigationMenuProps";
import { PasswordOptionsProps } from "../model/PasswordOptionsProps";

import * as Handles from "../services/handleCheckboxes";
import * as Password from "../services/passwordGenerator";

export const Home = () => {
    const [password, setPassword] = useState<string>("");
    const [passwordLength, setPasswordLength] = useState<number>(12);
    const [uppercase, setUppercase] = useState<boolean>(true);
    const [lowercase, setLowercase] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<boolean>(true);
    const [symbols, setSymbols] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);
    const [passwordOptionsProps, setPasswordOptionsProps] = useState<PasswordOptionsProps>({
        length: 12,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });
    const previousPasswordOptionsProps = useRef<PasswordOptionsProps>(passwordOptionsProps);


    const navigationMenuProps: NavigationMenuProps = {
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
    };

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


    }, [lowercase, uppercase, numbers, symbols, passwordLength])


    const anyPropMarked = (props: PasswordOptionsProps): boolean => {
        return (
            props.uppercase ||
            props.lowercase ||
            props.numbers ||
            props.symbols
        );
    }


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
        </>
    );
};
