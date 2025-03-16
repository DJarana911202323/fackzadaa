"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, GraduationCap, Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Lista de disciplinas
const disciplinas = [
  { id: "matematica", nome: "Matemática" },
  { id: "portugues", nome: "Português" },
  { id: "historia", nome: "História" },
  { id: "geografia", nome: "Geografia" },
  { id: "ciencias", nome: "Ciências" },
  { id: "ingles", nome: "Inglês" },
]

// Conteúdos por disciplina
const conteudosPorDisciplina = {
  matematica: [
    { id: "algebra", nome: "Álgebra" },
    { id: "geometria", nome: "Geometria" },
    { id: "estatistica", nome: "Estatística" },
  ],
  portugues: [
    { id: "gramatica", nome: "Gramática" },
    { id: "literatura", nome: "Literatura" },
    { id: "redacao", nome: "Redação" },
  ],
  historia: [
    { id: "brasil", nome: "História do Brasil" },
    { id: "mundial", nome: "História Mundial" },
    { id: "contemporanea", nome: "História Contemporânea" },
  ],
  geografia: [
    { id: "fisica", nome: "Geografia Física" },
    { id: "humana", nome: "Geografia Humana" },
    { id: "politica", nome: "Geografia Política" },
  ],
  ciencias: [
    { id: "biologia", nome: "Biologia" },
    { id: "fisica", nome: "Física" },
    { id: "quimica", nome: "Química" },
  ],
  ingles: [
    { id: "gramatica", nome: "Gramática" },
    { id: "vocabulario", nome: "Vocabulário" },
    { id: "conversacao", nome: "Conversação" },
  ],
}

export default function PortfolioHeader() {
  const pathname = usePathname()
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState("matematica")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Atualiza a disciplina selecionada com base na URL atual
  useEffect(() => {
    const path = pathname.split("/")
    if (path.length > 1 && path[1]) {
      const disciplina = path[1]
      if (disciplinas.some((d) => d.id === disciplina)) {
        setDisciplinaSelecionada(disciplina)
      }
    }
  }, [pathname])

  const handleDisciplinaClick = (id: string) => {
    setDisciplinaSelecionada(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          <span className="text-lg font-bold">Portfólio Acadêmico</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Disciplinas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {disciplinas.map((disciplina) => (
                      <li key={disciplina.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/${disciplina.id}`}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              disciplinaSelecionada === disciplina.id
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground",
                            )}
                            onClick={() => handleDisciplinaClick(disciplina.id)}
                          >
                            <div className="text-sm font-medium leading-none">{disciplina.nome}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Conteúdos de {disciplinas.find((d) => d.id === disciplinaSelecionada)?.nome}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {conteudosPorDisciplina[disciplinaSelecionada as keyof typeof conteudosPorDisciplina].map(
                      (conteudo) => (
                        <li key={conteudo.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/${disciplinaSelecionada}/${conteudo.id}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{conteudo.nome}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ),
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="container pb-4 md:hidden">
          <div className="space-y-4 rounded-md border bg-background p-4">
            <div>
              <h3 className="mb-2 flex items-center text-sm font-medium">
                <BookOpen className="mr-2 h-4 w-4" />
                Disciplinas
              </h3>
              <ul className="space-y-2">
                {disciplinas.map((disciplina) => (
                  <li key={disciplina.id}>
                    <Link href={`/${disciplina.id}`}>
                      <Button
                        variant={disciplinaSelecionada === disciplina.id ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleDisciplinaClick(disciplina.id)}
                      >
                        {disciplina.nome}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 flex items-center text-sm font-medium">
                Conteúdos de {disciplinas.find((d) => d.id === disciplinaSelecionada)?.nome}
              </h3>
              <ul className="space-y-2">
                {conteudosPorDisciplina[disciplinaSelecionada as keyof typeof conteudosPorDisciplina].map(
                  (conteudo) => (
                    <li key={conteudo.id}>
                      <Link href={`/${disciplinaSelecionada}/${conteudo.id}`}>
                        <Button variant="ghost" className="w-full justify-start">
                          {conteudo.nome}
                        </Button>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

