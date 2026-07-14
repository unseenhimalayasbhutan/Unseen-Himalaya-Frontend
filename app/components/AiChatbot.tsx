"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  ExternalLink,
  LoaderCircle,
  MessageCircle,
  RefreshCcw,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  X,
} from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  sources?: ChatSource[];
  handoff?: ChatHandoff;
  lead?: LeadDraft;
};

type ChatSource = {
  title: string;
  url: string;
  contentType: string;
};

type ChatHandoff = {
  required: boolean;
  reason: string;
  whatsappHref: string;
  emailHref: string;
  summary: string;
};

type LeadDraft = {
  email?: string;
  phone?: string;
  conversationSummary: string;
};

type ChatbotApiResponse = {
  reply?: string;
  sources?: ChatSource[];
  suggestions?: string[];
  handoff?: ChatHandoff;
  lead?: LeadDraft;
};

const starterPrompts = [
  "Find the right Bhutan tour",
  "Plan a customised journey",
  "Ask about Bhutan visa and SDF",
  "Explore festival tours",
  "Enter Bhutan by road",
  "Speak with our travel team",
];

const welcomeMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I can help you choose Bhutan routes, check starting rates, understand SDF exclusions, and plan a custom itinerary. What would you like to know?",
};

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [lastFailedMessage, setLastFailedMessage] = useState("");
  const [suggestions, setSuggestions] = useState(starterPrompts);
  const [leadStatus, setLeadStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages]);

  const sendMessage = async (messageText: string) => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage || isSending) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmedMessage },
    ];

    setMessages(nextMessages);
    setInputValue("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await response.json()) as ChatbotApiResponse;

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            data.reply ||
            "I could not find an answer right now. Please contact us on WhatsApp for quick help.",
          sources: data.sources || [],
          handoff: data.handoff,
          lead: data.lead,
        },
      ]);
      setSuggestions(data.suggestions?.length ? data.suggestions : starterPrompts);
      setLastFailedMessage("");
    } catch {
      setLastFailedMessage(trimmedMessage);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            "I am having trouble connecting right now. Please try again or use the WhatsApp button for immediate support.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(inputValue);
  };

  const resetConversation = () => {
    setMessages([welcomeMessage]);
    setInputValue("");
    setSuggestions(starterPrompts);
    setLastFailedMessage("");
    setLeadStatus("idle");
  };

  const submitLead = async (lead: LeadDraft) => {
    setLeadStatus("sending");

    try {
      const response = await fetch("/api/chatbot/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead, consent: true }),
      });
      const data = (await response.json()) as {
        message?: string;
        error?: string;
        delivery?: { whatsappHref?: string; emailHref?: string };
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            data.message ||
            data.error ||
            "Please contact us on WhatsApp or email so our travel team can follow up.",
          handoff: data.delivery?.whatsappHref
            ? {
                required: true,
                reason: "inquiry handoff",
                whatsappHref: data.delivery.whatsappHref,
                emailHref: data.delivery.emailHref || "mailto:unseenhimalayasbhutan@gmail.com",
                summary: lead.conversationSummary,
              }
            : undefined,
        },
      ]);
      setLeadStatus(response.ok ? "sent" : "error");
    } catch {
      setLeadStatus("error");
    }
  };

  return (
    <div className={`ai-chatbot ${isOpen ? "is-open" : ""}`}>
      {isOpen ? (
        <section className="ai-chatbot-panel" aria-label="AI travel assistant">
          <div className="ai-chatbot-header">
            <div className="ai-chatbot-title">
              <span className="ai-chatbot-avatar">
                <Bot aria-hidden />
              </span>

              <div>
                <strong>Bhutan AI Assistant</strong>
                <span>Routes, rates, SDF, festivals</span>
              </div>
            </div>

            <button
              type="button"
              className="ai-chatbot-icon-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI chat"
            >
              <X aria-hidden />
            </button>
          </div>

          <div className="ai-chatbot-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`ai-chatbot-message ai-chatbot-message-${message.role}`}
              >
                <span className="ai-chatbot-message-icon">
                  {message.role === "assistant" ? (
                    <Bot aria-hidden />
                  ) : (
                    <User aria-hidden />
                  )}
                </span>

                <div className="ai-chatbot-message-body">
                  <p>{message.content}</p>

                  {message.sources?.length ? (
                    <div className="ai-chatbot-sources" aria-label="Answer sources">
                      {message.sources.map((source) => (
                        <a
                          key={`${source.url}-${source.title}`}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink aria-hidden />
                          <span>{source.title}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}

                  {message.handoff ? (
                    <div className="ai-chatbot-handoff">
                      <a
                        href={message.handoff.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp team
                      </a>
                      <a href={message.handoff.emailHref}>Email team</a>
                    </div>
                  ) : null}

                  {message.lead ? (
                    <button
                      type="button"
                      className="ai-chatbot-lead-btn"
                      disabled={leadStatus === "sending" || leadStatus === "sent"}
                      onClick={() => void submitLead(message.lead as LeadDraft)}
                    >
                      <ShieldCheck aria-hidden />
                      {leadStatus === "sent"
                        ? "Inquiry summary ready"
                        : leadStatus === "sending"
                          ? "Preparing"
                          : "Confirm inquiry handoff"}
                    </button>
                  ) : null}
                </div>
              </div>
            ))}

            {isSending ? (
              <div className="ai-chatbot-message ai-chatbot-message-assistant">
                <span className="ai-chatbot-message-icon">
                  <Bot aria-hidden />
                </span>

                <div className="ai-chatbot-message-body">
                  <p className="ai-chatbot-thinking">
                    <LoaderCircle aria-hidden />
                    Thinking
                  </p>
                </div>
              </div>
            ) : null}

            <div ref={messagesEndRef} />
          </div>

          <div className="ai-chatbot-prompts" aria-label="Suggested questions">
            {suggestions.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => void sendMessage(prompt)}
                disabled={isSending}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="ai-chatbot-form" onSubmit={handleSubmit}>
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Ask about tours, rates, SDF..."
              aria-label="Ask the AI travel assistant"
              maxLength={500}
            />

            <button type="submit" disabled={isSending || !inputValue.trim()}>
              <Send aria-hidden />
              <span>Send</span>
            </button>
          </form>

          <div className="ai-chatbot-footer">
            <span>We use chat details only to help prepare your Bhutan inquiry.</span>
            <div>
              {lastFailedMessage ? (
                <button type="button" onClick={() => void sendMessage(lastFailedMessage)}>
                  Retry
                </button>
              ) : null}
              <button type="button" onClick={resetConversation}>
                <RefreshCcw aria-hidden />
                Reset
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        className="ai-chatbot-toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close AI travel assistant" : "Open AI travel assistant"}
      >
        <Sparkles aria-hidden className="ai-chatbot-toggle-spark" />
        <MessageCircle aria-hidden />
        <span>Ask AI</span>
      </button>
    </div>
  );
}
