export interface IUserInfo {
    id: number
    email: string
    phone: string
    fio: string
    createdAt: string
    updatedAt: string
}

export interface IServices {
    id: number, 
    header_title: string
    header_body: string
    description: string
    imagePath: string
}

export interface IOffices {
    address: string
    contactNumbers: string
    cityId: number
    countryId: number
    openingHour: number
    closingHour: number
}

export interface ICountries {
    id: number
    countryname: string
}

export interface ICities {
    id: number
    cityname: string
    countryId: number
    type: string
}

export interface IBags {
    id: number
    title: string
    price: number
}

export interface IParcelTypes {
    id: number
    name: string
}