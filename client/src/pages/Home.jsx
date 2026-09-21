import { Link } from "react-router-dom";
import { ArrowRight, CloudIcon } from "lucide-react";
import weatherContentImg from "../assets/heroImages/WeatherContents.png";
import weatherMapImg from "../assets/heroImages/weatherMap.png";
import weatherAlertImg from "../assets/heroImages/weatherAlerts.png";
import dailySummaryImg from "../assets/heroImages/dailySummary.png";
import { HeaderBadge } from "../components/ui/HeaderBadge";
import { FeaturesSection } from "../components/Home/FeatureSection";

export const Home = () => {
  const exploreLinks = [
    {
      title: "Dashboard",
      description:
        "Check current weather conditions and detailed weather information.",
      link: "/dashboard",
      action: "Open Dashboard",
    },
    {
      title: "Forecast",
      description: "View upcoming weather conditions and plan ahead.",
      link: "/forecast",
      action: "View Forecast",
    },
    {
      title: "Weather Map",
      description: "Explore weather information through an interactive map.",
      link: "/weathermap",
      action: "Open Weather Map",
    },
  ];

  const projectHighlights = [
    {
      title: "Real-time Information",
      description:
        "Access weather information retrieved from live weather services.",
    },
    {
      title: "Location Based",
      description:
        "Search for locations and explore weather conditions for your selected place.",
    },
    {
      title: "Responsive Experience",
      description:
        "Designed to provide a consistent experience across different screen sizes.",
    },
  ];

  return (
    <div className='min-h-full bg-main text-main'>
      <section className='relative overflow-hidden px-8 py-12 lg:p-16'>
        <div className='mx-auto flex w-full max-w-7xl flex-col gap-8'>
          <div className='w-full'>
            <HeaderBadge
              icon={CloudIcon}
              header='YOUR PERSONAL WEATHER COMPANION'
            />
            <div
              id='hero-context'
              className='relative mt-3 w-full overflow-hidden rounded-[2.5rem_1.5rem_3rem_1.5rem] bg-gradient-to-br from-hero-start via-hero-mid to-hero-end px-7 py-10 hover:shadow-subtle sm:px-10 sm:py-12 border border-border hover:border hover:border-border-muted transition-all duration-300 ease-in-out'>
              <div
                className='
          pointer-events-none
          absolute -right-16 -top-20
          h-52 w-72
          rounded-[50%_45%_55%_40%]
          bg-hero-glow/20
          blur-3xl
        '
              />
              <div
                className='
          pointer-events-none
          absolute -right-5 top-16
          h-32 w-52
          rounded-[60%_40%_50%_45%]
          bg-white/20
          blur-2xl
        '
              />
              <div className='pointer-events-none absolute inset-0 opacity-20 dark:opacity-10 [background-image:repeating-linear-gradient(115deg,transparent_0px,transparent_18px,var(--hero-glow)_19px,transparent_21px)]' />
              <div
                className='
          pointer-events-none
          absolute -bottom-24 -left-20
          h-56 w-56
          rounded-full
          bg-hero-glow/15
          blur-3xl
        '
              />
              <div className='relative z-10 w-full'>
                <h1 className='text-4xl font-bold leading-tight text-accent-secondary sm:text-5xl lg:text-7xl'>
                  Weather,
                  <span className='text-text-heading'> Simplified.</span>
                </h1>
                <p className='mt-6 max-w-3xl text-base leading-7 text-secondary sm:text-lg lg:text-xl dark:text-text-muted'>
                  Get real-time weather information, detailed forecasts,
                  air-quality data, and interactive weather maps — all in one
                  simple and responsive dashboard.
                </p>
                <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                  <Link
                    to='/dashboard'
                    className='
              inline-flex items-center justify-center gap-2
              rounded-lg
              bg-secondary
              px-5 py-3
              font-semibold
              text-main
              shadow-subtle
              transition
              hover:scale-[1.02]
              hover:bg-accent
              hover:text-secondary
            '>
                    Explore Dashboard
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to='/forecast'
                    className='
              inline-flex items-center justify-center gap-2
              rounded-lg
              border border-secondary/30
              bg-white/20
              px-6 py-3
              font-semibold
              text-secondary
              backdrop-blur-sm
              transition
              hover:border-accent
              hover:bg-accent
              hover:text-secondary
              dark:border-text-main/30
              dark:bg-black/10
              dark:text-main
            '>
                    View Forecast
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-full'>
            <div className='pointer-events-none absolute left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-15 blur-3xl' />
            <div className='relative w-full h-[35rem] overflow-hidden rounded-3xl border border-border bg-primary p-4 hover:border hover:border-border-muted hover:shadow-subtle transition duration-300 ease-in-out'>
              <div className='hero-image-track'>
                <div className='hero-image-card'>
                  <img
                    src={weatherContentImg}
                    alt='Current weather and Forecast'
                  />
                </div>
                <div className='hero-image-card'>
                  <img src={weatherMapImg} alt='Interactive weather map' />
                </div>
                <div className='hero-image-card'>
                  <img src={weatherAlertImg} alt='Weather alerts' />
                </div>
                <div className='hero-image-card'>
                  <img src={dailySummaryImg} alt='Daily summary' />
                </div>
                <div className='hero-image-card'>
                  <img
                    src={weatherContentImg}
                    alt='Current weather and forecast'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <section className='px-8 py-16 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center'>
          <div>
            <p className='text-md font-semibold uppercase tracking-wider text-text-heading'>
              Why Weatherly?
            </p>
            <h2 className='mt-2 text-3xl font-bold sm:text-4xl text-accent-secondary'>
              A simple way to stay informed about the weather.
            </h2>
            <p className='mt-5 leading-7 text-text-light-secondary'>
              Weatherly brings important weather information together in one
              place, helping you quickly understand current conditions and what
              to expect next.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
            {projectHighlights.map((item) => (
              <div
                key={item.title}
                className='rounded-xl border border-border-muted bg-secondary p-5 hover:shadow-subtle transition duration-300'>
                <h3 className='font-semibold text-accent'>{item.title}</h3>
                <p className='mt-2 text-sm text-text-light'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='border-y border-border bg-secondary px-8 py-16 lg:px-16'>
        <div className='mx-auto max-w-7xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-wider text-text-title'>
            Explore Weatherly
          </p>
          <h2 className='mt-2 text-3xl font-bold text-accent'>
            Start exploring
          </h2>
          <div className='mt-10 grid gap-5 md:grid-cols-3'>
            {exploreLinks.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className='group rounded-xl border border-border-muted bg-primary p-6 text-left hover:shadow-drop transition duration-300 ease-in-out hover:border-border-muted'>
                <h3 className='mt-5 text-xl font-semibold text-text-heading'>
                  {item.title}
                </h3>
                <p className='mt-2 text-sm text-text-muted'>
                  {item.description}
                </p>
                <div className='mt-5 flex items-center gap-2 text-sm font-semibold text-accent-secondary'>
                  {item.action}
                  <ArrowRight
                    size={16}
                    className='transition-transform group-hover:translate-x-1'
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className='bg-main px-8 py-10 lg:px-16'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h2 className='text-xl font-bold text-accent-secondary'>
              Weatherly
            </h2>
            <p className='mt-1 text-sm text-text-light-secondary'>
              Your simple weather companion.
            </p>
          </div>
          <div className='flex flex-wrap items-center gap-5 text-sm text-text-heading'>
            <Link to='/about' className='transition hover:text-secondary'>
              About
            </Link>
            <Link to='/contact' className='transition hover:text-secondary'>
              Contact
            </Link>
            <Link to='/help' className='transition hover:text-secondary'>
              Help
            </Link>
          </div>
        </div>
        <div className='mx-auto mt-8 max-w-7xl border-t border-border pt-5 text-center text-xs text-text-light-secondary'>
          © 2026 Weatherly. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
