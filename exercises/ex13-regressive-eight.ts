/**
 * Regressive counting by 8.
 */

export function regressiveEight(digit: number): string[] {

    let regressiveList: string[] = [
        `--- From ${digit} to 0 ---`,
    ];

    while(digit > 0) {
        regressiveList.push(`- nº${digit}`);
        digit -= 8;
    }

    regressiveList.push('- nº0', '--- End ---');

    return regressiveList;

}