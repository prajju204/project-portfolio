import React, { useRef } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink,
  FileText
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const iframeRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow.focus();
        iframeRef.current.contentWindow.print();
      } catch (e) {
        // Fallback for cross-origin or security restrictions
        window.open('/Prajwal_Resume.pdf', '_blank');
      }
    } else {
      window.open('/Prajwal_Resume.pdf', '_blank');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#0b1120] text-slate-100 rounded-2xl border border-slate-700/80 max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/95 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm sm:text-base block leading-tight">
                Prajwal — Attached Resume (PDF)
              </span>
              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                Prajwal_Resume.pdf • Verified Original Document
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Open in New Tab */}
            <a
              href="/Prajwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full View</span>
            </a>

            {/* Print / Save PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden xs:inline">Print / Save PDF</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="/Prajwal_Resume.pdf"
              download="Prajwal_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-semibold text-white shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02]"
              title="Directly download attached PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
              title="Close viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Attached Resume PDF Viewer */}
        <div className="flex-1 w-full h-full bg-[#050814] relative overflow-hidden flex flex-col">
          <object
            data="/Prajwal_Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            type="application/pdf"
            className="w-full h-full flex-1"
          >
            <iframe
              ref={iframeRef}
              src="/Prajwal_Resume.pdf#toolbar=1"
              title="Prajwal Resume PDF"
              className="w-full h-full border-0"
            >
              {/* Fallback for browsers that don't support PDF preview in iframe */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-900 text-slate-300">
                <FileText className="w-16 h-16 text-indigo-400 mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Attached Resume Ready for Viewing
                </h3>
                <p className="text-sm text-slate-400 max-w-md mb-6">
                  Your browser does not support embedded PDF previews directly. Click the button below to view or download the attached resume.
                </p>
                <div className="flex gap-3">
                  <a
                    href="/Prajwal_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open PDF in New Window
                  </a>
                  <a
                    href="/Prajwal_Resume.pdf"
                    download="Prajwal_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 border border-slate-700"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </iframe>
          </object>
        </div>

      </div>
    </div>
  );
}
