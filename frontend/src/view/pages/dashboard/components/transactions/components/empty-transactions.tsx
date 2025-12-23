import emptyStateIllustration from "../../../../../../assets/empty-state.svg";

export const EmptyTransactions = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src={emptyStateIllustration} alt="Ilustração de estado vazio" />
      <p className="text-gray-700">Não encontramos nenhuma transação!</p>
    </div>
  );
};
