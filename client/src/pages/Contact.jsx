import React, { useState } from "react";
import { Mail, Send, MessageSquare } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HeaderBadge } from "../components/ui/HeaderBadge";
import { FloatingCard } from "../components/ui/FloatingCard";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactLinks = [
    {
      label: "Email",
      value: "skamalesh0204@outlook.com",
      href: "mailto:skamalesh0204@outlook.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/kamalesh-s2004",
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/kamaleshs-codes",
      icon: FaGithub,
    },
  ];

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className='min-h-screen bg-main text-primary'>
      <section className='px-6 py-16 sm:px-10 lg:p-16'>
        <div className='mx-auto max-w-7xl'>
          <HeaderBadge
            icon={MessageSquare}
            header="LET'S CONNECT & TALK WEATHER"
          />
          <div className='rounded-3xl mt-4 border border-border-muted bg-gradient-to-br from-hero-start via-hero-mid to-hero-end p-8 shadow-subtle sm:p-12 lg:p-16'>
            <div className='max-w-3xl'>
              <h1 className='text-4xl font-bold leading-tight text-accent-secondary sm:text-5xl lg:text-6xl'>
                Let's
                <span className='text-text-heading'> connect.</span>
              </h1>
              <p className='mt-6 max-w-2xl text-base leading-7 text-secondary dark:text-text-muted sm:text-lg'>
                Have a question about Weatherly, want to discuss the project, or
                simply want to connect? Feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-12 sm:px-10 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
          <div>
            <span className='text-sm font-semibold uppercase tracking-wider text-text-heading'>
              Get in touch
            </span>
            <h2 className='mt-3 text-3xl font-bold text-accent-secondary sm:text-4xl'>
              Connect with me
            </h2>
            <p className='mt-5 max-w-lg leading-7 text-text-light-secondary'>
              Whether you have feedback, suggestions, or would like to discuss
              development opportunities, you can reach me through the following
              platforms.
            </p>
            <div className='mt-8 space-y-4'>
              {contactLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FloatingCard key={item.label} delay={index * 0.3}>
                    <a
                      href={item.href}
                      target={item.label !== "Email" ? "_blank" : undefined}
                      rel={item.label !== "Email" ? "noreferrer" : undefined}
                      className='flex items-center gap-4 rounded-xl border border-border-muted bg-surface p-5 hover:shadow-subtle transition hover:border-accent'>
                      <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-secondary'>
                        <Icon size={22} className='text-accent' />
                      </div>
                      <div>
                        <p className='text-sm font-bold text-text-heading'>
                          {item.label}
                        </p>
                        <p className='mt-1 font-semibold text-accent-secondary'>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </FloatingCard>
                );
              })}
            </div>
          </div>

          <div className='rounded-2xl border border-border-muted bg-secondary p-6 shadow-subtle sm:p-8'>
            <div>
              <h2 className='text-2xl font-bold text-primary'>
                Send a message
              </h2>
              <p className='mt-2 text-sm leading-6 text-text-light'>
                Fill in the form below to share your message.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className='mt-7 space-y-5 text-text-muted'>
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm font-semibold text-primary'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  required
                  className='w-full rounded-lg border border-border-muted bg-main px-4 py-3 text-sm outline-none transition placeholder:text-text-light-secondary focus:border-accent'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-semibold text-primary'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='you@example.com'
                  required
                  className='w-full rounded-lg border border-border-muted bg-main px-4 py-3 text-sm outline-none transition placeholder:text-text-light-secondary focus:border-accent'
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='mb-2 block text-sm font-semibold text-primary'>
                  Subject
                </label>
                <input
                  id='subject'
                  name='subject'
                  type='text'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='What would you like to discuss?'
                  required
                  className='w-full rounded-lg border border-border-muted bg-main px-4 py-3 text-sm outline-none transition placeholder:text-text-light-secondary focus:border-accent'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='mb-2 block text-sm font-semibold text-primary'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='6'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Write your message...'
                  required
                  className='w-full resize-none rounded-lg border border-border-muted bg-main px-4 py-3 text-sm outline-none transition placeholder:text-text-light-secondary focus:border-accent'
                />
              </div>
              <button
                type='submit'
                className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-secondary shadow-subtle transition hover:scale-[1.01] hover:bg-accent-secondary hover:text-primary'>
                Send Message
                <Send size={18} />
              </button>
            </form>
            {submitted && (
              <div className='mt-5 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-500'>
                Your message has been submitted successfully.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
