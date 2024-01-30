"use server";

import { preview } from "@/services/previewer";

import { TPreviewResponse } from "@/types/preview";

export const submitPreview = async (
  prevState: TPreviewResponse,
  form: FormData
) => {
  try {
    const url = form.get("urlInput") as string;
    return preview(url);
  } catch (e) {
    return { data: null };
  }
};
