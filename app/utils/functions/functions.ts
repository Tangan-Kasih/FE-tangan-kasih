export function formatPrice(price: number) {
  const numericPrice = typeof price === "string" ? parseInt(price) : price;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",

    maximumFractionDigits: 0,
  }).format(numericPrice);
}
