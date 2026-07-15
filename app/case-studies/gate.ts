import { z } from "zod";
import { getCaseStudy } from "./data";

export const CASE_STUDY_ACCESS_COOKIE = "cw-case-study-access";
export const CASE_STUDY_ACCESS_VALUE = "granted";

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .max(254)
  .email()
  .brand<"CaseStudyEmail">();

const slugSchema = z.string().trim().min(1).max(80);
const honeypotSchema = z.literal("");

export type GateSubmission = {
  readonly email: z.infer<typeof emailSchema>;
  readonly slug: string;
};

export type GateSubmissionResult =
  | { readonly ok: true; readonly submission: GateSubmission }
  | { readonly ok: false; readonly message: string };

export function parseGateSubmission(formData: FormData): GateSubmissionResult {
  const honeypotResult = honeypotSchema.safeParse(formData.get("botcheck"));
  if (!honeypotResult.success) {
    return { ok: false, message: "Unable to submit this form." };
  }

  const emailResult = emailSchema.safeParse(formData.get("email"));
  if (!emailResult.success) {
    return { ok: false, message: "Enter a valid email address." };
  }

  const slugResult = slugSchema.safeParse(formData.get("slug"));
  if (!slugResult.success || !getCaseStudy(slugResult.data)) {
    return { ok: false, message: "That case study is unavailable." };
  }

  return {
    ok: true,
    submission: {
      email: emailResult.data,
      slug: slugResult.data,
    },
  };
}

export function hasCaseStudyAccess(cookieValue: string | undefined): boolean {
  return cookieValue === CASE_STUDY_ACCESS_VALUE;
}
