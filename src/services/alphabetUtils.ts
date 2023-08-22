import { TableProps } from "../model/TableProps";


export function getRowsSize(alphabet: string): number {
    const len = alphabet.length;
    
    try {
        return Math.ceil(Math.sqrt(len));
    }
    catch (e) {
        return 0;
    }



}

export function getColumnsSize(alphabet: string): number {
    const len = alphabet.length;

    try {
        return Math.ceil(len / getRowsSize(alphabet));
    }
    catch (e) {
        return 0;
    }
}

/**
 * 
 * @returns TableProps: {rows: number, columns: number}
 */
export function getTableSize(alphabet: string): TableProps {
    const props: TableProps = {
        rows: getRowsSize(alphabet),
        columns: getColumnsSize(alphabet),
    }


    return props;
}