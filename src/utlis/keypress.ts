import { KeyboardEvent  } from "react"

export const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault()
    }
}