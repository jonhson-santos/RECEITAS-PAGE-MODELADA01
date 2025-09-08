export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string; // This will be the Lucide icon name
}

export const benefitsData: Benefit[] = [
  {
    id: 1,
    title: "Receitas Naturais para Diabetes",
    description: "Aprenda a preparar chás e misturas que ajudam a controlar naturalmente os níveis de açúcar no sangue.",
    icon: "Moon"
  },
  {
    id: 2,
    title: "Tratamentos para Insônia e Ansiedade",
    description: "Descubra como preparar remédios naturais que acalmam a mente e garantem um sono tranquilo e reparador.",
    icon: "Droplets"
  },
  {
    id: 3,
    title: "Fortalecimento da Imunidade",
    description: "Receitas poderosas para aumentar suas defesas naturais e ter mais energia no dia a dia.",
    icon: "Heart"
  },
  {
    id: 4,
    title: "Alívio Natural das Dores",
    description: "Anti-inflamatórios naturais que combatem dores articulares, musculares e de cabeça de forma eficaz.",
    icon: "Apple"
  },
  {
    id: 5,
    title: "Saúde Digestiva Completa",
    description: "Tratamentos naturais para problemas digestivos, gastrite, azia e outros desconfortos estomacais.",
    icon: "Sparkles"
  },
  {
    id: 6,
    title: "Cuidados com o Coração",
    description: "Receitas que ajudam a controlar a pressão arterial e fortalecem o sistema cardiovascular.",
    icon: "HeartPulse"
  }
];