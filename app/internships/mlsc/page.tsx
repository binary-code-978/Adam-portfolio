import type { Metadata } from "next";
import { mlscDetail } from "@/lib/resume";
import { DetailPage } from "@/app/components/DetailPage";

export const metadata: Metadata = {
  title: mlscDetail.title,
  description: mlscDetail.overview,
};

export default function MlscPage() {
  return <DetailPage data={mlscDetail} />;
}
