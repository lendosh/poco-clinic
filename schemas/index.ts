import * as z from 'zod';
import {UserRole} from '@prisma/client';

const NOT_EMPTY_STRING_MESSAGE = 'Value can not be empty';

export const CategoryCreateSchema = z.object({
    name: z
        .string({
            message: NOT_EMPTY_STRING_MESSAGE
        })
        .min(1, NOT_EMPTY_STRING_MESSAGE),
    slug: z
        .string()
        .min(1, NOT_EMPTY_STRING_MESSAGE)
        .regex(new RegExp('^[a-z]*$'), 'Only english characters')
})

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.DOCTOR, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(10)),
    newPassword: z.optional(z.string().min(10)),
})
    .refine((data) => {
        if (!data.newPassword && data.password) {
            return false;
        }

        return true;
    }, {
        message: 'New password is required!',
        path: ['newPassword']
    })
    .refine((data) => {
        if (data.newPassword && !data.password) {
            return false;
        }

        return true;
    }, {
        message: 'Password is required!',
        path: ['password']
    });

// export const TerminSchema = z.object({
//     name: z.string().min(1, NOT_EMPTY_STRING_MESSAGE),
//     surrName: z.string().optional(),
//     phone: z.string({
//         message: 'Phone number is required'
//     })
//         .regex(new RegExp('^[0-9]*$'), 'Only number are allow')
//     email: z.union([
//         z.literal(''),
//         z.string().email().optional()
//     ]),
//     description: z.string().optional(),
// });

export const NewPasswordSchema = z.object({
    password: z.string().min(10, {
        message: 'Minimum of 6 characters required'
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: 'Email is required'
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(1, {
        message: 'Password is required'
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(10, {
        message: 'Minimum 10 characters required'
    }),
    name: z.string().min(1, {
        message: 'Name is required'
    })
});