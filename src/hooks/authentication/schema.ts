import { z } from "zod"

export const SignInSchema = z.object({
    email: z.string().email("You must give a valid email"),
    password: z
        .string()
        .min(8, "Your Password must be at least 8 characters long")
        .max(64, "Your Password cannot be longer than 64 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
        ),
})
