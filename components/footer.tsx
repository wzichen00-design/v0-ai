import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">AI效率</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              一站式AI效率工具平台，让AI提升你的工作效率
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">产品</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/tools" className="hover:text-foreground">
                  AI工具
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground">
                  定价
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">资源</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  博客
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  帮助中心
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">法律</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  服务条款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AI效率. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
