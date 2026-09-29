import { chromium } from "playwright"
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", args:["--use-gl=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"] })
const p = await b.newPage({ viewport:{width:1440,height:900} })
const errs=[]; p.on("console",m=>{if(m.type()==="error")errs.push(m.text())}); p.on("pageerror",e=>errs.push(String(e)))
await p.goto("http://localhost:3113/",{waitUntil:"load"}); await p.waitForTimeout(2500)
const at=async(name,y,w=2200)=>{ await p.evaluate(v=>window.scrollTo(0,v),y); await p.waitForTimeout(w); await p.screenshot({path:`design/implementation/${name}.png`}) }
await p.screenshot({path:"design/implementation/a-hero.png"})
await at("b-facts-about",880)
await at("c-avenues",1860)
await p.hover("article >> nth=2"); await p.waitForTimeout(900); await p.screenshot({path:"design/implementation/c-avenues-hover.png"})
await at("d-projects",2700,10000)
await at("e-leadership",4450)
await at("f-footer",99999)
console.log(errs.slice(0,8)); await b.close()
