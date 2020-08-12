import { Scraper, DeCoracaoEmCoracaoData } from "../";

export class DeCoracaoEmCoracaoScraper implements Scraper {
    url = 'https://mais.cpb.com.br/meditacao/se-ele-quiser/'

    async scrapData() : Promise<DeCoracaoEmCoracaoData> {
        return new Promise((resolve, rejects) => {
            
        })
    }
}