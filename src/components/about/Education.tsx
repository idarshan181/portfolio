type EducationProps = {
  institution: {
    name: string;
    description: string;
  };
};

export default function Education({ institution }: EducationProps) {
  return (
    <>
      <h2 className="font-bold">{institution.name}</h2>
      <span className="text-base text-muted-foreground">
        {institution.description}
      </span>
    </>
  );
}
