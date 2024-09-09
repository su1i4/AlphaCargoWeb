import { IBags, ICities, ICountries, IOffices, IParcelTypes, IServices, IUserInfo } from "../types/assets.types";
import { getTokenInLocalStorage } from "../utlis/getTokenLocal";
import { instance } from "./instance.axios";


export const assetsApi = {
    async getUserInformation(): Promise<IUserInfo> {
        return instance.get(`/users`, {
            headers: {
                Authorization: `Bearer ${getTokenInLocalStorage()}`
            }
        })
    },

    async getServicesInformation(): Promise<IServices[]> {
        return instance.get(`/services`)
    },

    async getOffiesInformation(id?: string): Promise<IOffices[]> {
        return instance.get(`/offices${id ? `/${id}` : ''}`)
    },

    async getLocationsCitiesInformation(): Promise<ICities[]> {
        return instance.get(`/locations/cities`)
    },

    async getLocationsCitiesInformationById(id: number): Promise<ICities> {
        return instance.get(`/locations/cities/${id}`)
    },


    async getLocationsCountiresInformation(): Promise<ICountries[]> {
        return instance.get(`/locations/countries`)
    },

    async getBagsInformation(): Promise<IBags[]> {
        return instance.get(`/bags`)
    },

    async getParcelTypesInformation(): Promise<IParcelTypes[]> {
        return instance.get(`/parcel-type`)
    }
}