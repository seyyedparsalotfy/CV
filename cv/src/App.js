import React, { useEffect, useState } from "react";

const PdfViewer = ({ pdfUrl }) => {
  useEffect(() => {
    const refreshPage = setTimeout(() => {
      window.location.reload();
    }, 10000);

    return () => clearTimeout(refreshPage);
  }, []);

  return (
    <embed src={pdfUrl} width="100%" height="100%" type="application/pdf" />
  );
};

const App = () => {
  const [isFirstPdf, setIsFirstPdf] = useState(true);

  return (
    <div>
      {isFirstPdf ? (
        <PdfViewer pdfUrl="cv/cv/public/Parsa.pdf" />
      ) : (
        <PdfViewer pdfUrl="cv/cv/public/CV.32.pdf" />
      )}
    </div>
  );
};

export default App;
