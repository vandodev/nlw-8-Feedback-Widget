import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setfeedbackType(null);
  }

  return (
    <div
      className="bg-zinc-900 p-4
    relative rounded-2xl mb-4 flex flex-col justify-between
    items-center shadow-lg w-[calc(100vw-2rem)] h-[280px] md:w-auto"
    >
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.rockeseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
