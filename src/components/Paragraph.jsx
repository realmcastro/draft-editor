import { Trash2 } from "lucide-react";

/**
 * Componente que representa um parágrafo individual do texto.
 * @param {Object} props - Propriedades do componente
 * @param {string} props.text - Texto do parágrafo
 * @param {Function} props.onDelete - Função chamada ao deletar o parágrafo
 */
const Paragraph = ({ text, onDelete }) => {
  return (
    <div className="flex justify-between items-center border-l-4 border-blue-500 pl-2 my-2 bg-gray-100 p-2 rounded">
      <p className="flex-1">{text}</p>
      <button
        className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
        onClick={onDelete}
        aria-label="Deletar parágrafo"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default Paragraph;