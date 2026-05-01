import type { Metadata } from "next";
import { amacNeurologyAppDetail } from "@/lib/resume";
import { DetailPage } from "@/app/components/DetailPage";

export const metadata: Metadata = {
  title: amacNeurologyAppDetail.title,
  description: amacNeurologyAppDetail.overview,
};

export default function AmacNeurologyAppPage() {
  return <DetailPage data={amacNeurologyAppDetail} />;
}
