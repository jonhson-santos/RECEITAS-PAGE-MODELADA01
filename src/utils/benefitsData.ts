export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string; // This will be the Lucide icon name
}

export const benefitsData: Benefit[] = [
  {
    id: 1,
    title: "Controle o açúcar no sangue sem depender só de remédios",
    description: "Descubra ingredientes naturais que ajudam a regular a glicemia e complementam seu tratamento, reduzindo a dependência de medicamentos.",
    icon: "Moon"
  },
  {
    id: 2,
    title: "Durma melhor com soluções naturais e seguras",
    description: "Receitas que acalmam naturalmente o sistema nervoso e garantem noites de sono reparador, sem efeitos colaterais ou dependência.",
    icon: "Droplets"
  },
  {
    id: 3,
    title: "Aumente sua energia e imunidade sem gastar com farmácia",
    description: "Fortaleça suas defesas naturais e tenha mais disposição usando ingredientes simples que você já tem em casa.",
    icon: "Heart"
  },
  {
    id: 4,
    title: "Livre-se das dores sem sobrecarregar o fígado",
    description: "Anti-inflamatórios naturais que aliviam dores articulares e musculares sem os riscos dos medicamentos convencionais.",
    icon: "Apple"
  },
  {
    id: 5,
    title: "Acalme a ansiedade e recupere sua paz interior",
    description: "Combinações naturais que tranquilizam a mente, reduzem o estresse e devolvem o equilíbrio emocional ao seu dia a dia.",
    icon: "Sparkles"
  },
  {
    id: 6,
    title: "Proteja seu coração e melhore sua circulação",
    description: "Receitas que equilibram o colesterol, fortalecem o sistema cardiovascular e melhoram a circulação sanguínea naturalmente.",
    icon: "HeartPulse"
  }
];