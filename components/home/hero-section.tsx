import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span>AI驱动的效率提升工具</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            一站式AI效率工具平台
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            一键生成小红书文案 / 周报 / 简历，让AI成为你的智能助手，提升工作效率10倍
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/tools">
                立即免费使用
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">查看定价</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            免费开始，无需信用卡 · 每日3次免费额度
          </p>
        </div>
      </div>
    </section>
  )
}
