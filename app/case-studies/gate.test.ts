import { describe, expect, it } from "vitest";
import {
  CASE_STUDY_ACCESS_VALUE,
  hasCaseStudyAccess,
  parseGateSubmission,
} from "./gate";

describe("parseGateSubmission", () => {
  it("normalizes a valid email when the case study exists", () => {
    // Given
    const formData = new FormData();
    formData.set("email", "  Reader@Example.COM ");
    formData.set("slug", "zappyride");
    formData.set("botcheck", "");

    // When
    const result = parseGateSubmission(formData);

    // Then
    expect(result).toEqual({
      ok: true,
      submission: {
        email: "reader@example.com",
        slug: "zappyride",
      },
    });
  });

  it("rejects an invalid email", () => {
    // Given
    const formData = new FormData();
    formData.set("email", "not-an-email");
    formData.set("slug", "zappyride");
    formData.set("botcheck", "");

    // When
    const result = parseGateSubmission(formData);

    // Then
    expect(result).toEqual({
      ok: false,
      message: "Enter a valid email address.",
    });
  });

  it("rejects an unknown case-study slug", () => {
    // Given
    const formData = new FormData();
    formData.set("email", "reader@example.com");
    formData.set("slug", "missing-study");
    formData.set("botcheck", "");

    // When
    const result = parseGateSubmission(formData);

    // Then
    expect(result).toEqual({
      ok: false,
      message: "That case study is unavailable.",
    });
  });

  it("rejects a filled honeypot field", () => {
    // Given
    const formData = new FormData();
    formData.set("email", "reader@example.com");
    formData.set("slug", "zappyride");
    formData.set("botcheck", "spam");

    // When
    const result = parseGateSubmission(formData);

    // Then
    expect(result).toEqual({
      ok: false,
      message: "Unable to submit this form.",
    });
  });
});

describe("hasCaseStudyAccess", () => {
  it("grants access only for the server-issued cookie value", () => {
    // Given
    const grantedCookie = CASE_STUDY_ACCESS_VALUE;

    // When
    const granted = hasCaseStudyAccess(grantedCookie);
    const missing = hasCaseStudyAccess(undefined);
    const forged = hasCaseStudyAccess("other");

    // Then
    expect({ granted, missing, forged }).toEqual({
      granted: true,
      missing: false,
      forged: false,
    });
  });
});
