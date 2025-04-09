import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
});
