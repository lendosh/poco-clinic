import {db} from "@/lib/db";

export const getDoctors = async () => {
    return await db.Doctor.findMany();
}