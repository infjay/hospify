import { z } from "zod";

export const UserFormValidation = z.object({
    name: z.string()
    .min(4,"username must be at least 4 characters")
    .max(40,"Username can not be longer than 40 characters"),
    email: z.string().email("Invalid email Address"),
    phone: z.string().refine((phone)=> /^\+?[1-9]\d{1,14}$/.test(phone), "Invalid phone number")

})