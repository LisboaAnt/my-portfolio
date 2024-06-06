import axios from 'axios';

// URL do serviço web do Google Apps Script
const SERVICE_URL = 'https://script.google.com/macros/s/AKfycbykjHlDI06_9q5aTNZbNY5izbJsFsl3V6GjsQPq9M8CikS6wNftpKo4gavmwJZqP-8/exec';

/**
 * Escreve conteúdo no documento Google Docs.
 * @param content - Conteúdo a ser escrito no documento.
 * @returns Promise com a resposta da solicitação.
 */
export const writeToDocument = async (content: string): Promise<string> => {
    try {
        const params = new URLSearchParams();
        params.append('action', 'write');
        params.append('content', content);

        const response = await axios.post(SERVICE_URL, params);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao escrever no documento');
    }
};

/**
 * Limpa o conteúdo do documento Google Docs.
 * @returns Promise com a resposta da solicitação.
 */
export const clearDocument = async (): Promise<string> => {
    try {
        const params = new URLSearchParams();
        params.append('action', 'clear');

        const response = await axios.post(SERVICE_URL, params);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao limpar o documento');
    }
};

/**
 * Obtém o conteúdo do documento Google Docs.
 * @returns Promise com o conteúdo do documento.
 */
export const getDocumentContent = async (): Promise<string> => {
    try {
        const params = new URLSearchParams();
        params.append('action', 'get');

        const response = await axios.post(SERVICE_URL, params);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao obter o conteúdo do documento');
    }
};
