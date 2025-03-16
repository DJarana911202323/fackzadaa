import type React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

// Lista de disciplinas válidas
const disciplinasValidas = ["matematica", "portugues", "historia", "geografia", "ciencias", "ingles"]

// Mapeamento de IDs para nomes de disciplinas
const nomeDisciplinas: Record<string, string> = {
  matematica: "Matemática",
  portugues: "Português",
  historia: "História",
  geografia: "Geografia",
  ciencias: "Ciências",
  ingles: "Inglês",
}

// Conteúdos por disciplina
const conteudosPorDisciplina: Record<string, Record<string, string>> = {
  matematica: {
    algebra: "Álgebra",
    geometria: "Geometria",
    estatistica: "Estatística",
  },
  portugues: {
    gramatica: "Gramática",
    literatura: "Literatura",
    redacao: "Redação",
  },
  historia: {
    brasil: "História do Brasil",
    mundial: "História Mundial",
    contemporanea: "História Contemporânea",
  },
  geografia: {
    fisica: "Geografia Física",
    humana: "Geografia Humana",
    politica: "Geografia Política",
  },
  ciencias: {
    biologia: "Biologia",
    fisica: "Física",
    quimica: "Química",
  },
  ingles: {
    gramatica: "Gramática",
    vocabulario: "Vocabulário",
    conversacao: "Conversação",
  },
}

export function generateMetadata({
  params,
}: {
  params: { disciplina: string; conteudo: string }
}) {
  // Verifica se a disciplina e o conteúdo são válidos
  if (!disciplinasValidas.includes(params.disciplina) || !conteudosPorDisciplina[params.disciplina][params.conteudo]) {
    return {
      title: "Conteúdo não encontrado",
    }
  }

  return {
    title: `${conteudosPorDisciplina[params.disciplina][params.conteudo]} | ${nomeDisciplinas[params.disciplina]} | Portfólio Acadêmico`,
  }
}

export default function ConteudoLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { disciplina: string; conteudo: string }
}) {
  // Verifica se a disciplina e o conteúdo são válidos
  if (!disciplinasValidas.includes(params.disciplina) || !conteudosPorDisciplina[params.disciplina][params.conteudo]) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-6">
        <div className="mb-2 flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Início
          </Link>
          <ChevronRight className="mx-1 h-4 w-4" />
          <Link href={`/${params.disciplina}`} className="hover:text-foreground">
            {nomeDisciplinas[params.disciplina]}
          </Link>
          <ChevronRight className="mx-1 h-4 w-4" />
          <span>{conteudosPorDisciplina[params.disciplina][params.conteudo]}</span>
        </div>
        <h1 className="text-3xl font-bold">{conteudosPorDisciplina[params.disciplina][params.conteudo]}</h1>
        <p className="text-muted-foreground">
          Conteúdo de {conteudosPorDisciplina[params.disciplina][params.conteudo]} da disciplina de{" "}
          {nomeDisciplinas[params.disciplina]}
        </p>
      </div>
      {children}
    </div>
  )
}

