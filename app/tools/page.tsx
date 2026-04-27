import type { Metadata } from "next"
import { AIToolsClient } from "@/components/tools/ai-tools-client"

export const metadata: Metadata = {
  title: "AI工具 - AI效率工具平台",
  description: "使用AI工具生成小红书文案、周报、简历等内容",
}

export default function ToolsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            AI智能工具
          </h1>
          <p className="text-muted-foreground">
            选择工具类型，输入内容，一键生成专业结果
          </p>
        </div>

        <AIToolsClient />
      </div>
    </div>
  )
}
