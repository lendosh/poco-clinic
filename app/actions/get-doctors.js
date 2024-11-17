import {db} from "@/lib/db";

export const getDoctors = async () => {
    return db.doctor.findMany();
}