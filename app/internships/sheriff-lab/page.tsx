import type { Metadata } from "next";
import { sheriffLabDetail } from "@/lib/resume";
import { InternshipDetailPage } from "@/app/components/InternshipDetailPage";

export const metadata: Metadata = {
  title: sheriffLabDetail.title,
  description: sheriffLabDetail.overview,
};

export default function SheriffLabPage() {
  return <InternshipDetailPage detail={sheriffLabDetail} />;
}
