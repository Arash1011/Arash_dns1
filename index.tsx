import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectItem } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle, Send, Globe } from 'lucide-react'

export default function Home() {
  const [country, setCountry] = useState('US')
  const [ipVersion, setIpVersion] = useState<'ipv4' | 'ipv6'>('ipv4')
  const [dnsResult, setDnsResult] = useState<{primary:string, secondary:string}|null>(null)
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'DE', name: 'Germany' },
    { code: 'SG', name: 'Singapore' },
    { code: 'JP', name: 'Japan' },
    { code: 'FR', name: 'France' },
    { code: 'AU', name: 'Australia' },
    { code: 'GB', name: 'United Kingdom' },
  ]

  function generateDns() {
    const ascii = country.charCodeAt(0)
    if (ipVersion === 'ipv4') {
      const base = `${ascii}.${Math.floor(Math.random()*200)+1}`
      setDnsResult({primary:`${base}.1.1`, secondary:`${base}.2.2`})
    } else {
      const base = `2001:${country.toLowerCase()}`
      setDnsResult({primary:`${base}::1`, secondary:`${base}::2`})
    }
  }

  const [comments, setComments] = useState<{name:string, text:string}[]>([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  function addComment() {
    if(name && text){
      setComments([...comments, {name, text}])
      setName('')
      setText('')
    }
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 bg-black/60 backdrop-blur z-50">
        <h1 className="text-2xl font-extrabold text-green-400">Arash Azizi DNS</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:text-green-400">سرویس‌ها</a>
          <a href="#dns" className="hover:text-green-400">ساخت DNS</a>
          <a href="#comments" className="hover:text-green-400">نظرات</a>
          <a href="#contact" className="hover:text-green-400">پشتیبانی</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-300 drop-shadow-lg">
          کاهش پینگ در Call of Duty و PUBG
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          با DNSهای اختصاصی <span className="text-green-400 font-semibold">Arash Azizi</span> تجربه‌ای
          سریع، پایدار و بدون لگ داشته باشید.
        </p>
        <Button className="text-lg px-8 py-4 animate-bounce">دریافت DNS رایگان</Button>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 bg-gray-900">
        <h3 className="text-3xl font-bold text-center text-green-400 mb-12">سرویس‌های DNS آماده</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[{title:'PUBG', ping:35}, {title:'Call of Duty', ping:40}, {title:'Valorant', ping:28}].map(({title,ping})=>(
            <Card key={title}>
              <CardContent>
                <h4 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <Globe size={18} className="text-green-400" /> DNS مخصوص {title}
                </h4>
                <p className="text-gray-400 mb-4">پینگ میانگین: {ping}ms</p>
                <Button className="w-full">مشاهده تنظیمات</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DNS Generator */}
      <section id="dns" className="px-6 py-24">
        <h3 className="text-3xl font-bold text-center text-green-400 mb-8">ساخت DNS سفارشی</h3>
        <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-2xl space-y-6">
          <Select value={country} onValueChange={setCountry}>
            {countries.map(({code,name})=>(
              <SelectItem key={code} value={code}>{name}</SelectItem>
            ))}
          </Select>
          <div className="flex gap-4">
            <Button variant={ipVersion==='ipv4'?'default':'secondary'} className="flex-1" onClick={()=>setIpVersion('ipv4')}>IPv4</Button>
            <Button variant={ipVersion==='ipv6'?'default':'secondary'} className="flex-1" onClick={()=>setIpVersion('ipv6')}>IPv6</Button>
          </div>
          <Button onClick={generateDns} className="w-full flex items-center gap-2">
            <Globe size={18}/> ساخت DNS
          </Button>
          {dnsResult && (
            <div className="bg-gray-900 p-4 rounded-xl text-center space-y-2 border border-green-500/20">
              <h4 className="text-lg text-green-400 font-semibold">DNS اختصاصی شما</h4>
              <p><span className="text-gray-400">Primary:</span> {dnsResult.primary}</p>
              <p><span className="text-gray-400">Secondary:</span> {dnsResult.secondary}</p>
            </div>
          )}
        </div>
      </section>

      {/* Comments */}
      <section id="comments" className="px-6 py-24 bg-gray-900">
        <h3 className="text-3xl font-bold text-center text-green-400 mb-12">نظرات کاربران</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl space-y-4">
            <h4 className="text-xl font-semibold flex items-center gap-2"><MessageCircle size={20} className="text-green-400"/> ارسال نظر</h4>
            <input type="text" placeholder="نام شما" value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"/>
            <Textarea placeholder="نظر شما" value={text} onChange={e=>setText(e.target.value)} />
            <Button onClick={addComment} className="w-full flex gap-2"><Send size={18}/> ارسال</Button>
          </div>
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
            {comments.length===0 ? <p className="text-gray-400 text-center">هنوز نظری ثبت نشده است.</p> : comments.map(({name,text},idx)=>(
              <div key={idx} className="bg-gray-800 p-4 rounded-xl space-y-2 border border-gray-700">
                <p className="text-green-400 font-medium">{name}</p>
                <p className="text-gray-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <h3 className="text-3xl font-bold text-center text-green-400 mb-8">پشتیبانی و ارتباط</h3>
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-300">برای پشتیبانی فوری، روی دکمه زیر بزنید و مستقیم در تلگرام پیام دهید:</p>
          <a href="https://t.me/Arash_0048" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl text-lg flex items-center gap-2">
            <Send size={20}/> پشتیبانی تلگرام
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">© 2025 Arash Azizi. همه حقوق محفوظ است.</footer>
    </main>
  )
}
