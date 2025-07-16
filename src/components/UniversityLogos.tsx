const UniversityLogos = () => {
  // Top 20 UK universities
  const universities = [
    "University of Oxford", "University of Cambridge", "Imperial College London",
    "University College London", "King's College London", "London School of Economics",
    "University of Edinburgh", "University of Manchester", "University of Warwick",
    "University of Bristol", "University of Glasgow", "Durham University",
    "University of Sheffield", "University of Birmingham", "University of Nottingham",
    "University of Southampton", "University of Leeds", "University of York",
    "University of Bath", "Lancaster University"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-serif text-foreground">
            Get into universities like:
          </h2>
        </div>

        {/* First row of university names */}
        <div className="overflow-hidden mb-4">
          <div className="flex animate-slide-left space-x-8 whitespace-nowrap">
            {universities.slice(0, 10).map((university, index) => (
              <div key={index} className="flex-shrink-0 bg-background px-6 py-4 rounded-lg shadow-sm">
                <span className="text-small font-sans text-foreground font-medium">
                  {university}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {universities.slice(0, 10).map((university, index) => (
              <div key={index + 10} className="flex-shrink-0 bg-background px-6 py-4 rounded-lg shadow-sm">
                <span className="text-small font-sans text-foreground font-medium">
                  {university}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row of university names */}
        <div className="overflow-hidden">
          <div className="flex animate-slide-right space-x-8 whitespace-nowrap">
            {universities.slice(10, 20).map((university, index) => (
              <div key={index} className="flex-shrink-0 bg-background px-6 py-4 rounded-lg shadow-sm">
                <span className="text-small font-sans text-foreground font-medium">
                  {university}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {universities.slice(10, 20).map((university, index) => (
              <div key={index + 10} className="flex-shrink-0 bg-background px-6 py-4 rounded-lg shadow-sm">
                <span className="text-small font-sans text-foreground font-medium">
                  {university}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityLogos;