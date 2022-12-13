import { Sort } from ".";

interface Pageable {
    sort: Sort
    pageNumber: number
    pageSize: number
    offset: number
    unpaged: boolean
    paged: boolean
}

export default Pageable