import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "定价 - AI效率工具平台",
  description: "选择适合你的套餐，开始使用AI效率工具",
}

const plans = [
  {
    name: "免费版",
    description: "适合个人用户体验",
    price: "¥0",
    period: "永久免费",
    features: [
      "每日3次免费使用",
      "支持所有AI工具",
      "基础客服支持",
      "标准生成速度",
    ],
    buttonText: "免费开始",
    buttonVariant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Pro版",
    description: "适合高频使用用户",
    price: "¥29",
    period: "/月",
    features: [
      "不限使用次数",
      "支持所有AI工具",
      "优先客服支持",
      "极速生成",
      "导出多种格式",
      "API接入权限",
    ],
    buttonText: "立即订阅",
    buttonVariant: "default" as const,
    highlighted: true,
  },
  {
    name: "团队版",
    description: "适合企业和团队",
    price: "¥99",
    period: "/月",
    features: [
      "包含Pro版所有功能",
      "最多10个团队成员",
      "团队协作功能",
      "专属客户经理",
      "自定义品牌设置",
      "数据分析报表",
    ],
    buttonText: "联系我们",
    buttonVariant: "outline" as const,
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            简单透明的定价
          </h1>
          <p className="text-muted-foreground">
            选择适合你的套餐，随时可以升级或取消
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col transition-all",
                plan.highlighted
                  ? "border-primary shadow-lg scale-105"
                  : "hover:shadow-md"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                  最受欢迎
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.buttonVariant}
                  className="w-full"
                  asChild
                >
                  <Link href="/tools">{plan.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold">常见问题</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-2 font-semibold">可以随时取消订阅吗？</h3>
              <p className="text-sm text-muted-foreground">
                是的，您可以随时取消订阅。取消后，您仍可使用到当前计费周期结束。
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-2 font-semibold">免费版有什么限制？</h3>
              <p className="text-sm text-muted-foreground">
                免费版每日可使用3次AI工具，支持所有工具类型。如需更多次数，可升级到Pro版。
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-2 font-semibold">支持哪些支付方式？</h3>
              <p className="text-sm text-muted-foreground">
                我们支持微信支付、支付宝、银行卡等主流支付方式。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
