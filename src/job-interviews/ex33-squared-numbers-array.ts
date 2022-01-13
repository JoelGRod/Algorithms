/**
 * Given a number array return every number to the power of two.
 */

import { filterList } from "../helpers/basic-helpers";

export function getSquaredList(list: any[]): number[] {

    return filterList("number", list).map( element => Math.pow(element, 2));

}