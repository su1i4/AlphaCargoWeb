import { IUserInfo } from "../../types/assets.types"

interface ISystem {
    user: Partial<IUserInfo>
}


export const systemInitialState: ISystem = {
    user: {}
} 