"use client";

import { useFormState } from "react-dom";

import { submitPreview } from "@/actions/preview.actions";

import FormContainer from "@/components/FormContainer";
import { TPreviewResponse } from "@/types/preview";

const initialFormState: TPreviewResponse = { data: null };

export default function Home() {
  const [state, formAction] = useFormState(submitPreview, initialFormState);

  return (
    <main className="flex flex-row sm:flex-col sm:justify-center sm:items-center min-h-screen p-4">
      <form
        action={formAction}
        className="flex flex-col gap-8 sm:w-[600px] w-full"
      >
        <FormContainer state={state} />
      </form>
    </main>
  );
}
