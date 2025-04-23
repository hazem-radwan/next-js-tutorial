export default async function DocsDetails({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length >= 1) return <h2>{slug?.join("/")}</h2>;
  return (
    <div>
      <h2>Docs page</h2>
    </div>
  );
}
