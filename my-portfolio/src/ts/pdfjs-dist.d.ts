declare module 'pdfjs-dist/build/pdf' {
    export const version: string;
    export const GlobalWorkerOptions: {
        workerSrc: string;
    };

    export interface PDFDocumentProxy {
        numPages: number;
        getPage(pageNumber: number): Promise<PDFPageProxy>;
    }

    export interface PDFPageProxy {
        getViewport(params: { scale: number }): PDFPageViewport;
        render(params: { canvasContext: CanvasRenderingContext2D; viewport: PDFPageViewport }): PDFRenderTask;
    }

    export interface PDFPageViewport {
        width: number;
        height: number;
    }

    export interface PDFRenderTask {
        promise: Promise<void>;
    }

    export function getDocument(src: string | Uint8Array | PDFSource): PDFLoadingTask<PDFDocumentProxy>;

    interface PDFSource {
        data?: Uint8Array;
        url?: string;
    }

    interface PDFLoadingTask<T> {
        promise: Promise<T>;
        onProgress: ((progressData: { loaded: number; total: number }) => void) | null;
        cancel(): void;
    }
}
