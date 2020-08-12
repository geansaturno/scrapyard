import { Requester } from './utils/'

Requester.getData('https://mais.cpb.com.br/meditacao/se-ele-quiser/').then(data => {
    console.log('data', data)
})

// https.get(, response => {
//     console.log('responde', response)

//     response.on('data', chunk => rawData += chunk)
//     response.on('end', () => {
//         console.log('data', rawData)
//     })
// })
