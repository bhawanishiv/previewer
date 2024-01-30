import Image from "next/image";

import { submitPreview } from "./_actions/preview.actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <form action={submitPreview}>
        <input type="url" name="urlInput" id="urlInput" className="bg-black text-white border border-white"/>
      </form>
    </main>
  );
}
