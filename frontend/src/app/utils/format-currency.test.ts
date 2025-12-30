import { describe, it, expect } from "vitest";
import { formatCurrency } from "./format-currency";

describe("formatCurrency", () => {
  it("should format positive numbers correctly", () => {
    expect(formatCurrency(1000)).toBe("R$\u00A01.000,00");
    expect(formatCurrency(1234.56)).toBe("R$\u00A01.234,56");
  });

  it("should format negative numbers correctly", () => {
    expect(formatCurrency(-500)).toBe("-R$\u00A0500,00");
    expect(formatCurrency(-1234.56)).toBe("-R$\u00A01.234,56");
  });

  it("should format zero correctly", () => {
    expect(formatCurrency(0)).toBe("R$\u00A00,00");
  });

  it("should format decimal numbers correctly", () => {
    expect(formatCurrency(0.99)).toBe("R$\u00A00,99");
    expect(formatCurrency(10.5)).toBe("R$\u00A010,50");
  });

  it("should format large numbers correctly", () => {
    expect(formatCurrency(1000000)).toBe("R$\u00A01.000.000,00");
    expect(formatCurrency(9999999.99)).toBe("R$\u00A09.999.999,99");
  });
});
