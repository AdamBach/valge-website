import Link from 'next/link'
import { Button } from '@/components/ui/button'

const categories = ['키보드', '마우스', '데스크 시스템', '로봇 액세서리', '스마트 워크스페이스', '컴퓨터 주변기기']

const metrics = [
  { value: '2022', label: '국내 사업 운영 시작' },
  { value: '2025', label: '수출 사업 확장' },
  { value: 'US', label: 'Valge LLC 운영 거점' },
]

const model = [
  {
    title: '2022 한국 사업자',
    description: '기존 운영 이력과 커머스 경험을 보유한 국내 사업 주체입니다. 코리아스타트업포럼 정회원 신청의 기준 사업자로 활용합니다.',
  },
  {
    title: '2025 수출 사업 확장',
    description: '해외 판매, 상품 소싱, 수출 관련 운영을 담당하는 확장 사업입니다. 기존 사업 경험을 글로벌 커머스로 전환하는 역할입니다.',
  },
  {
    title: '미국 LLC 운영 거점',
    description: '미국 판매 채널, 정산, 고객 대응을 위한 해외 운영 거점입니다. 한국 상품의 글로벌 판매 실행력을 높입니다.',
  },
]

const capabilities = [
  '데이터 기반 상품 리서치',
  '글로벌 트렌드 및 판매 데이터 분석',
  '해외 시장 맞춤 상품 큐레이션',
  '콘텐츠 기반 커머스 운영',
  'Shopify 기반 글로벌 판매 채널 운영',
  '미국 LLC 기반 현지 판매 및 고객 대응',
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#111313]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#111313]/86 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link href="/" className="flex items-center" aria-label="Valge 홈">
            <img src="/valge-logo-dark.svg" alt="VALGE" className="h-10 w-auto object-contain md:h-11" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 lg:flex">
            <a href="#business" className="transition hover:text-white">사업 분야</a>
            <a href="#model" className="transition hover:text-white">운영 구조</a>
            <a href="#about" className="transition hover:text-white">회사 소개</a>
          </nav>

          <a href="#business">
            <Button size="sm" className="rounded-none bg-white text-[#111313] hover:bg-[#ff4a57] hover:text-white">
              쇼핑몰 준비중
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section className="relative min-h-[92vh] overflow-hidden bg-[#111313] pt-24 text-white md:pt-28">
          <div className="absolute inset-0 valge-grid opacity-60" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#f4f1ea] to-transparent" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:pb-24 lg:pt-16">
            <div>
              <p className="mb-7 inline-flex border border-[#ff4a57]/40 bg-[#ff4a57]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff7b86]">
                글로벌 커머스 스타트업
              </p>

              <h1 className="max-w-5xl font-display text-4xl font-black leading-[1.05] tracking-normal md:text-6xl lg:text-7xl">
                한국의 테크 제품을 글로벌 고객에게 연결합니다.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                발게(Valge)는 컴퓨터 주변기기, 스마트 데스크 제품, 로봇 액세서리 등 미래형 워크스페이스 제품을 해외 시장에 판매하는 크로스보더 커머스 스타트업입니다.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#about">
                  <Button size="lg" className="w-full rounded-none bg-[#ff4a57] text-white hover:bg-white hover:text-[#111313] sm:w-auto">
                    회사 소개 보기
                  </Button>
                </a>
                <a href="#model">
                  <Button size="lg" variant="glass-dark" className="w-full rounded-none border-white/20 sm:w-auto">
                    운영 구조 보기
                  </Button>
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="min-h-24 border border-white/12 bg-white/[0.04] p-4">
                    <strong className="block text-2xl font-black leading-none text-white">{metric.value}</strong>
                    <span className="mt-1 block text-sm text-white/58">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-[520px] lg:block">
              <div className="absolute inset-4 border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
              <img src="/valge-mark.svg" alt="Valge symbol" className="absolute right-8 top-4 z-10 h-20 w-20 object-contain drop-shadow-2xl" />
              <div className="absolute left-0 top-8 h-24 w-36 border border-[#ff4a57]/40 bg-[#ff4a57] p-4 text-white shadow-2xl">
                <span className="text-xs font-bold uppercase">운영 이력</span>
                <strong className="block text-4xl font-black">2022</strong>
              </div>

              <div className="absolute inset-x-10 top-24 h-56 rotate-[-8deg] border border-white/15 bg-[#d7d7cf] shadow-2xl md:h-64">
                <div className="flex h-7 items-center gap-2 border-b border-black/10 bg-[#efeee8] px-3">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="grid h-[calc(100%-1.75rem)] place-items-center bg-[radial-gradient(circle_at_70%_25%,#ff4a57_0,transparent_28%),linear-gradient(135deg,#16191d,#3a4147)] p-6">
                  <div className="text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff7b86]">Valge shop</span>
                    <p className="mt-4 font-display text-5xl font-black leading-none text-white">TECH<br />GEAR</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 right-0 z-10 w-52 border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <span className="text-xs font-semibold uppercase text-white/50">미국 운영 거점</span>
                <strong className="mt-2 block text-2xl font-black">Valge LLC</strong>
                <p className="mt-2 text-sm leading-6 text-white/65">판매 채널, 정산, 현지 고객 운영</p>
              </div>
            </div>
          </div>
        </section>

        <section id="business" className="bg-[#f4f1ea] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff4a57]">사업 분야</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">
                  단순 쇼핑몰이 아닌 글로벌 테크 커머스 브랜드.
                </h2>
              </div>
              <p className="text-base leading-7 text-[#5c5f56] md:text-lg">
                실제 판매는 Shopify 기반 스토어에서 운영하고, 이 홈페이지는 글로벌 소싱, 데이터 기반 상품 큐레이션, 콘텐츠 커머스, 한국-미국 운영 구조를 보여주는 회사 소개 채널로 사용합니다.
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div key={category} className="border border-[#111313]/12 bg-white/60 p-6 transition hover:border-[#ff4a57]/50 hover:bg-white">
                  <span className="text-xl font-black">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="model" className="bg-[#e4e1d8] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff4a57]">운영 구조</p>
            <h2 className="mt-4 max-w-5xl font-display text-4xl font-black leading-tight md:text-6xl">
              국내 운영 이력, 수출 확장, 미국 현지 운영을 하나의 성장 구조로 연결합니다.
            </h2>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {model.map((item, index) => (
                <article key={item.title} className="border border-[#111313]/12 bg-[#f4f1ea] p-7">
                  <span className="text-sm font-black text-[#ff4a57]">0{index + 1}</span>
                  <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-[#5c5f56]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#111313] py-20 text-white md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff7b86]">핵심 운영 역량</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">
                발게는 테크 제품의 글로벌 판매를 실행하는 크로스보더 커머스 운영사입니다.
              </h2>
              <p className="mt-6 leading-7 text-white/68">
                국내 커머스 운영 경험을 바탕으로 상품 발굴, 콘텐츠 현지화, 해외 판매 채널 운영을 연결합니다. 한국에서 시작한 제품과 브랜드가 글로벌 고객에게 더 자연스럽게 도달하도록 판매 구조를 설계합니다.
              </p>
            </div>

            <div className="grid gap-4">
              {capabilities.map((capability) => (
                <div key={capability} className="border border-white/12 bg-white/[0.04] p-5">
                  <span className="font-semibold">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#111313]/10 bg-[#f4f1ea] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-[#5c5f56] md:flex-row md:items-center md:justify-between md:px-8">
          <img src="/valge-logo-dark.svg" alt="VALGE" className="h-9 w-auto object-contain" />
          <span>미래형 워크스페이스 제품을 위한 글로벌 커머스 운영사</span>
        </div>
      </footer>
    </div>
  )
}
