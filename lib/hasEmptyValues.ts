export default function hasEmptyValues(obj: Record<string, any>): boolean {
    return Object.values(obj).some(
        value => value === '' || value === null || value === undefined
    )
}