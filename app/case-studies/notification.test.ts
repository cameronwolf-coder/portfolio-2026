import { describe, expect, it, vi } from "vitest";
import { submitCaseStudyNotification } from "./notification";

const submission = {
  email: "reader@example.com",
  slug: "truv",
};

describe("submitCaseStudyNotification", () => {
  it("posts the normalized request from the browser boundary", async () => {
    const fetcher = vi.fn(async (_input: string | URL, init?: RequestInit) => {
      expect(init?.method).toBe("POST");
      expect(init?.body).toBeInstanceOf(FormData);

      const body = init?.body;
      if (!(body instanceof FormData)) {
        throw new Error("Expected a FormData request body");
      }

      expect(body.get("access_key")).toBe("server-key");
      expect(body.get("email")).toBe(submission.email);
      expect(body.get("case_study")).toBe(submission.slug);

      return Response.json({ success: true });
    });

    await expect(
      submitCaseStudyNotification(submission, "server-key", fetcher),
    ).resolves.toBe(true);
    expect(fetcher).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("returns false when the provider rejects the request", async () => {
    const fetcher = vi.fn(async () =>
      Response.json({ success: false }, { status: 403 }),
    );

    await expect(
      submitCaseStudyNotification(submission, "server-key", fetcher),
    ).resolves.toBe(false);
  });

  it("returns false when the provider request fails", async () => {
    const fetcher = vi.fn(async () => {
      throw new TypeError("fetch failed");
    });

    await expect(
      submitCaseStudyNotification(submission, "server-key", fetcher),
    ).resolves.toBe(false);
  });
});
