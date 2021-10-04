export default interface City{
    uid: string,
    name: string,
    lat: number,
    lng: number,
    code: string,
    province: string,
    stateCode?: number,
    countryCode?: number,
    geohash?: string,
}

