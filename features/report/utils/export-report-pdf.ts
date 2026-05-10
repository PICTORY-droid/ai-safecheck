export function printScanReport(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.print();
}
