"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Page = () => {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleSave = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      try {
        const response = await fetch("/api/article", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description, content }),
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
      <div className="container">
        <div className="justify-center items-center flex flex-col p-5 gap-5 w-1/2 mx-auto">
          <Textarea
            placeholder="Titre de l'article"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description de l'article"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Textarea>
        </div>
        <Editor
          apiKey="yt6nh3gohozg0k1mhyg0785zlgynwe5me14knolnll8ervv4"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
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
        <div className="justify-center items-center flex flex-col">
          <Button variant="secondary" onClick={log}>
            Log editor content
          </Button>
          <Button variant="secondary" onClick={handleSave}>
            Enregistrer
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
