import api from "@/service/api";

export async function getCode(data:string):Promise<string>{
    const response=await api.get("/",{
        params: {
            data:data
        },
    })
    const {request}=response;
    return request.responseURL;
}

