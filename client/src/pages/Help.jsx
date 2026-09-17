import React, { useState } from "react";
import {
  CircleHelp,
  MapPin,
  LayoutDashboard,
  Settings,
  CloudSun,
  ChevronDown,
  ArrowRight,
  RefreshCw,
  MessageSquare,
  HelpCircle,
  LifeBuoy,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HeaderBadge } from "../components/ui/HeaderBadge";

export const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const gettingStarted = [
    {
      icon: MapPin,
      title: "Choose a location",
      description:
        "Search for a location from the dashboard to load weather information for that area.",
    },
    {
      icon: LayoutDashboard,
      title: "Open the dashboard",
      description:
        "The dashboard brings the selected location and its weather information together in one place.",
    },
    {
      icon: CloudSun,
      title: "Explore weather data",
      description:
        "Use the dashboard sections to explore current conditions, forecasts, maps, and related information.",
    },
  ];

  const dashboardGuide = [
    {
      title: "Dashboard",
      description:
        "View the main weather information for your selected location.",
    },
    {
      title: "Forecast",
      description:
        "Check upcoming weather conditions and forecast information.",
    },
    {
      title: "Weather Map",
      description:
        "Explore weather information geographically through the interactive map.",
    },
    {
      title: "Settings",
      description:
        "Customize units, theme, alerts, summaries, refresh behavior, and default location preferences.",
    },
  ];

  const faqs = [
    {
      question: "How do I change the weather location?",
      answer:
        "Use the location search available in the dashboard and select the location you want to view.",
    },
    {
      question: "Can I change the temperature unit?",
      answer:
        "Yes. Open Settings and select your preferred temperature unit. Your setting is saved for future use.",
    },
    {
      question: "Can I switch between light and dark themes?",
      answer:
        "Yes. The Theme option in Settings allows you to switch between the available interface themes.",
    },
    {
      question: "What does Auto Refresh do?",
      answer:
        "When enabled, the dashboard can refresh weather information automatically according to the configured refresh behavior.",
    },
    {
      question: "Are weather alerts official warnings?",
      answer:
        "The current dashboard alert indicators are based on weather conditions returned by the weather data service. They should not be treated as official emergency or government weather warnings.",
    },
    {
      question: "What should I do if weather data does not load?",
      answer:
        "Check your internet connection, try refreshing the dashboard, and select the location again. If the problem continues, you can contact the project owner.",
    },
  ];

  return (
    <main className='min-h-screen bg-main text-main'>
      <section className='px-6 py-16 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <HeaderBadge icon={LifeBuoy} header='HERE TO HELP YOU' />
          <div className='rounded-3xl mt-4 border border-border-muted bg-gradient-to-br from-hero-start via-hero-mid to-hero-end p-8 shadow-subtle sm:p-12 lg:p-16'>
            <div className='max-w-3xl'>
              <h1 className='text-4xl font-bold leading-tight text-accent-secondary sm:text-5xl lg:text-6xl'>
                How can we
                <span className='text-text-heading'> help?</span>
              </h1>
              <p className='mt-6 max-w-2xl text-base leading-7 text-secondary dark:text-text-muted sm:text-lg'>
                Learn how to use Weatherly, understand the dashboard, customize
                your settings, and troubleshoot common issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-4 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-3xl'>
            <span className='text-sm font-semibold uppercase tracking-wider text-text-heading'>
              Getting Started
            </span>
            <h2 className='mt-3 text-3xl font-bold text-accent-secondary sm:text-4xl'>
              Start using Weatherly
            </h2>
            <p className='mt-4 text-text-light-secondary'>
              Follow these basic steps to find weather information for the
              location you are interested in.
            </p>
          </div>
          <div className='mt-10 grid gap-6 md:grid-cols-3'>
            {gettingStarted.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className='rounded-xl border border-border-muted bg-accent-secondary p-6 shadow-subtle'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-secondary'>
                      <Icon size={25} className='text-main' />
                    </div>
                  </div>

                  <h3 className='mt-5 text-lg font-semibold text-main'>
                    {step.title}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-accent font-semibold'>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className='px-6 py-12 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-2xl'>
            <span className='text-sm font-semibold uppercase tracking-wider text-text-heading'>
              Dashboard Guide
            </span>
            <h2 className='mt-3 text-3xl font-bold text-accent-secondary sm:text-4xl'>
              Understanding the dashboard
            </h2>
            <p className='mt-4 leading-7 text-text-light-secondary'>
              Each section of Weatherly has a specific purpose.
            </p>
          </div>
          <div className='mt-10 grid gap-5 sm:grid-cols-2'>
            {dashboardGuide.map((item) => (
              <div
                key={item.title}
                className='rounded-xl border border-border-muted bg-secondary p-6 shadow-subtle'>
                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full bg-accent' />
                  <h3 className='font-semibold text-main'>{item.title}</h3>
                </div>
                <p className='mt-3 pl-5 text-sm leading-6 text-text-light'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 py-12 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='rounded-2xl border border-border-muted bg-secondary p-8 shadow-subtle sm:p-10'>
            <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
              <div className='max-w-2xl'>
                <div className='flex items-center gap-2 text-accent'>
                  <Settings size={21} />
                  <span className='font-semibold'>Settings</span>
                </div>
                <h2 className='mt-4 text-3xl font-bold text-main'>
                  Customize your experience
                </h2>
                <p className='mt-4 leading-7 text-text-light'>
                  Weatherly provides settings that allow you to control how
                  weather information and the dashboard behave.
                </p>
              </div>
              <Link
                to='/settings'
                className='inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-secondary shadow-subtle transition hover:bg-primary hover:text-text-heading hover:scale-[1.02]'>
                Open Settings
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                "Temperature unit",
                "Wind speed unit",
                "Theme",
                "Weather alerts",
                "Daily summary",
                "Auto refresh",
              ].map((item) => (
                <div
                  key={item}
                  className='rounded-lg border border-border-muted bg-primary px-4 py-4 text-sm font-medium text-text-muted'>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-12 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center'>
            <span className='text-sm font-semibold uppercase tracking-wider text-text-heading'>
              FAQ
            </span>
            <h2 className='mt-3 text-3xl font-bold text-accent-secondary sm:text-4xl'>
              Frequently asked questions
            </h2>
            <p className='mx-auto mt-4 max-w-2xl leading-7 text-text-light-secondary'>
              Find quick answers to some common questions about Weatherly.
            </p>
          </div>
          <div className='mt-10 space-y-3'>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className='overflow-hidden rounded-xl border border-border-muted bg-secondary shadow-subtle'>
                  <button
                    type='button'
                    onClick={() => toggleFaq(index)}
                    className='flex w-full items-center justify-between gap-4 px-5 py-5 text-left'>
                    <span className='font-semibold text-main'>
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-accent transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className='border-t border-border-muted px-5 py-4'>
                      <p className='text-sm leading-6 text-text-light'>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className='px-6 py-16 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent-secondary'>
            <MessageSquare size={23} className='text-main' />
          </div>
          <h2 className='mt-5 text-3xl font-bold text-text-muted sm:text-4xl'>
            Still need help?
          </h2>
          <p className='mt-4 leading-7 text-text-light-secondary'>
            If you have a question that is not covered here, feel free to get in
            touch.
          </p>
          <Link
            to='/contact'
            className='mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-secondary shadow-subtle transition hover:bg-secondary hover:text-primary hover:scale-[1.02]'>
            Contact Me
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};
