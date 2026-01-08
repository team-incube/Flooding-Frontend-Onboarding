import ClubDetail from "@/views/club/ui/Club/ClubDetail";

export default async function ClubDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ClubDetail id={Number(id)} />;
}
