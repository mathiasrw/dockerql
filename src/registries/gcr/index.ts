"use strict"
import axios from "axios"

export * from "./namespaces"
export * from "./repos"
export * from "./images"

export const type = "gcr"

export const init = async (config: any): Promise<any> => {

    const namespace = (typeof(config.namespace)!=="undefined") ? config.namespace : "gcr.io"

    const data = {
        "username": "_json_key",
        "password": JSON.stringify(config.jsonkey)
    }

    try {
        const endpoint = "https://gcr.io/v2/token?scope=repository:"+config.jsonkey.project_id+"/catalog:*&service=gcr.io"
        const resp = await axios.get(endpoint, { auth: data })
        const token = resp.data.token

        const context = {"type": type, "name": config.name, "namespace": namespace, "jsonkey": config.jsonkey, "token":token}

        console.log("Authenticated successfully to " + config.name + " (type: " + type +")")
        console.log("Project Id:", config.jsonkey.project_id)
        console.log("Namespace:",namespace)

        return context
    } catch (err) {
        console.error(JSON.stringify(err).substr(0,800))
        throw (err)
    }
}
