import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Home,
  Hammer,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Calendar,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Building2 className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">建築プロ</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
            サービス
          </Link>
          <Link href="#works" className="text-sm font-medium hover:text-blue-600 transition-colors">
            施工事例
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            会社概要
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            お問い合わせ
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    創業30年の実績
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    理想の住まいを
                    <br />
                    <span className="text-blue-600">確かな技術</span>で実現
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    お客様の夢を形にする建築のプロフェッショナル。新築住宅からリフォーム、商業施設まで、豊富な経験と最新技術でお応えします。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="mr-2 h-4 w-4" />
                    無料相談予約
                  </Button>
                  <Button variant="outline" size="lg">
                    施工事例を見る
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    無料見積もり
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    アフターサポート充実
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="建築現場の様子"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">サービス内容</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  住宅建築からリフォーム、商業施設まで幅広く対応。お客様のニーズに合わせた最適なソリューションを提供します。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <Home className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>新築住宅</CardTitle>
                  <CardDescription>注文住宅から建売住宅まで、お客様の理想を形にします</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      設計から施工まで一貫対応
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      省エネ・耐震性能重視
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      アフターメンテナンス充実
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <Hammer className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>リフォーム・リノベーション</CardTitle>
                  <CardDescription>既存住宅の価値を最大限に引き出します</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      部分改修から全面改装まで
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      バリアフリー対応
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      断熱・耐震補強工事
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <Building2 className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>商業施設・店舗</CardTitle>
                  <CardDescription>オフィスや店舗の設計・施工を手がけます</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      店舗デザイン・内装工事
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      オフィス移転・改装
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      短期間での施工対応
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">施工事例</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  これまでに手がけた代表的な施工事例をご紹介します。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width="500"
                  height="300"
                  alt="モダン住宅の外観"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">モダンスタイル住宅</h3>
                  <p className="text-gray-600">
                    シンプルで洗練されたデザインの2階建て住宅。開放感のあるリビングと機能性を重視した間取りが特徴です。
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">新築</Badge>
                    <Badge variant="secondary">木造2階建て</Badge>
                    <Badge variant="secondary">延床面積120㎡</Badge>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width="500"
                  height="300"
                  alt="リノベーション後の室内"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">古民家リノベーション</h3>
                  <p className="text-gray-600">
                    築50年の古民家を現代的な住まいに再生。伝統的な美しさを残しながら、快適性と機能性を向上させました。
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">リノベーション</Badge>
                    <Badge variant="secondary">古民家再生</Badge>
                    <Badge variant="secondary">断熱改修</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">私たちの強み</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    30年の実績と確かな技術力で、お客様の理想を実現します。
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <Users className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold">経験豊富な職人チーム</h3>
                      <p className="text-gray-600 text-sm">
                        一級建築士をはじめとする資格保有者が多数在籍。確かな技術でお応えします。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold">品質へのこだわり</h3>
                      <p className="text-gray-600 text-sm">
                        厳選した材料と丁寧な施工で、長く愛される建物をお届けします。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Wrench className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold">充実のアフターサポート</h3>
                      <p className="text-gray-600 text-sm">
                        施工後も定期点検やメンテナンスで、末永くサポートいたします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="施工チームの様子"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">お客様の声</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  実際にご利用いただいたお客様からの声をご紹介します。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">田中様（新築住宅）</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    「初めての家づくりで不安でしたが、担当者の方が親身になって相談に乗ってくださり、理想通りの家が完成しました。アフターサービスも充実していて安心です。」
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">佐藤様（リフォーム）</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    「築30年の家をリフォームしていただきました。予算内で希望以上の仕上がりになり、家族全員大満足です。職人さんの技術力の高さに感動しました。」
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">山田様（店舗改装）</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    「カフェの改装をお願いしました。短期間での施工にも関わらず、細部まで丁寧に仕上げていただき、お客様からも好評をいただいています。」
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">お問い合わせ</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  お気軽にご相談ください。無料見積もりも承っております。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>お問い合わせフォーム</CardTitle>
                    <CardDescription>以下のフォームからお気軽にお問い合わせください</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">お名前</label>
                        <Input placeholder="山田太郎" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">電話番号</label>
                        <Input placeholder="090-1234-5678" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">メールアドレス</label>
                      <Input type="email" placeholder="example@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">お問い合わせ内容</label>
                      <Textarea placeholder="ご相談内容をお聞かせください" className="min-h-[100px]" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Mail className="mr-2 h-4 w-4" />
                      送信する
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>会社情報</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium">所在地</p>
                        <p className="text-sm text-gray-600">
                          〒123-4567
                          <br />
                          東京都○○区○○町1-2-3
                          <br />
                          ○○ビル2F
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium">電話番号</p>
                        <p className="text-sm text-gray-600">03-1234-5678</p>
                        <p className="text-xs text-gray-500">受付時間：平日 9:00-18:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium">メールアドレス</p>
                        <p className="text-sm text-gray-600">info@kenchiku-pro.co.jp</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium">営業時間</p>
                        <p className="text-sm text-gray-600">
                          平日：9:00-18:00
                          <br />
                          土曜：9:00-17:00
                          <br />
                          日祝：定休日
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-2">
                      <Phone className="h-8 w-8 text-blue-600 mx-auto" />
                      <p className="font-bold text-lg">お急ぎの方はお電話で</p>
                      <p className="text-2xl font-bold text-blue-600">03-1234-5678</p>
                      <p className="text-sm text-gray-600">平日 9:00-18:00</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          <p className="text-sm text-gray-600">© 2024 建築プロ. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            プライバシーポリシー
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            利用規約
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            会社概要
          </Link>
        </nav>
      </footer>
    </div>
  )
}
