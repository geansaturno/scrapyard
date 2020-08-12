import { Requester } from '../utils/'

export interface Scraper {
    url: string,
    scrapData: Function
}