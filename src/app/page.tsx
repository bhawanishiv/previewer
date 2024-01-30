import { TPreviewResponse } from "@/types/preview";
import { preview } from "@/services/previewer";
import PreviewForm from "@/components/PreviewForm";

export default async function Home({
  searchParams: { url },
}: {
  searchParams: { url?: string };
}) {
  const initialFormState: TPreviewResponse = url
    ? await preview(url)
    : { data: null };

  console.log(`url->`, url);

  return (
    <main className="flex flex-row sm:flex-col sm:justify-center sm:items-center min-h-screen p-4">
      <PreviewForm initialFormState={initialFormState} />
    </main>
  );
}
