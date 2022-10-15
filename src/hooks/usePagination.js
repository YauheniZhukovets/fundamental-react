import {useMemo} from "react";

export const usePagination = (totalPage) => {

    return useMemo(() => {
        let arr = [...new Array(Math.abs(totalPage))]
        return arr.map((el, i) => i + 1)
    }, [totalPage])
}