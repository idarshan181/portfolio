type EducationProps = {
  institution: {
    name: string;
    description: string;
    timeframe: string;
    grade: number;
    gradeScale: number;
  };
};

export default function Education({ institution }: EducationProps) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="font-bold">{institution.name}</h2>
        <span className="text-base font-light">
          {institution.description}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-base font-light">
          {institution.timeframe}
        </span>
        <span className="text-base font-extralight">
          {institution.grade}
          /
          {institution.gradeScale}
        </span>
      </div>
    </div>
  );
}
