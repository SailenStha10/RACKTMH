import { chromium } from "playwright"
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe" })
for (const [name,w,h] of [["desktop",1440,900],["mobile",390,844]]) {
  const p = await b.newPage({ viewport:{width:w,height:h} })
  const errs=[]; p.on("console",m=>{if(m.type()==="error")errs.push(m.text())}); p.on("pageerror",e=>errs.push(String(e)))
  await p.goto("http://localhost:3111/")
  await p.waitForTimeout(2500)
  const H = await p.evaluate(()=>document.documentElement.scrollHeight)
  for (let y=0,i=1;y<H;y+=h,i++){ await p.evaluate(v=>window.scrollTo(0,v),y); await p.waitForTimeout(1600); await p.screenshot({path:`design/implementation/${name}-${String(i).padStart(2,"0")}.png`}) }
  console.log(name,H,errs)
}
await b.close()
