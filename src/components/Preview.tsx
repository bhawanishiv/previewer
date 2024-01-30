/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export interface PreviewProps {
  url?: string | null;
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  faviconUrl?: string | null;
  loading?: boolean;
}

export default function Preview({
  title,
  url,
  description,
  imageUrl,
  faviconUrl,
  loading,
}: PreviewProps) {
  const renderPreview = () => {
    if (loading) {
      return (
        <div className="animate-pulse flex flex-col w-full gap-3">
          <div className="flex gap-3 items-center w-full">
            <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
            <div className="w-[40%] h-4 bg-gray-900 rounded-lg"></div>
          </div>
          <div className="mt-1 w-full h-6 bg-gray-900 rounded-lg"></div>
          <div className="mt-1 w-[90%] h-4 bg-gray-900 rounded-lg"></div>
        </div>
      );
    }

    if (!url) return null;

    const _url = new URL(url);
    const origin = _url.origin;

    const _faviconUrl = faviconUrl?.startsWith("/")
      ? `${origin}${faviconUrl}`
      : faviconUrl;

    const _imageUrl = imageUrl?.startsWith("/")
      ? `${origin}${imageUrl}`
      : imageUrl;

    return (
      <div>
        <div className="flex gap-2 items-center">
          {_faviconUrl && (
            <img src={_faviconUrl} alt={title || ""} width={30} height={40} />
          )}
          <div className="text-sm font-semibold">{origin}</div>
        </div>
        <h1 className="mt-2">
          <Link
            href={url}
            target="_blank"
            rel="noopener"
            className="text-blue-400"
          >
            {title}
          </Link>
        </h1>
        {_imageUrl && (
          <img
            src={_imageUrl}
            alt={description || ""}
            className="my-4 rounded-lg"
          />
        )}
        <div className="mt-1 text-sm text-gray-600">{description}</div>
      </div>
    );
  };

  return renderPreview();
}
