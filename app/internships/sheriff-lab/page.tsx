import type { Metadata } from "next";
import { sheriffLabDetail } from "@/lib/resume";
import { DetailPage } from "@/app/components/DetailPage";

export const metadata: Metadata = {
  title: sheriffLabDetail.title,
  description: sheriffLabDetail.overview,
};

export default function SheriffLabPage() {
  return <DetailPage data={sheriffLabDetail} />;
}
