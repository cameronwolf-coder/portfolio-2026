"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  CASE_STUDY_ACCESS_COOKIE,
  CASE_STUDY_ACCESS_VALUE,
  parseGateSubmission,
} from "./gate";

export type GateActionResult = {
  readonly status: "error";
  readonly message: string;
};

export async function grantCaseStudyAccess(
  formData: FormData,
): Promise<GateActionResult> {
  const submissionResult = parseGateSubmission(formData);
  if (!submissionResult.ok) {
    return { status: "error", message: submissionResult.message };
  }

  const { slug } = submissionResult.submission;

  const cookieStore = await cookies();
  cookieStore.set(CASE_STUDY_ACCESS_COOKIE, CASE_STUDY_ACCESS_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    path: "/case-studies",
  });

  redirect(`/case-studies/${slug}`);
}
