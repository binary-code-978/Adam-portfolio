import type { Metadata } from "next";
import { buSummerLabDetail } from "@/lib/resume";
import { DetailPage } from "@/app/components/DetailPage";

export const metadata: Metadata = {
  title: buSummerLabDetail.title,
  description: buSummerLabDetail.overview,
};

export default function BUSummerLabPage() {
  return <DetailPage data={buSummerLabDetail} />;
}
