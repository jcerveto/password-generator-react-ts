import { TableProps } from "../model/TableProps";


export function getRowsSize(alphabet: string): number {
    const len = alphabet.length;
    
    try {
        const sqrt = Math.sqrt(len);
        if (sqrt % 1 === 0) {
            return sqrt;
        }
        else {
            return Math.floor(sqrt) + 1;
        }
    }
    catch (e) {
        return 0;
    }
}

export function getColumnsSize(alphabet: string): number {
    const len = alphabet.length;

    try {
        const sqrt = Math.sqrt(len);
        if (sqrt % 1 === 0) {
            return sqrt;
        }
        else {
            return Math.floor(sqrt) + 1;
        }
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

export function getAlphabetTable(alphabet: string): string[][] {
    const tableProps = getTableSize(alphabet);
    const table: string[][] = [];

    let index = 0;
    for (let i = 0; i < tableProps.rows; i++) {
        table.push([]);
        for (let j = 0; j < tableProps.columns; j++) {
            table[i].push(alphabet[index]);
            index++;
        }
    }

    return table;
}