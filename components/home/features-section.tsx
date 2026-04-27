import { FileText, Calendar, FileCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: FileText,
    title: "AI文案生成",
    description: "一键生成小红书、公众号、抖音等平台的爆款文案，支持多种风格和语气调整",
  },
  {
    icon: Calendar,
    title: "AI周报助手",
    description: "输入工作内容关键词，自动生成专业的周报，告别周五下午的焦虑",
  },
  {
    icon: FileCheck,
    title: "AI简历优化",
    description: "智能优化简历内容，突出亮点，提升面试邀约率，让你的简历脱颖而出",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            强大的AI工具，助力你的效率提升
          </h2>
          <p className="text-pretty text-muted-foreground">
            我们提供多种AI工具，帮助你在工作和生活中节省时间，提高产出质量
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
