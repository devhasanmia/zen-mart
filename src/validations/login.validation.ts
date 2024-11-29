import { z } from "zod";

export const loginValidationSchema = z.object({
    email: z
        .string({
            invalid_type_error: "Invalid email address",
            required_error: "Email is required",
        })
        .email("Invalid email address"),
    password: z
        .string({
            invalid_type_error: "Invalid password",
            required_error: "Password is required",
        })
        .min(6, "Password must be at least 6 characters")
});

