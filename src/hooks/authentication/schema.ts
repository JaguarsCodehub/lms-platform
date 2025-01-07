import { z } from 'zod';

export const SignInSchema = z.object({
    email: z.string().email("You must give a valid email"),
    password: z
        .string()
        .min(8, "Your Password must be at least 8 characters long")
        .max(64, "Your Password cannot be longer than 64 characters")
        .refine(
            (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""),
            "Your Password must contain at least one uppercase letter"
        )
})