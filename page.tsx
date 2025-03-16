import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold">Meu Portfólio Acadêmico</h1>
        <p className="text-muted-foreground">
          Bem-vindo ao meu portfólio de disciplinas. Explore as disciplinas e seus conteúdos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/matematica">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">Matemática</CardTitle>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Estudo de números, quantidades, espaço, estruturas e mudanças.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/portugues">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">Português</CardTitle>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Estudo da língua portuguesa, literatura e produção textual.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/historia">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">História</CardTitle>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Estudo dos eventos passados e seu impacto na sociedade atual.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/geografia">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">Geografia</CardTitle>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Estudo da Terra e seus recursos, fenômenos físicos e humanos.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/ciencias">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">Ciências</CardTitle>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Estudo dos fenômenos naturais através de observação e experimentação.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/ingles">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">Inglês</CardTitle>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Estudo da língua inglesa, sua gramática, vocabulário e conversação.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

