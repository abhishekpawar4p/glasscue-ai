const features = [
    {
      title: 'Source Upload',
      description:
        'Upload PDFs, notes, CVs, meeting documents, or presentation materials before starting a session.',
    },
    {
      title: 'One Live Answer',
      description:
        'During a live session, the app shows one clean answer instead of too many bullet points.',
    },
    {
      title: 'Session Review',
      description:
        'After the session, review transcript, key points, mistakes, follow-up questions, and speaking feedback.',
    },
  ];
  
  function FeaturesSection() {
    return (
      <section id="features" className="bg-[#081524] px-6 py-20 md:px-[8%]">
        <h2 className="mb-8 text-4xl font-extrabold">Core Features</h2>
  
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
              <p className="leading-7 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default FeaturesSection;