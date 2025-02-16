import React, { useState, useRef } from "react";
import { marked } from 'marked';
import './Markdown.css';
import Loader from "./Loader";
import Hours from "./Hours";
import { Link } from "react-router-dom";

export default function Markdown2() {
    const [markdownText, setMarkdownText] = useState('');
    const [title, setTitle] = useState('Document sans titre');
    const [preview, setPreview] = useState('');
    const fileInputRef = useRef(null);

  // Configuration de la bibliothèque marked
  marked.setOptions({
    breaks: true,
    gfm: true,
    sanitize: false,
    smartLists: true,
    smartypants: true
  });

  // Mettre à jour l'aperçu en fonction du markdown
  const updatePreview = () => {
    setPreview(marked.parse(markdownText));
  };

  // Créer un nouveau document
  const newDocument = () => {
    if (window.confirm('Voulez-vous créer un nouveau document ? Les modifications non sauvegardées seront perdues.')) {
      setMarkdownText('');
      setTitle('Document sans titre');
      updatePreview();
      setPreview('');
    }
  };

  // Exporter le contenu en fichier Markdown
  const exportMarkdown = () => {
    const blob = new Blob([markdownText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Gérer l'importation de fichiers Markdown
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setMarkdownText(event.target.result);
        setTitle(file.name.replace('.md', ''));
        updatePreview();
      };
      reader.readAsText(file);
    }
  };

  // Insérer du formatage Markdown autour du texte sélectionné
  const insertMarkdown = (prefix, suffix) => {
    const selectionStart = document.getElementById('markdown-input').selectionStart;
    const selectionEnd = document.getElementById('markdown-input').selectionEnd;
    const selectedText = markdownText.substring(selectionStart, selectionEnd);

    const beforeText = markdownText.substring(0, selectionStart);
    const afterText = markdownText.substring(selectionEnd);

    const newText = beforeText + prefix + selectedText + suffix + afterText;
    setMarkdownText(newText);

    // Repositionner le curseur après l'insertion
    const newCursorPos = selectionStart + prefix.length + selectedText.length + suffix.length;
    document.getElementById('markdown-input').setSelectionRange(newCursorPos, newCursorPos);

    updatePreview();
  };

  // Effacer le contenu de l'éditeur après confirmation
  const clearEditor = () => {
    if (window.confirm('Voulez-vous effacer tout le contenu ?')) {
      setMarkdownText('');
      updatePreview();
      setPreview('');
    }
  };
  return (
    <main className="w-full h-screen bg-gray-500">
        <Loader timer={1000} />
    <div className="container">
      {/* Zone de titre éditable */}
      <div className="title-container">
        <div
          id="document-title"
          contentEditable="true"
          spellCheck="true"
          onInput={(e) => setTitle(e.target.innerText)}
        >
          {title}
        </div>
      </div>

      {/* Barre d'outils */}
      <div className="file-toolbar">
        <input
          type="file"
          ref={fileInputRef}
          className="file-input"
          accept=".md"
          onChange={handleFileInput}
        />
        <button onClick={() => fileInputRef.current.click()}>Importer</button>
        <button onClick={exportMarkdown}>Exporter</button>
        <button onClick={newDocument}>Nouveau</button>
      </div>

      {/* Barre d'outils Markdown */}
      <div className="toolbar">
        <button onClick={() => insertMarkdown('**', '**')}>Gras</button>
        <button onClick={() => insertMarkdown('*', '*')}>Italique</button>
        <button onClick={() => insertMarkdown('# ', '')}>Titre</button>
        <button onClick={() => insertMarkdown('- ', '')}>Liste</button>
        <button onClick={() => insertMarkdown('[', '](url)')}>Lien</button>
        <button onClick={() => insertMarkdown('```\n', '\n```')}>Code</button>
        <button onClick={clearEditor}>Effacer</button>
      </div>

      {/* Zone principale de l'éditeur */}
      <div className="editor-container">
        <div className="input-container">
          <div className="input-header">Markdown</div>
          <textarea
            id="markdown-input"
            value={markdownText}
            onChange={(e) => {
              setMarkdownText(e.target.value);
              updatePreview();
            }}
            placeholder="Écrivez votre texte en Markdown ici..."
          />
        </div>
        <div className="preview-container">
          <div className="preview-header">Aperçu</div>
          <div
          className="markdown-container"
            id="preview"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center pt-12">
        <Link className="text-[12px] font-bold border-2 border-solid border-white rounded-full p-2" to="/">Retourner a l'accueil</Link>
    </div>
    <div id='heure' className='flex flex-col items-end w-full'>
        <Hours />
    </div>
    </main>
  )
};
