export function getRatingColor(rating: number) {
  if (rating <= 30) return "text-red-500";
  if (rating <= 70) return "text-yellow-400";
  return "text-green-500";
}