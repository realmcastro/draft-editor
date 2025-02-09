import { useState, useEffect } from "react";
import Paragraph from "./Paragraph";
import Modal from "./Modal";

/**
 * Componente principal do editor de rascunhos de redação.
 * Gerencia a adição, remoção e visualização de parágrafos,
 * além da funcionalidade de salvar rascunhos e textos.
 */
const DraftEditor = () => {
  const [paragraphs, setParagraphs] = useState(() => {
    try {
      const savedDraft = localStorage.getItem("draft");
      return savedDraft ? JSON.parse(savedDraft) : [];
    } catch (error) {
      console.error("Error loading draft:", error);
      return [];
    }
  });
  
  const [inputText, setInputText] = useState(() => {
    try {
      return localStorage.getItem("currentText") || "";
    } catch (error) {
      console.error("Error loading current text:", error);
      return "";
    }
  });
    
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      if (paragraphs.length > 0) {
        localStorage.setItem("draft", JSON.stringify(paragraphs));
      }
    } catch (error) {
      console.error("Error saving draft:", error);
    }
  }, [paragraphs]);

  useEffect(() => {
    try {
      localStorage.setItem("currentText", inputText);
    } catch (error) {
      console.error("Error saving current text:", error);
    }
  }, [inputText]);

  /**
   * Adiciona um novo parágrafo ao rascunho
   * Cada parágrafo recebe um ID único baseado no timestamp
   */

  const addParagraph = () => {
    if (!inputText.trim()) return;
    const newParagraph = {
      id: Date.now(),
      text: inputText
    };
    const newParagraphs = [...paragraphs, newParagraph];
    setParagraphs(newParagraphs);
    localStorage.setItem("draft", JSON.stringify(newParagraphs));
    setInputText("");
    localStorage.setItem("currentText", "");
  };

  /**
   * Remove um parágrafo específico do rascunho
   * @param {number} id - ID do parágrafo a ser removido
   */
  const deleteParagraph = (id) => {
    const newParagraphs = paragraphs.filter((p) => p.id !== id);
    setParagraphs(newParagraphs);
    localStorage.setItem("draft", JSON.stringify(newParagraphs));
  };

  /**
   * Simula o salvamento do rascunho
   * Na prática, apenas exibe um modal de confirmação
   */
  const saveDraft = () => {
    try {
      localStorage.setItem("draft", JSON.stringify(paragraphs));
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error saving draft:", error);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  // Calcula o número total de palavras no rascunho

  const wordCount = paragraphs.reduce((count, p) => {
    const words = p.text.trim().split(/\s+/).filter(Boolean);
    return count + words.length;
  }, 0);

  const letterCount = paragraphs.reduce((count, p) => {
    const letters = p.text.replace(/[^a-zA-Z]/g, '');
    return count + letters.length;
  }, 0);

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Editor de Redação</h2>

      <textarea
        className="w-full p-2 border rounded mb-2"
        rows="4"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Digite um parágrafo..."
      ></textarea>

      <div className="flex gap-2 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addParagraph}
        >
          Adicionar Parágrafo
        </button>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={saveDraft}
        >
          Salvar Rascunho
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Prévia do Texto</h3>
        <p className="text-gray-500 text-sm mb-4">
        {paragraphs.length} parágrafos, {wordCount} palavras, {letterCount} letras
        </p>

        <div className="space-y-2">
          {paragraphs.length === 0 ? (
            <p className="text-gray-500">Nenhum parágrafo adicionado.</p>
          ) : (
            paragraphs.map((p) => (
              <Paragraph 
                key={p.id} 
                text={p.text} 
                onDelete={() => deleteParagraph(p.id)} 
              />
            ))
          )}
        </div>
      </div>

      {isModalOpen && <Modal onClose={closeModal} onSave={closeModal} />}
    </div>
  );
};

export default DraftEditor;