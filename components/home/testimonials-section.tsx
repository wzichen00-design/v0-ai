import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "张明",
    role: "产品经理",
    content: "用了AI周报助手后，每周五写周报的时间从2小时缩短到了10分钟，质量还更高了！",
    avatar: "张",
  },
  {
    name: "李婷",
    role: "内容运营",
    content: "小红书文案生成太好用了，帮我省了很多时间，而且生成的文案都很有爆款潜质。",
    avatar: "李",
  },
  {
    name: "王强",
    role: "求职者",
    content: "简历优化功能帮我重新梳理了工作经历，投了10份简历就收到了8个面试邀请！",
    avatar: "王",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            用户好评如潮
          </h2>
          <p className="text-pretty text-muted-foreground">
            看看其他用户是如何评价我们的AI工具的
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{`"${testimonial.content}"`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
