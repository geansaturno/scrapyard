import https from 'https'

export class Requester {
    static async getData(url: string): Promise<String>{
        return new Promise((resolve, reject) => {
            let rawData = ''

            try {
                https.get(url, response => {
                    response.on('data', chunk => rawData += chunk)
                    response.on('end', () => {
                        resolve(rawData)
                    })
                })
            } catch (error){
                reject(error)
            }
        })
    }
}