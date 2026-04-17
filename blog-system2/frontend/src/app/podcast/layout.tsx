import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "播客节目",
  description: "收听论文复现组的技术播客节目，探讨前沿技术话题",
};

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
