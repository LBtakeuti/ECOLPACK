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

  const renderProductContent = (data: ProductData, currentTab: TabType) => {
    return (
      <div className="w-full">
        {/* ヒーローセクション */}
        <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-green-50 to-white">
          <div className="w-full">
            <div className="max-w-[1600px] mx-auto px-12">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                  <h1 className="text-[3rem] leading-[1.1] font-light tracking-tight mb-8">
                    {data.title}
                  </h1>
                  <div className="w-24 h-px mb-8" style={{ backgroundColor: '#79A676' }}></div>
                  <p className="text-2xl font-extralight text-gray-700 max-w-2xl">
                    {data.subtitle}
                  </p>
                </div>
                <div className="col-span-4 flex items-end justify-end">
                  <div className="text-right">
                    <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-2">ESTABLISHED</p>
                    <p className="text-5xl font-thin" style={{ color: '#79A676' }}>1996</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* メインコンテンツ */}
        <div className="max-w-[1600px] mx-auto px-12 py-16">

          {/* 製品ビジュアルセクション */}
          <section className="mb-32">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-5">
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
              
              <div className="col-span-7">
                <h2 className="text-xs font-light tracking-[0.3em] mb-8" style={{ color: '#79A676' }}>PRODUCT FEATURES</h2>
                <div className="space-y-12 mb-20">
                  {data.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="grid grid-cols-12 gap-4">
                      <div className="col-span-1">
                        <span className="text-xs font-light text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="col-span-11">
                        <p className="text-lg font-light leading-relaxed text-gray-800">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-12">
                  <div className="grid grid-cols-2 gap-16">
                    <div>
                      <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-3">MAIN MATERIAL</p>
                      <p className="text-xl font-light">{data.materials['緩衝材']}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-3">PACKAGE TYPE</p>
                      <p className="text-xl font-light">{data.specifications['包装袋仕様']}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 仕様詳細セクション */}
          <section className="py-24 -mx-12 px-12 mb-32 bg-green-50">
            <div className="max-w-[1600px] mx-auto">
              <h3 className="text-xs font-light tracking-[0.3em] mb-16 text-center" style={{ color: '#79A676' }}>SPECIFICATIONS</h3>
              <div className="grid grid-cols-5 gap-px" style={{ backgroundColor: '#79A676' }}>
                {Object.entries(data.specifications).map(([key, value]) => (
                  <div key={key} className="bg-white p-12 text-center">
                    <p className="text-xs font-light tracking-[0.2em] text-gray-500 mb-4">{key}</p>
                    <p className="text-lg font-light text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 製品画像ギャラリー */}
          {(data.images.packaging || data.images.smallBag || data.images.usage) && (
            <section>
              <h3 className="text-xs font-light tracking-[0.3em] mb-16" style={{ color: '#79A676' }}>PRODUCT DETAILS</h3>
              <div className="grid grid-cols-3 gap-8">
                {data.images.packaging && (
                  <div className="bg-white">
                    <div className="aspect-square bg-white p-16">
                      <Image 
                        src={data.images.packaging} 
                        alt="外装形態" 
                        width={400} 
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-light tracking-[0.2em] text-gray-600">外装形態</p>
                    </div>
                  </div>
                )}
                {data.images.smallBag && (
                  <div className="bg-white">
                    <div className="aspect-square bg-white p-16">
                      <Image 
                        src={data.images.smallBag} 
                        alt="小袋" 
                        width={400} 
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-light tracking-[0.2em] text-gray-600">小袋</p>
                    </div>
                  </div>
                )}
                {data.images.usage && data.images.usage.map((img, index) => (
                  <div key={index} className="bg-white">
                    <div className="aspect-square bg-white p-16">
                      <Image 
                        src={img} 
                        alt={`使用例${index + 1}`} 
                        width={400} 
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-light tracking-[0.2em] text-gray-600">使用例 {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* その他の特徴 */}
          {data.features.length > 3 && (
            <section className="border-t border-gray-200 pt-16">
              <h3 className="text-xl font-light text-gray-900 mb-6">その他の特徴</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.features.slice(3).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* CTAセクション */}
        <section className="text-white py-32 mt-32" style={{ backgroundColor: '#79A676' }}>
          <div className="max-w-[1600px] mx-auto px-12">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-8">
                <h2 className="text-[3.5rem] leading-[1.1] font-thin mb-8">
                  持続可能な未来への<br />
                  ソリューション
                </h2>
                <p className="text-xl font-extralight text-white/80 mb-16 max-w-2xl">
                  製品に関するご質問やカスタマイズのご相談を承っております
                </p>
              </div>
              <div className="col-span-4 flex items-end">
                <div className="w-full">
                  <a href="#" className="block border border-white py-6 px-12 text-center text-sm font-light tracking-[0.2em] hover:bg-white transition-all duration-500" style={{ color: 'inherit' }}>
                    CONTACT US
                  </a>
                  <div className="mt-8 text-center">
                    <p className="text-xs font-light tracking-[0.2em] text-white/60 mb-2">DIRECT LINE</p>
                    <p className="text-2xl font-thin tracking-wider">044-433-2065</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const renderCompanyInfo = () => {
    return (
      <div className="w-full">
        <section className="min-h-[60vh] text-white flex items-center" style={{ backgroundColor: '#79A676' }}>
          <div className="w-full">
            <div className="max-w-[1600px] mx-auto px-12">
              <div className="grid grid-cols-12">
                <div className="col-span-8">
                  <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-8">COMPANY OVERVIEW</p>
                  <h1 className="text-[5rem] leading-[0.9] font-thin tracking-tight">
                    株式会社<br />
                    エコロパック
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <div className="max-w-[1600px] mx-auto px-12 py-32">
            <div className="grid grid-cols-3 gap-px mb-32" style={{ backgroundColor: '#79A676' }}>
              <div className="bg-white p-16 text-center">
                <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-6">ESTABLISHED</p>
                <p className="text-6xl font-thin">1996</p>
                <p className="text-sm font-light text-gray-600 mt-4">年6月11日</p>
              </div>
              <div className="bg-white p-16 text-center">
                <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-6">CAPITAL</p>
                <p className="text-6xl font-thin">3,600</p>
                <p className="text-sm font-light text-gray-600 mt-4">万円</p>
              </div>
              <div className="bg-white p-16 text-center">
                <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-6">CEO</p>
                <p className="text-3xl font-thin mt-4">丸山 陸雄</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="mb-8">
                  <p className="text-sm font-light text-gray-500 mb-3">Corporate Information</p>
                  <h3 className="text-2xl font-extralight text-gray-900">企業情報</h3>
                </div>
                
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 border border-gray-100">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-light text-gray-900 mb-3">株式会社エコロパック</h4>
                      <p className="text-gray-600 font-light">帝国通信工業株式会社（東証プライム上場）全額出資</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500">取引銀行</p>
                        <p className="text-gray-900">みずほ銀行</p>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500">組織形態</p>
                        <p className="text-gray-900">株式会社</p>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500">従業員数</p>
                        <p className="text-gray-900">50名</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-8">事業内容</h3>
                
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-sm text-gray-600">R&D</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">研究開発</h4>
                        <p className="text-gray-600">天然有機物と熱可塑性樹脂との複合材の開発</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-sm text-gray-600">MFG</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">製品ラインナップ</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>・バラ状緩衝材（ブランフォームシリーズ）</li>
                          <li>・シート状緩衝材（エコロパット）</li>
                          <li>・パット状発泡緩衝材（ブランフォームグリーン）</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-32">
              <h3 className="text-2xl font-light text-gray-900 mb-16 text-center">事業拠点</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-12 text-center">
                  <h4 className="text-xl font-medium text-gray-900 mb-4">本社</h4>
                  <p className="text-gray-600 mb-2">
                    〒211-8530<br />
                    川崎市中原区苅宿45-1
                  </p>
                  <div className="space-y-1 text-sm text-gray-500">
                    <p>TEL: 044-433-2065</p>
                    <p>FAX: 044-433-8706</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-12 text-center">
                  <h4 className="text-xl font-medium text-gray-900 mb-4">さいたま工場</h4>
                  <p className="text-gray-600 mb-2">
                    〒339-0073<br />
                    埼玉県さいたま市岩槻区上野4-6-10
                  </p>
                  <div className="space-y-1 text-sm text-gray-500">
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
          <div className="flex items-center justify-between px-12 py-8">
            <div className="flex items-center">
              <h1 className="text-2xl font-extralight tracking-[0.4em] text-white">ECOLOPACK</h1>
            </div>
          </div>
        </div>
      </header>

      {/* スペーサー */}
      <div className="h-[104px]"></div>

      {/* ナビゲーション */}
      <nav className="bg-white border-b border-gray-100">
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

      {/* コンテンツ */}
      <div>
        {activeTab === 'company' 
          ? renderCompanyInfo() 
          : productData[activeTab] && renderProductContent(productData[activeTab], activeTab)}
      </div>

      {/* フッター */}
      <footer className="text-white" style={{ backgroundColor: '#79A676' }}>
        <div className="max-w-[1600px] mx-auto px-12 py-20">
          <div className="grid grid-cols-12 gap-16 mb-20">
            <div className="col-span-6">
              <h3 className="text-2xl font-thin tracking-[0.4em] mb-8 text-white">ECOLOPACK</h3>
              <p className="text-sm font-light text-white/80 leading-relaxed max-w-md">
                植物由来の緩衝材開発を通じて、<br />
                持続可能な社会の実現に貢献しています。
              </p>
            </div>
            
            <div className="col-span-3">
              <p className="text-xs font-light tracking-[0.3em] text-white/60 mb-6">PRODUCTS</p>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Branform Series</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Ecolopat</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Product Catalog</a></li>
              </ul>
            </div>
            
            <div className="col-span-3">
              <p className="text-xs font-light tracking-[0.3em] text-white/60 mb-6">CONTACT</p>
              <address className="text-sm font-light text-white/80 not-italic">
                〒211-8530<br />
                川崎市中原区苅宿45-1<br />
                <span className="text-white text-lg">044-433-2065</span>
              </address>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <div className="flex justify-between items-center">
              <p className="text-xs font-light text-white/60">
                © 2024 ECOLOPACK CORPORATION. ALL RIGHTS RESERVED.
              </p>
              <div className="flex space-x-8">
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