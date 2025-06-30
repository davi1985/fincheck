import { Link } from "react-router-dom";

type AuthHeaderProps = {
  title: string;
  link: string;
  linkText: string;
};

export const AuthHeader = ({ title, link, linkText }: AuthHeaderProps) => (
  <header className="flex flex-col items-center gap-4 text-center">
    <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
      {title}
    </h1>

    <p className="space-x-2">
      <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span>

      <Link to={link} className="text-teal-900 tracking-[-0.5px] font-medium">
        {linkText}
      </Link>
    </p>
  </header>
);
