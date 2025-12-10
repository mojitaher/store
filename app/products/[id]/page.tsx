export default function Details({ params }: { params: { id: string } }) {
  const productId = params.id;
  console.log(productId);
}
