import { Sort } from ".";

type Pageable = {
    sort: Sort
    pageNumber: number
    pageSize: number
    offset: number
    unpaged: boolean
    paged: boolean
}

export default Pageable