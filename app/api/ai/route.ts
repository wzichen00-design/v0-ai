import { NextResponse } from "next/server"

// Mock AI responses for demonstration
const generateResponse = (type: string, content: string): string => {
  switch (type) {
    case "copywriting":
      return `📝 小红书爆款文案

【标题】
姐妹们！这个${content.slice(0, 10)}真的绝了！

【正文】
今天必须给大家安利一下这个宝贝！

✨ 亲测体验：
用了一段时间，效果真的太惊艳了！不愧是很多博主都在推的好物~

💡 使用心得：
1️⃣ 第一次使用就被惊艳到
2️⃣ 性价比超高，学生党也能无压力入手
3️⃣ 回购无限次的那种好用

🎯 适合人群：
• 追求品质生活的姐妹
• 想要提升幸福感的朋友
• 送礼自用都超合适

💰 性价比：⭐⭐⭐⭐⭐

#好物分享 #必买清单 #真实测评 #生活好物`

    case "weekly-report":
      return `📊 本周工作总结

一、工作完成情况

根据您提供的关键词"${content}"，本周主要完成以下工作：

1. 核心任务推进
   - 完成了相关功能的开发与测试
   - 优化了用户体验流程
   - 解决了多个技术难题

2. 项目进度
   - 项目整体进度符合预期
   - 关键节点均按时完成
   - 与团队协作顺畅

二、遇到的问题及解决方案

1. 技术挑战
   - 问题：部分功能实现复杂度较高
   - 解决：通过技术调研和团队讨论，找到最优解决方案

三、下周工作计划

1. 继续推进当前项目开发
2. 完善文档和测试用例
3. 参与团队技术分享

四、需要的支持

暂无特殊需求，如有变化会及时沟通。`

    case "resume":
      return `💼 优化后的简历内容

原始描述：${content}

✨ 优化建议：

【优化版本1 - 突出成果】
主导公司官网全栈开发项目，采用 React + TypeScript 技术栈，实现了响应式设计和性能优化，页面加载速度提升40%，用户留存率提高25%。

【优化版本2 - 强调能力】
负责公司官网从0到1的技术架构设计与实现：
• 技术选型：React 18 + TypeScript + Tailwind CSS
• 核心功能：实现组件化开发，建立可复用UI组件库
• 性能优化：采用懒加载、代码分割等技术，LCP指标优化至2秒内
• 团队协作：制定前端开发规范，指导2名初级开发者

【亮点提炼】
✅ 技术能力：精通React生态，有大型项目实战经验
✅ 业务理解：能够将业务需求转化为技术方案
✅ 持续学习：紧跟前端技术发展趋势

💡 小贴士：简历中尽量使用量化数据，如"提升XX%"、"节省XX小时"等，让成果更具说服力。`

    default:
      return "暂不支持此类型的内容生成"
  }
}

export async function POST(request: Request) {
  try {
    const { type, content } = await request.json()

    if (!type || !content) {
      return NextResponse.json(
        { error: "请提供内容类型和输入内容" },
        { status: 400 }
      )
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const result = generateResponse(type, content)

    return NextResponse.json({ result })
  } catch {
    return NextResponse.json(
      { error: "服务器错误，请稍后重试" },
      { status: 500 }
    )
  }
}
