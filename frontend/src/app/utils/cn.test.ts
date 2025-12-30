import { describe, it, expect } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("should merge class names correctly", () => {
    expect(cn("text-red-500", "bg-blue-500")).toBe("text-red-500 bg-blue-500");
  });

  it("should handle conditional classes", () => {
    const isActive = true;
    const isInactive = false;
    expect(cn("base-class", isActive && "conditional-class")).toBe(
      "base-class conditional-class"
    );
    expect(cn("base-class", isInactive && "conditional-class")).toBe(
      "base-class"
    );
  });

  it("should merge conflicting tailwind classes correctly", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["class1", "class2"], "class3")).toBe("class1 class2 class3");
  });

  it("should handle empty inputs", () => {
    expect(cn()).toBe("");
    expect(cn("")).toBe("");
  });

  it("should filter out falsy values", () => {
    expect(cn("class1", null, undefined, false, "class2")).toBe(
      "class1 class2"
    );
  });
});
