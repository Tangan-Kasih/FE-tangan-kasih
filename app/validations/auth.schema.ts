import z from "zod";

export const LoginSchema = z.object({
  input: z.string({
    required_error: "field is required",
  }),
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "Password must be more than 5 characters",
    })
    .min(8, "Password minimal 6 karakter"),
});

export const RegisterSchema = z.object({
  fullname: z.string().min(3, "Fullname must be at least 3 characters"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(
      /^\w+$/,
      "Username must only contain alphanumeric characters or underscores"
    ),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
});
