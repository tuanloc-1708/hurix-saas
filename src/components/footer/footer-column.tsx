interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-lg font-bold">{title}</h3>
      {children}
    </div>
  );
}
