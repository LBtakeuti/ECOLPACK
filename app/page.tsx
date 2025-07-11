'use client'

import { useState } from 'react'
import Image from 'next/image'

type TabType = 'top' | 'branform' | 'big' | 'ecolopat' | 'green' | 'company'

interface ProductData {
  title: string
  subtitle: string
  features: string[]
  specifications: {
    [key: string]: string
  }
  materials: {
    [key: string]: string
  }
  images: {
    main?: string
    smallBag?: string
    packaging?: string
    usage?: string[]
  }
}

const productData: Record<TabType, ProductData | null> = {
  top: {
    title: 'ブランフォームトップ',
    subtitle: '生分解性緩衝材',
    features: [
      'ブランフォームトップは生分解性の緩衝材です。',
      '主成分は植物デンプン及びポリビニルアルコール、微生物により分解されます。',
      '一般ゴミとして廃棄出来ます。',
      '生ごみとして処分される場合は、必ず袋から取り出して下さい。',
      '焼却しても有害なガスが発生せず、可燃ゴミとして処理出来ます。（自治体の処理方法に従って下さい。）',
      '保管場所は常温で保管して下さい。',
      '質量の変化は、温度40℃湿度95％の環境にて、24H経過後で8％、72H経過後で9％という低い値になっています。',
      '本品は食べられません。'
    ],
    specifications: {
      '緩衝材': 'ブランフォームトップ',
      '包装袋仕様': '小袋',
      '小袋サイズ': '60mm×350mm（外装）',
      '外装袋': '400mm×600mm×180mm（ダンボール）',
      '容量': '約400ℓ'
    },
    materials: {
      '緩衝材': '植物デンプン、ポリビニルアルコール',
      '小袋': 'ポリエチレン',
      '外装袋': 'ダンボール'
    },
    images: {
      main: '/images/ブランフォームトップ.jpg',
      smallBag: '/images/ブランフォームトップ小袋.jpg',
      packaging: '/images/ブランフォームトップ外装形態.jpg'
    }
  },
  branform: {
    title: 'ブランフォーム',
    subtitle: '生崩壊性緩衝材',
    features: [
      'ブランフォームは生崩壊性の緩衝材です。',
      '主成分は植物デンプンです。',
      '焼却しても有害なガスが発生せず、可燃ゴミとして処理出来ます。（自治体の処理方法に従って下さい）',
      '発泡スチロールの約半分の容積で済みます。',
      '耐熱性（80℃-1000H）、耐湿性（40℃95％-1000H)に優れています。',
      '防虫性（シバンムシ、ゴキブリ）に優れています。',
      '有機物特有の臭気は軽微です。',
      '本品は食べられません。'
    ],
    specifications: {
      '緩衝材': 'ブランフォーム',
      '包装袋仕様': '小袋',
      '小袋サイズ': '60mm×350mm（外装）',
      '外装袋': '400mm×600mm×180mm（ダンボール）',
      '容量': '約400ℓ'
    },
    materials: {
      '緩衝材': '植物デンプン',
      '小袋': 'ポリエチレン',
      '外装袋': 'ダンボール'
    },
    images: {
      main: '/images/ブランフォーム.jpg',
      smallBag: '/images/ブランフォーム小袋.jpg',
      packaging: '/images/ブランフォーム外装形態.jpg'
    }
  },
  big: {
    title: 'ブランフォームBIG',
    subtitle: '大粒バラ状緩衝材',
    features: [
      '今までにない大粒（70mm）のバラ状緩衝材です。',
      '大型梱包の下敷き、果物箱等での隙間緩衝用として最適です。',
      '小袋仕様に対して、フィルムレスの為、プラスチック削減に寄与します。',
      '取扱い性に優れ、梱包作業のコストダウンに貢献します。',
      '長さ55mm〜150mmの範囲で対応できます。ご相談ください。'
    ],
    specifications: {
      '緩衝材': 'ブランフォームBIG',
      '包装袋仕様': '外装のみ',
      '小袋サイズ': 'なし',
      '外装袋': 'ポリ袋、ダンボール',
      '容量': 'ご相談ください'
    },
    materials: {
      '緩衝材': '植物デンプン',
      '小袋': 'なし',
      '外装袋': 'ポリエチレン、ダンボール'
    },
    images: {
      main: '/images/ブランフォームBIG.jpg',
      usage: [
        '/images/ブランフォームBIG使用例1.jpg',
        '/images/ブランフォームBIG使用例２.jpg',
        '/images/ブランフォームBIG使用例３.jpg'
      ]
    }
  },
  ecolopat: {
    title: 'エコロパット',
    subtitle: 'シート状緩衝材',
    features: [
      '梨、桃、リンゴ、その他果物用緩衝シートに最適。',
      '表面はエンボス加工、裏面はフラット加工です。',
      'エンボスにより柔らかな緩衝性を保ちます。',
      'ご要望の寸法に対応します。'
    ],
    specifications: {
      '緩衝材': 'エコロパット',
      '包装袋仕様': '外装のみ',
      'シートサイズ': 'ご要望サイズ',
      '外装袋': 'ポリ袋',
      '容量': 'ご相談ください'
    },
    materials: {
      '緩衝材': '植物デンプン',
      '外装袋': 'ポリエチレン'
    },
    images: {
      main: '/images/エコロパット.jpg',
      usage: ['/images/エコロパット使用例.jpg']
    }
  },
  green: {
    title: 'ブランフォームグリーン',
    subtitle: 'パット状発泡緩衝材',
    features: [
      '梱包の下敷き、角当て緩衝材として最適です。',
      '小袋仕様に対して、フィルムレスの為、プラスチック削減に寄与します。'
    ],
    specifications: {
      '緩衝材': 'ブランフォームグリーン',
      '包装袋仕様': '外装のみ',
      'パットサイズ': 'ご要望サイズ',
      '外装袋': 'ポリ袋、ダンボール',
      '容量': 'ご相談ください'
    },
    materials: {
      '緩衝材': '植物デンプン',
      '外装袋': 'ポリエチレン、ダンボール'
    },
    images: {
      main: '/images/ブランフォームグリーン.jpg'
    }
  },
  company: null
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('top')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderProductContent = (data: ProductData, currentTab: TabType) => {
    return (
      <div className="w-full">
        {/* ヒーローセクション */}
        <section className="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[70vh] flex items-center bg-gradient-to-b from-green-50 to-white">
          <div className="w-full py-6 sm:py-10 lg:py-0">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                <div className="lg:col-span-8">
                  <h1 className="text-xl sm:text-2xl lg:text-[3rem] leading-[1.3] lg:leading-[1.1] font-light tracking-tight mb-3 sm:mb-4 lg:mb-8">
                    {data.title}
                  </h1>
                  <div className="w-12 sm:w-16 lg:w-24 h-px mb-3 sm:mb-4 lg:mb-8" style={{ backgroundColor: '#79A676' }}></div>
                  <p className="text-base sm:text-lg lg:text-2xl font-extralight text-gray-700 max-w-2xl">
                    {data.subtitle}
                  </p>
                </div>
                <div className="lg:col-span-4 flex items-center lg:items-end justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">
                  <div className="text-center lg:text-right">
                    <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-1 sm:mb-2">ESTABLISHED</p>
                    <p className="text-2xl sm:text-3xl lg:text-5xl font-thin" style={{ color: '#79A676' }}>1996</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* メインコンテンツ */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">

          {/* 製品ビジュアルセクション */}
          <section className="mb-16 sm:mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-5">
                {data.images.main && (
                  <div className="bg-white aspect-[4/3] flex items-center justify-center">
                    <Image 
                      src={data.images.main} 
                      alt={data.title} 
                      width={800} 
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
              
              <div className="lg:col-span-7">
                <h2 className="text-xs font-light tracking-[0.3em] mb-6 lg:mb-8" style={{ color: '#79A676' }}>PRODUCT FEATURES</h2>
                <div className="space-y-6 sm:space-y-8 lg:space-y-12 mb-12 lg:mb-20">
                  {data.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 sm:gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-xs font-light text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="col-span-10 sm:col-span-11">
                        <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-gray-800">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-8 lg:pt-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
                    <div>
                      <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-2 lg:mb-3">MAIN MATERIAL</p>
                      <p className="text-base sm:text-lg lg:text-xl font-light">{data.materials['緩衝材']}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-2 lg:mb-3">PACKAGE TYPE</p>
                      <p className="text-base sm:text-lg lg:text-xl font-light">{data.specifications['包装袋仕様']}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 仕様詳細セクション */}
          <section className="py-12 sm:py-16 lg:py-24 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 mb-16 sm:mb-24 lg:mb-32 bg-green-50">
            <div className="max-w-[1600px] mx-auto">
              <h3 className="text-xs font-light tracking-[0.3em] mb-8 sm:mb-12 lg:mb-16 text-center" style={{ color: '#79A676' }}>SPECIFICATIONS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px" style={{ backgroundColor: '#79A676' }}>
                {Object.entries(data.specifications).map(([key, value]) => (
                  <div key={key} className="bg-white p-6 sm:p-8 lg:p-12 text-center">
                    <p className="text-xs font-light tracking-[0.2em] text-gray-500 mb-2 sm:mb-3 lg:mb-4">{key}</p>
                    <p className="text-sm sm:text-base lg:text-lg font-light text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 製品画像ギャラリー */}
          {(data.images.packaging || data.images.smallBag || data.images.usage) && (
            <section>
              <h3 className="text-xs font-light tracking-[0.3em] mb-8 sm:mb-12 lg:mb-16" style={{ color: '#79A676' }}>PRODUCT DETAILS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {data.images.packaging && (
                  <div className="bg-white">
                    <div className="aspect-square bg-white p-8 sm:p-12 lg:p-16">
                      <Image 
                        src={data.images.packaging} 
                        alt="外装形態" 
                        width={400} 
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 lg:p-6">
                      <p className="text-xs font-light tracking-[0.2em] text-gray-600">外装形態</p>
                    </div>
                  </div>
                )}
                {data.images.smallBag && (
                  <div className="bg-white">
                    <div className="aspect-square bg-white p-8 sm:p-12 lg:p-16">
                      <Image 
                        src={data.images.smallBag} 
                        alt="小袋" 
                        width={400} 
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 lg:p-6">
                      <p className="text-xs font-light tracking-[0.2em] text-gray-600">小袋</p>
                    </div>
                  </div>
                )}
                {data.images.usage && data.images.usage.map((img, index) => (
                  <div key={index} className="bg-white">
                    <div className="aspect-square bg-white p-8 sm:p-12 lg:p-16">
                      <Image 
                        src={img} 
                        alt={`使用例${index + 1}`} 
                        width={400} 
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 lg:p-6">
                      <p className="text-xs font-light tracking-[0.2em] text-gray-600">使用例 {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* その他の特徴 */}
          {data.features.length > 3 && (
            <section className="border-t border-gray-200 pt-8 sm:pt-12 lg:pt-16">
              <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-4 sm:mb-6">その他の特徴</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {data.features.slice(3).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

      </div>
    )
  }

  const renderCompanyInfo = () => {
    return (
      <div className="w-full">
        <section className="min-h-[35vh] sm:min-h-[45vh] lg:min-h-[60vh] text-white flex items-center relative overflow-hidden" style={{ backgroundColor: '#8FB58C' }}>
          {/* 背景パターン */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
            }}></div>
          </div>
          
          <div className="relative w-full py-8 sm:py-10 lg:py-0">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="text-xs font-light tracking-[0.3em] text-white/70 mb-3 sm:mb-4 lg:mb-8">COMPANY OVERVIEW</p>
                  <h1 className="text-2xl sm:text-3xl lg:text-[5rem] leading-[1.2] lg:leading-[0.9] font-thin tracking-tight whitespace-nowrap">
                    <span className="block lg:inline">株式会社</span>
                    <span className="lg:hidden"> </span>
                    <span className="block lg:inline">エコロパック</span>
                  </h1>
                  {/* モバイル向け追加情報 */}
                  <div className="mt-6 lg:hidden">
                    <p className="text-sm text-white/80 font-light">
                      環境に優しい緩衝材のパイオニア
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-16 sm:mb-24 lg:mb-32" style={{ backgroundColor: '#79A676' }}>
              <div className="bg-white p-8 sm:p-12 lg:p-16 text-center">
                <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-3 sm:mb-4 lg:mb-6">ESTABLISHED</p>
                <p className="text-3xl sm:text-4xl lg:text-6xl font-thin">1996</p>
                <p className="text-sm font-light text-gray-600 mt-2 sm:mt-3 lg:mt-4">年6月11日</p>
              </div>
              <div className="bg-white p-8 sm:p-12 lg:p-16 text-center">
                <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-3 sm:mb-4 lg:mb-6">CAPITAL</p>
                <p className="text-3xl sm:text-4xl lg:text-6xl font-thin">3,600</p>
                <p className="text-sm font-light text-gray-600 mt-2 sm:mt-3 lg:mt-4">万円</p>
              </div>
              <div className="bg-white p-8 sm:p-12 lg:p-16 text-center">
                <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-3 sm:mb-4 lg:mb-6">CEO</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-thin mt-2 sm:mt-3 lg:mt-4">丸山 陸雄</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <div>
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm font-light text-gray-500 mb-2 sm:mb-3">Corporate Information</p>
                  <h3 className="text-xl sm:text-2xl font-extralight text-gray-900">企業情報</h3>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-2 sm:mb-3">株式会社エコロパック</h4>
                    <p className="text-sm sm:text-base text-gray-600 font-light">帝国通信工業株式会社（東証プライム上場）全額出資</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-200">
                      <p className="text-sm text-gray-500">取引銀行</p>
                      <p className="text-sm sm:text-base text-gray-900">みずほ銀行</p>
                    </div>
                    <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-200">
                      <p className="text-sm text-gray-500">組織形態</p>
                      <p className="text-sm sm:text-base text-gray-900">株式会社</p>
                    </div>
                    <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-200">
                      <p className="text-sm text-gray-500">従業員数</p>
                      <p className="text-sm sm:text-base text-gray-900">50名</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8">事業内容</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2">研究開発</h4>
                    <p className="text-sm sm:text-base text-gray-600">天然有機物と熱可塑性樹脂との複合材の開発</p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2">製品ラインナップ</h4>
                    <ul className="space-y-1 text-sm sm:text-base text-gray-600">
                      <li>・バラ状緩衝材（ブランフォームシリーズ）</li>
                      <li>・シート状緩衝材（エコロパット）</li>
                      <li>・パット状発泡緩衝材（ブランフォームグリーン）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-16 sm:mt-24 lg:mt-32">
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-8 sm:mb-12 lg:mb-16 text-center">事業拠点</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 sm:p-8 lg:p-12 text-center">
                  <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">本社</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    〒211-8530<br />
                    川崎市中原区苅宿45-1
                  </p>
                  <div className="space-y-1 text-xs sm:text-sm text-gray-500">
                    <p>TEL: 044-433-2065</p>
                    <p>FAX: 044-433-8706</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 sm:p-8 lg:p-12 text-center">
                  <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">さいたま工場</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    〒339-0073<br />
                    埼玉県さいたま市岩槻区上野4-6-10
                  </p>
                  <div className="space-y-1 text-xs sm:text-sm text-gray-500">
                    <p>TEL: 048-792-0958</p>
                    <p>FAX: 048-792-0959</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="fixed w-full top-0 z-50" style={{ backgroundColor: '#79A676' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8">
            <div className="flex items-center">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-extralight tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.4em] text-white">ECOLOPACK</h1>
            </div>
            
            {/* モバイルメニューボタン */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="メニュー"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* スペーサー */}
      <div className="h-[72px] sm:h-[88px] lg:h-[104px]"></div>

      {/* デスクトップナビゲーション */}
      <nav className="hidden lg:block bg-white border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex overflow-x-auto scrollbar-hide">
            {['top', 'branform', 'big', 'ecolopat', 'green', 'company'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={`px-10 py-6 text-xs font-light tracking-[0.2em] whitespace-nowrap transition-all duration-500 relative border-r border-gray-100 last:border-r-0 ${
                  activeTab === tab 
                    ? 'text-black border-b-2' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={activeTab === tab ? { borderBottomColor: '#79A676' } : {}}
              >
                {tab === 'top' && 'BRANFORM TOP'}
                {tab === 'branform' && 'BRANFORM'}
                {tab === 'big' && 'BRANFORM BIG'}
                {tab === 'ecolopat' && 'ECOLOPAT'}
                {tab === 'green' && 'BRANFORM GREEN'}
                {tab === 'company' && 'COMPANY'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* モバイルナビゲーション */}
      <nav className={`lg:hidden bg-white border-b border-gray-100 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2">
          {['top', 'branform', 'big', 'ecolopat', 'green', 'company'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as TabType)
                setIsMobileMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-sm font-light tracking-wider ${
                activeTab === tab 
                  ? 'text-black bg-gray-50' 
                  : 'text-gray-600'
              }`}
            >
              {tab === 'top' && 'BRANFORM TOP'}
              {tab === 'branform' && 'BRANFORM'}
              {tab === 'big' && 'BRANFORM BIG'}
              {tab === 'ecolopat' && 'ECOLOPAT'}
              {tab === 'green' && 'BRANFORM GREEN'}
              {tab === 'company' && 'COMPANY'}
            </button>
          ))}
        </div>
      </nav>

      {/* コンテンツ */}
      <div>
        {activeTab === 'company' 
          ? renderCompanyInfo() 
          : productData[activeTab] && renderProductContent(productData[activeTab], activeTab)}
      </div>

      {/* フッター */}
      <footer className="text-white" style={{ backgroundColor: '#79A676' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 mb-6 sm:mb-8">
            <div className="lg:col-span-6">
              <h3 className="text-lg sm:text-xl font-thin tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.4em] mb-3 sm:mb-4 text-white">ECOLOPACK</h3>
              <p className="text-xs sm:text-sm font-light text-white/80 leading-relaxed max-w-md">
                植物由来の緩衝材開発を通じて、持続可能な社会の実現に貢献しています。
              </p>
            </div>
            
            <div className="lg:col-span-3">
              <p className="text-xs font-light tracking-[0.3em] text-white/60 mb-3 sm:mb-4">PRODUCTS</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-light">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Branform Series</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Ecolopat</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Product Catalog</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-3">
              <p className="text-xs font-light tracking-[0.3em] text-white/60 mb-3 sm:mb-4">CONTACT</p>
              <address className="text-xs sm:text-sm font-light text-white/80 not-italic">
                〒211-8530<br />
                川崎市中原区苅宿45-1<br />
                <span className="text-white">044-433-2065</span>
              </address>
            </div>
          </div>
          
          <div className="pt-4 sm:pt-6 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs font-light text-white/60 text-center sm:text-left">
                © 2024 ECOLOPACK CORPORATION. ALL RIGHTS RESERVED.
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <a href="#" className="text-xs font-light text-white/60 hover:text-white transition-colors">PRIVACY POLICY</a>
                <a href="#" className="text-xs font-light text-white/60 hover:text-white transition-colors">TERMS OF USE</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}