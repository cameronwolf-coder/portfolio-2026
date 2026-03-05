const skills = [
  "CRM Architecture",
  "API Integrations",
  "HubSpot Ops Hub",
  "SQL",
  "Python",
  "TypeScript",
  "BigQuery",
  "ClickHouse",
  "Clay",
  "Pipedream",
  "SmartLead",
  "Knock",
  "SendGrid",
  "OpenAI API",
  "Claude API",
  "Firecrawl",
  "Hex",
  "Marketing Automation",
];

export default function SkillsMarquee() {
  const skillList = [...skills, ...skills];

  return (
    <section className="bg-maroon py-5 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-track">
          {skillList.map((skill, i) => (
            <span
              key={i}
              className="text-white/90 text-xl md:text-2xl font-bold px-6 md:px-8 flex items-center gap-4 md:gap-6 whitespace-nowrap"
            >
              {skill}
              <span className="text-white/30 text-lg">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
