"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const page = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleSave = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      try {
        // Envoyer le contenu à votre API pour enregistrement dans la base de données
        const response = await fetch("/api/article", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        });

        if (response.status === 200) {
          console.log("Article enregistré avec succès !");
        } else {
          console.error(
            "Erreur lors de l'enregistrement de l'article :",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Erreur lors de l'enregistrement de l'article :", error);
      }
    }
  };
  return (
    <>
      <Editor
        apiKey="your-api-key"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          selector: "textarea",
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "plugins",
            "emoticons",
            "image",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "emoticons | image | removeformat | help",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
      <button onClick={handleSave}>Enregistrer</button>
    </>
  );
};

export default page;
