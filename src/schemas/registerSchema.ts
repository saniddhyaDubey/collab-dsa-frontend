import { z } from "zod";

// #zod schema for register functionality:
export const registerSchema = z.object({
    firstName: z.string().min(3, "At least 3 characters"),
    lastName: z.string().min(3, "At least 3 characters"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6, "Atleast 6 characters")
});

// #Important for useForm hook - so that it gets inferred type from the schema:
export type RegisterSchema = z.infer<typeof registerSchema>;
