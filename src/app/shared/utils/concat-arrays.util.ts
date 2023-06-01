export function concatArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
}
