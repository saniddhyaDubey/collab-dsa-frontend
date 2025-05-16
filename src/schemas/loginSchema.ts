import { z } from "zod"; 

// #zod schema for login functionality:
export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Atleast 6 characters")
});

// #Important for useForm hook - so that it gets inferred type from the schema:
export type LoginSchema = z.infer<typeof loginSchema>;
