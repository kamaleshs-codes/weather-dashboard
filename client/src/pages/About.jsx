import React from "react";
import {
  CloudSun,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Compass,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HeaderBadge } from "../components/ui/HeaderBadge";
import { StaggerAnimation } from "../components/ui/StaggerAnimation";

export const About = () => {
  return (
    <main className='min-h-screen bg-main text-main'>
      <section className='px-6 py-16 sm:px-10 lg:p-16'>
        <div className='mx-auto max-w-7xl'>
          <HeaderBadge icon={Compass} header='ABOUT THE WEATHERLY' />
          <div className='rounded-3xl mt-4 border border-border hover:border hover:border-border-muted bg-gradient-to-br from-hero-start via-hero-mid to-hero-end p-8 hover:shadow-subtle transition duration-300 ease-in-out sm:p-12 lg:p-16'>
            <div className='max-w-3xl'>
              <h1 className='text-4xl font-bold leading-tight text-accent-secondary sm:text-5xl lg:text-6xl'>
                Understanding the project
                <span className='text-text-heading'>
                  {" "}
                  behind the dashboard.
                </span>
              </h1>
              <p className='mt-6 max-w-2xl text-base leading-7 text-secondary dark:text-text-muted sm:text-lg'>
                Weatherly is a modern weather dashboard built to explore
                real-world frontend development, API integration, responsive UI
                design, and data-driven application development.
              </p>
              <div className='mt-8'>
                <Link
                  to='/dashboard'
                  className='inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-3 font-semibold text-main shadow-subtle transition hover:scale-[1.02] hover:bg-accent hover:text-secondary'>
                  Explore the Dashboard
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-12 sm:px-10 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-2'>
          <div>
            <span className='text-sm font-semibold uppercase tracking-wider text-text-heading'>
              The Project
            </span>
            <h2 className='mt-3 text-3xl font-bold text-accent-secondary sm:text-4xl'>
              More than a weather interface.
            </h2>
            <p className='mt-5 leading-7 text-text-light-secondary'>
              Weatherly started as a frontend weather dashboard and is being
              developed as a practical application for working with external
              APIs, structured data, reusable React components, and responsive
              application architecture.
            </p>
            <p className='mt-4 leading-7 text-text-light-secondary'>
              <strong>The project is designed around a simple idea:</strong>{" "}
              Weather data can become much more useful when it is presented
              through a clean, understandable, and responsive experience.
            </p>
          </div>
          <div className='rounded-2xl border border-border hover:border hover:border-border-muted bg-accent-secondary p-7 hover:shadow-subtle transition duration-300 ease-in-out'>
            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-secondary'>
              <Layers3 size={25} className='text-main' />
            </div>
            <h3 className='mt-5 text-xl font-semibold text-text-title'>
              Built as a learning project
            </h3>
            <p className='mt-3 leading-7 text-accent font-semibold'>
              Every part of the application provides an opportunity to practice
              a real development concept — from component architecture and API
              communication to backend services and database integration.
            </p>
          </div>
        </div>
      </section>

      <section className='px-6 py-12 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-2xl'>
            <span className='text-sm font-semibold uppercase tracking-wider text-text-heading'>
              Behind the Application
            </span>
            <h2 className='mt-3 text-3xl font-bold text-accent-secondary sm:text-4xl'>
              How Weatherly works
            </h2>
            <p className='mt-4 leading-7 text-text-light-secondary'>
              The application combines several layers of a modern web
              application to turn external weather data into a usable dashboard.
            </p>
          </div>
          <StaggerAnimation className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                number: "01",
                title: "Choose a location",
                description:
                  "A location is selected through the dashboard interface and its coordinates are used for weather requests.",
              },
              {
                number: "02",
                title: "Request data",
                description:
                  "The application communicates with weather services and retrieves structured weather information.",
              },
              {
                number: "03",
                title: "Process data",
                description:
                  "The received API data is organized and transformed into information required by individual UI components.",
              },
              {
                number: "04",
                title: "Display insights",
                description:
                  "Reusable React components present the processed information through a responsive dashboard.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className='h-full rounded-xl border border-border-muted bg-secondary p-6 shadow-subtle'>
                <span className='rounded-full bg-main p-2 text-sm font-bold text-text-muted'>
                  {step.number}
                </span>
                <h3 className='mt-4 text-lg font-semibold text-text-title'>
                  {step.title}
                </h3>
                <p className='mt-3 text-sm leading-6 text-accent'>
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerAnimation>
        </div>
      </section>

      <section className='px-6 py-12 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='text-center'>
            <span className='text-sm font-semibold uppercase tracking-wider text-text-heading'>
              Technology
            </span>
            <h2 className='mt-3 text-3xl font-bold text-accent-secondary sm:text-4xl'>
              What powers the project
            </h2>
            <p className='mx-auto mt-4 max-w-2xl leading-7 text-text-light-secondary'>
              The technology stack is intentionally built around practical
              web-development concepts that can be expanded as the project
              evolves.
            </p>
          </div>
          <StaggerAnimation className='mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                icon: Code2,
                title: "React",
                description: "Component-based frontend architecture.",
              },
              {
                icon: Layers3,
                title: "Tailwind CSS",
                description: "Responsive and reusable UI styling.",
              },
              {
                icon: GitBranch,
                title: "REST APIs",
                description: "External weather data integration.",
              },
              {
                icon: Database,
                title: "PostgreSQL",
                description: "Persistent application settings and data.",
              },
            ].map((technology) => {
              const Icon = technology.icon;
              return (
                <div
                  key={technology.title}
                  className='rounded-xl border border-border-muted bg-primary p-6 shadow-subtle'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-secondary'>
                    <Icon size={23} className='text-accent' />
                  </div>
                  <h3 className='mt-4 font-semibold text-text-heading'>
                    {technology.title}
                  </h3>
                  <p className='mt-2 text-sm leading-6 font-semibold text-text-muted'>
                    {technology.description}
                  </p>
                </div>
              );
            })}
          </StaggerAnimation>
        </div>
      </section>

      <section className='px-6 py-12 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='rounded-2xl border border-border-muted bg-primary p-8 shadow-subtle sm:p-10'>
            <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
              <div className='max-w-2xl'>
                <div className='flex items-center gap-2 text-text-heading'>
                  <Sparkles size={20} />
                  <span className='font-semibold'>Project direction</span>
                </div>

                <h2 className='mt-4 text-3xl font-bold text-accent-secondary'>
                  Built to grow beyond Version 1.
                </h2>

                <p className='mt-4 leading-7 text-text-light-secondary'>
                  The current version focuses on the core dashboard experience.
                  Future development can introduce stronger backend
                  architecture, user accounts, weather history, analytics, and
                  AI-assisted weather insights.
                </p>
              </div>

              <div className='space-y-3'>
                {[
                  "Full-stack architecture",
                  "User authentication",
                  "Weather history and analytics",
                  "AI-powered insights",
                ].map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-3 text-sm text-text-light-secondary font-semibold'>
                    <CheckCircle2 size={18} className='text-text-muted' />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-16 sm:px-10 lg:px-16'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold text-accent-secondary sm:text-4xl'>
            Ready to explore Weatherly?
          </h2>
          <p className='mt-4 leading-7 text-text-muted'>
            See the application in action and explore the dashboard yourself.
          </p>
          <Link
            to='/dashboard'
            className='mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-secondary shadow-subtle transition hover:text-text-accent hover:bg-secondary hover:scale-[1.02]'>
            Open Dashboard
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};
