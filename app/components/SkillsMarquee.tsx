const skills = [
  "HubSpot",
  "Salesforce",
  "SQL",
  "Python",
  "BigQuery",
  "ClickHouse",
  "Clay",
  "SmartLead",
  "SEMrush",
  "GA4",
  "Hex",
  "Looker Studio",
  "SendGrid",
  "LLM Deployment",
  "ABM",
  "API Integration",
  "Marketing Automation",
  "CRM Architecture",
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
