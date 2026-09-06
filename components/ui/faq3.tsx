import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
}

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is IP Sakti?",
    answer:
      "IP Sakti is an AI-powered platform that helps Ayurveda practitioners and businesses protect their intellectual property, navigate international regulatory frameworks, and ensure compliance across multiple markets.",
  },
  {
    id: "faq-2",
    question: "How does IP Sakti protect my Ayurveda formulations?",
    answer:
      "IP Sakti analyzes your formulations against a comprehensive database of patents, trademarks, and regulatory requirements across 15+ international regimes, providing instant guidance on protection strategies and potential conflicts.",
  },
  {
    id: "faq-3",
    question: "Which international markets does IP Sakti cover?",
    answer:
      "IP Sakti currently covers 15+ international regulatory regimes including the EU, USA, UAE, Canada, Australia, and major Asian markets, with continuous expansion to new regions.",
  },
  {
    id: "faq-4",
    question: "What types of Ayurveda products can I analyze?",
    answer:
      "You can analyze herbal formulations, proprietary medicines, classical preparations, cosmetics, dietary supplements, and nutraceuticals derived from Ayurvedic traditions across 50+ formulation categories.",
  },
  {
    id: "faq-5",
    question: "How many languages does the platform support?",
    answer:
      "IP Sakti currently supports 6 languages including English, Hindi, Sanskrit, and other major regional languages to make Ayurveda IP protection accessible to practitioners across India.",
  },
  {
    id: "faq-6",
    question: "Is my formulation data kept confidential?",
    answer:
      "Absolutely. All formulation data submitted to IP Sakti is encrypted and kept strictly confidential. We never share or use your proprietary information for any purpose other than providing you analysis results.",
  },
];

const Faq3 = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about IP Sakti. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
}: Faq3Props) => {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-bold text-white md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-gray-400 lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-white/10"
            >
              <AccordionTrigger className="text-white hover:text-primary transition-opacity duration-200 hover:no-underline text-left">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-gray-400 lg:text-lg">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq3 };
