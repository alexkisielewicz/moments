import { axiosReq } from "../api/axiosDefaults"

// can be used with any paginated data like posts/comments/profiles etc.
export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next)
        setResource(prevResource => ({
            ...prevResource, 
            next: data.next,
            // we use reduce method to look through the new page of resaults from API
            results: data.results.reduce((acc, cur) => {
                // some method to check for duplicates, it stops as soon as it finds one common item
                return acc.some(accResult => accResult.id === cur.id) 
                ? acc 
                : [...acc, cur]
                // we append new results to previous array with resoults
            }, prevResource.results)
        }))
    } catch (error) {
        
    }
}