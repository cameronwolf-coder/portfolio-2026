"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  CASE_STUDY_ACCESS_COOKIE,
  CASE_STUDY_ACCESS_VALUE,
  parseGateSubmission,
} from "./gate";
import { submitCaseStudyNotification } from "./notification";

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

  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ??
    "39f0cbc5-d930-406e-b056-8f127918c336";

  const notified = await submitCaseStudyNotification(
    submissionResult.submission,
    accessKey,
  );
  if (!notified) {
    return {
      status: "error",
      message: "The notification did not send. Try again in a moment.",
    };
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
