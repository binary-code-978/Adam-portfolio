import type { Metadata } from "next";
import { mosqueDetail } from "@/lib/resume";
import { DetailPage } from "@/app/components/DetailPage";

export const metadata: Metadata = {
  title: mosqueDetail.title,
  description: mosqueDetail.overview,
};

const pullQuote =
  "“Doing this every week is part of what makes me hopeful for the future of Muslims in this area.”";

export default function MosquePage() {
  return <DetailPage data={{ ...mosqueDetail, pullQuote }} />;
}
