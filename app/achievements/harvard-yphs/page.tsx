import type { Metadata } from "next";
import { harvardYPHSDetail } from "@/lib/resume";
import { DetailPage } from "@/app/components/DetailPage";

export const metadata: Metadata = {
  title: harvardYPHSDetail.title,
  description: harvardYPHSDetail.overview,
};

const pullQuote =
  "“Public health usually shows up after the damage is done — think tobacco, think social media. The point of this project is to show up while the data is still being written, so schools and parents can act on evidence instead of panic.”";

export default function HarvardYPHSPage() {
  return <DetailPage data={{ ...harvardYPHSDetail, pullQuote }} />;
}
