(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const top = document.querySelector('.top');
  if (top) {
    const onScroll = () => {
      top.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
      io.observe(el);
    });

    document.querySelectorAll('[data-reveal-stagger]').forEach((wrap) => {
      [...wrap.children].forEach((child, i) => {
        child.style.setProperty('--i', i);
      });
    });
  } else {
    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
      el.classList.add('is-in');
    });
  }

  if (navigator.modelContext) {
    navigator.modelContext.provideContext({
      tools: [
        {
          name: 'get_services',
          description: 'Returns the list of ELSOLVE services and engagements available to clients.',
          inputSchema: { type: 'object', properties: {}, required: [] },
          execute: async () => ({
            services: [
              { id: 1, title: 'AI Strategy Session', description: 'Workflow review, opportunity mapping, and next-step roadmap. Typically one to two weeks.', tags: ['Workflow review', 'Leverage mapping', 'Roadmap'] },
              { id: 2, title: 'Workflow & Systems Design', description: 'Business audit and implementation-ready blueprint for AI and agentic systems.', tags: ['Business audit', 'System architecture', 'Implementation plan'] },
              { id: 3, title: 'Custom Agentic System Build', description: 'Bespoke agents and AI-supported operating systems — discovery through handover.', tags: ['Discovery', 'Custom architecture', 'Agent design', 'Deploy & handover'] },
              { id: 4, title: 'Ongoing Advisory & Optimisation', description: 'Monthly retainer for refinement, new use cases, and strategic support.', tags: ['Monthly optimisation', 'New use cases', 'Strategic support'] },
              { id: 5, title: 'Deployment & Infrastructure', description: 'Private VPS hosting for AI stacks — hardened, monitored, managed backups.', tags: ['Private VPS', 'Tailscale & Samba', 'Managed backups', 'Monitoring'] },
            ],
          }),
        },
        {
          name: 'get_contact',
          description: 'Returns contact details for ELSOLVE to start a conversation about AI and agentic systems.',
          inputSchema: { type: 'object', properties: {}, required: [] },
          execute: async () => ({
            email: 'adrian@elsolve.co.uk',
            timezone: 'Europe/London',
            response_time: 'Within one working day',
            note: 'A 30-minute call, no slides, no obligation. Tell us what the business does and where the friction sits.',
          }),
        },
      ],
    });
  }
})();
