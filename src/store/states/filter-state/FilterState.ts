export type FilterSortTechnique = 'title' | 'date'
export type FilterSortOrder = 'asc' | 'desc'

interface FilterState {
    query?: string
    sort: FilterSortTechnique
    order: FilterSortOrder
    tags: string[]
}

export const initialState: FilterState = {
    sort: 'title',
    order: 'asc',
    tags: []
}

export default FilterState