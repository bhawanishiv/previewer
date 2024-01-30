"use client";

import { useFormState } from "react-dom";

import { submitPreview } from "@/actions/preview.actions";

import FormContainer from "@/components/FormContainer";

import { cn } from "@/lib/utils";
import { TPreviewResponse } from "@/types/preview";
import Preview from "./Preview";

export interface PreviewFormProps {
  initialFormState: TPreviewResponse;
}

export default function PreviewForm({ initialFormState }: PreviewFormProps) {
  const [state, formAction] = useFormState(submitPreview, initialFormState);

  const renderPreviewForm = () => {
    return (
      <form
        action={formAction}
        className="flex flex-col gap-8 sm:w-[600px] w-full"
      >
        <FormContainer state={state} />
      </form>
    );
  };

  return renderPreviewForm();
}
