"use strict"
import axios from "axios"

// perform get all repos
export const getRepos = async (context: any): Promise<any[]> => {

    const endpoint = context.host + "repositories/" + context.namespace + "/"
    try {
        const resp = await axios.get(endpoint,
            {
                headers: {
                    authorization: "Bearer " + context.token
                }
            })
        const records = resp.data.results
        console.log("Get repos successfull. Count:", records.length)
        return records
    } catch (err) {
        console.error(JSON.stringify(err).substr(0,800))
        throw (err)
    }
}
