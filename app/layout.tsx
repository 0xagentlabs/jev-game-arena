import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Jev Game Studio · AI 游戏创作平台",description:"选择经过验证的规则模板，与 Jev 智能体即时对战。"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
