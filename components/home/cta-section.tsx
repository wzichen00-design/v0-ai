import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-12 md:py-20">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            立即开始，体验AI的魔力
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-primary-foreground/80">
            加入数万用户，让AI帮你提升工作效率。免费开始，无需信用卡。
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
          >
            <Link href="/tools">
              立即免费使用
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
