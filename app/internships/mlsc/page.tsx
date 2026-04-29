import type { Metadata } from "next";
import { mlscDetail } from "@/lib/resume";
import { InternshipDetailPage } from "@/app/components/InternshipDetailPage";

export const metadata: Metadata = {
  title: mlscDetail.title,
  description: mlscDetail.overview,
};

export default function MlscPage() {
  return <InternshipDetailPage detail={mlscDetail} />;
}
