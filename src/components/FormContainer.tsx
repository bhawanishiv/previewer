"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utlls";
import { TPreviewResponse } from "@/types/preview";
import Preview from "./Preview";

export interface FormContainerProps {
  state: TPreviewResponse;
}

export default function FormContainer({ state }: FormContainerProps) {
  const { pending } = useFormStatus();

  const renderFormContainer = () => {
    return (
      <>
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <input
            type="url"
            name="urlInput"
            id="urlInput"
            className="bg-gray-900 text-white outline-none rounded-lg p-2.5 w-full"
            placeholder="e.g. https://www.google.com"
          />
          <button
            type="submit"
            className={cn("px-4 py-2 rounded-lg bg-blue-400")}
            disabled={pending}
          >
            {pending ? "Generating..." : "Generate"}
          </button>
        </div>

        <Preview
          loading={pending}
          title={
            state.data?.title?.toString() ||
            state.data?.["og:title"]?.toString() ||
            state.data?.["twitter:title"]?.toString()
          }
          description={
            state.data?.description?.toString() ||
            state.data?.["og:description"]?.toString() ||
            state.data?.["twitter:description"]?.toString() ||
            ""
          }
          url={
            state.data?.url ||
            state.data?.["og:url"]?.toString() ||
            state.data?.["twitter:url"]?.toString() ||
            ""
          }
          faviconUrl={state.data?.faviconUrl?.toString()}
          imageUrl={
            state.data?.imageUrl?.toString() ||
            state.data?.["og:image"]?.toString() ||
            state.data?.["twitter:image"]?.toString()
          }
        />
      </>
    );
  };

  return renderFormContainer();
}
