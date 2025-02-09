/**
 * Componente de modal para confirmação de salvamento do rascunho
 * @param {Object} props - Propriedades do componente
 * @param {Function} props.onClose - Função para fechar o modal
 * @param {Function} props.onSave - Função para confirmar o salvamento
 */
const Modal = ({ onClose, onSave }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h3 className="text-xl font-semibold mb-4">Salvar Rascunho</h3>
          <p>Você tem certeza que deseja salvar o rascunho?</p>
          <div className="mt-4 flex gap-2">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              onClick={onSave}
            >
              Salvar
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;