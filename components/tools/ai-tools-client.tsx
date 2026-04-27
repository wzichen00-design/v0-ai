"use client"

import { useState } from "react"
import { FileText, Calendar, FileCheck, Sparkles, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

const toolTypes = [
  {
    id: "copywriting",
    icon: FileText,
    title: "小红书文案",
    description: "生成吸引人的小红书爆款文案",
    placeholder: "请输入你想推广的产品或主题，例如：推荐一款好用的保湿面霜",
  },
  {
    id: "weekly-report",
    icon: Calendar,
    title: "周报生成",
    description: "生成专业的工作周报",
    placeholder: "请输入本周工作内容关键词，例如：完成用户调研、优化登录流程、修复3个bug",
  },
  {
    id: "resume",
    icon: FileCheck,
    title: "简历优化",
    description: "优化简历内容和表达",
    placeholder: "请输入你的工作经历或技能描述，例如：负责公司官网开发，使用React技术栈",
  },
]

export function AIToolsClient() {
  const [selectedTool, setSelectedTool] = useState(toolTypes[0])
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    if (!input.trim()) return

    setIsLoading(true)
    setOutput("")

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: selectedTool.id,
          content: input,
        }),
      })

      const data = await response.json()

      if (data.error) {
        setOutput(`错误: ${data.error}`)
      } else {
        setOutput(data.result)
      }
    } catch {
      setOutput("生成失败，请稍后重试")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      {/* Tool Selection */}
      <div className="grid gap-4 sm:grid-cols-3">
        {toolTypes.map((tool) => (
          <Card
            key={tool.id}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md",
              selectedTool.id === tool.id
                ? "border-primary ring-2 ring-primary/20"
                : "hover:border-primary/50"
            )}
            onClick={() => {
              setSelectedTool(tool)
              setInput("")
              setOutput("")
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    selectedTool.id === tool.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <tool.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">{tool.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {tool.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Input Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <selectedTool.icon className="h-5 w-5" />
            {selectedTool.title}
          </CardTitle>
          <CardDescription>{selectedTool.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder={selectedTool.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-32 resize-none"
          />
          <Button
            onClick={handleGenerate}
            disabled={!input.trim() || isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? (
              <>
                <Spinner className="mr-2 h-4 w-4" />
                生成中...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                生成内容
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Output Area */}
      {(output || isLoading) && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">生成结果</CardTitle>
              {output && !isLoading && (
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      复制
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Spinner className="h-8 w-8" />
              </div>
            ) : (
              <div className="whitespace-pre-wrap rounded-lg bg-muted p-4 text-sm">
                {output}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
