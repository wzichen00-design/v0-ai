import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "博客 - AI效率工具平台",
  description: "了解AI工具的使用技巧和行业资讯",
}

const posts = [
  {
    slug: "how-to-write-viral-xiaohongshu-content",
    title: "如何用AI写出爆款小红书文案",
    description: "掌握这5个技巧，让你的小红书笔记轻松获得10万+曝光",
    date: "2024-01-15",
    category: "使用技巧",
  },
  {
    slug: "weekly-report-best-practices",
    title: "周报写作的最佳实践",
    description: "告别周五焦虑，学会用AI高效完成周报撰写",
    date: "2024-01-12",
    category: "职场效率",
  },
  {
    slug: "resume-optimization-guide",
    title: "简历优化完全指南",
    description: "HR眼中的好简历是什么样的？AI帮你一键优化",
    date: "2024-01-10",
    category: "求职攻略",
  },
  {
    slug: "ai-tools-comparison-2024",
    title: "2024年AI写作工具横评",
    description: "市面上主流AI写作工具对比，帮你选择最适合的工具",
    date: "2024-01-08",
    category: "行业资讯",
  },
  {
    slug: "content-creation-workflow",
    title: "内容创作者的AI工作流",
    description: "如何将AI工具融入日常内容创作，提升效率3倍",
    date: "2024-01-05",
    category: "使用技巧",
  },
  {
    slug: "ai-future-trends",
    title: "AI技术发展趋势展望",
    description: "从ChatGPT到多模态，AI技术将如何改变我们的工作方式",
    date: "2024-01-01",
    category: "行业资讯",
  },
]

export default function BlogPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            博客与资讯
          </h1>
          <p className="text-muted-foreground">
            了解AI工具的使用技巧、行业动态和最佳实践
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="group flex flex-col transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </div>
                <CardTitle className="line-clamp-2 text-lg transition-colors group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <Button variant="ghost" size="sm" className="group/btn">
                  阅读更多
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20">
          <Card className="bg-muted/50">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold">订阅我们的Newsletter</h2>
              <p className="max-w-md text-muted-foreground">
                获取最新的AI工具使用技巧、行业动态和独家优惠信息
              </p>
              <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="输入你的邮箱"
                  className="flex h-10 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Button>订阅</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                我们尊重您的隐私，不会发送垃圾邮件
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
