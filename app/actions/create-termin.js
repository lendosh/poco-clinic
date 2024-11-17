'use server';

import {db} from "@/lib/db";

export const createTermin = async (data) => {
    const {firstName, lastName, email, time, date, insuranceNumber, phone, doctorId} = data;

    const termin = await db.termin.create({
        data: {
            firstName,
            lastName,
            email,
            time,
            insuranceNumber,
            phone,
            doctorId: Number(doctorId),
            date: new Date(date),
        }
    });

    return {data: termin};
}