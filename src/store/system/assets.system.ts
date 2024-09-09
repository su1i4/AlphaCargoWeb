import { IBags, ICities, ICountries, IOffices, IParcelTypes, IServices } from "../../types/assets.types";

interface IStore {
    serivce: Partial<IServices[]>
    offices: Partial<IOffices[]>
    countries: Partial<ICountries[]>
    cities: Partial<ICities[]>
    citiesbyid: Partial<ICities>
    bags: IBags[]
    parceltype: IParcelTypes[]
}

export const assetsInitialState: IStore = {
    serivce: [],
    offices: [],
    countries: [],
    cities: [],
    citiesbyid: {},
    bags: [],
    parceltype: []
}