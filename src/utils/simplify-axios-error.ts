import { AxiosError } from "axios";

export default function simplifyAxiosError({ response }: AxiosError): SimplifiedAxiosResponse | undefined {
    if (!response) {
        return 
    }

    return {
        data: response.data,
        status: response.status,
        statusText: response.statusText
    }
}