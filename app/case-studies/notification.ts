import { z } from "zod";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "39f0cbc5-d930-406e-b056-8f127918c336";
const notificationResponseSchema = z.object({
  success: z.literal(true),
});

type NotificationSubmission = {
  readonly email: string;
  readonly slug: string;
};

type NotificationFetch = (
  input: string,
  init: RequestInit,
) => Promise<Response>;

export async function submitCaseStudyNotification(
  submission: NotificationSubmission,
  accessKey: string,
  fetcher: NotificationFetch = fetch,
): Promise<boolean> {
  const notification = new FormData();
  notification.set("access_key", accessKey);
  notification.set("email", submission.email);
  notification.set("case_study", submission.slug);
  notification.set(
    "message",
    `${submission.email} requested the ${submission.slug} case study on cameronwolf.info.`,
  );
  notification.set("botcheck", "");

  try {
    const response = await fetcher(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: notification,
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const responseBody: unknown = await response.json();

    return (
      response.ok &&
      notificationResponseSchema.safeParse(responseBody).success
    );
  } catch {
    return false;
  }
}
