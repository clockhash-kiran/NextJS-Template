import { auth } from "@/app/l"
import { headers } from "next/headers"
 
const someAuthenticatedAction = async () => {
    "use server";
    const session = await auth.api.getSession({
        headers: await headers()
    })
};