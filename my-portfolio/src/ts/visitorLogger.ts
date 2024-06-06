import axios from 'axios';
import { writeToDocument, clearDocument } from './documentService';

/**
 * Captura os dados do usuário (IP e localização) e escreve no documento Google Docs.
 */
export const logVisitorData = async (): Promise<void> => {
    try {
        // Captura os dados do usuário
        const response = await axios.get('https://ipinfo.io/json');
        
        const visitorData = {
            ip: response.data.ip,
            location: `${response.data.city}, ${response.data.country}`
        };

        // Formata os dados para salvar no documento
        const logLine = `${new Date().toISOString().split('T')[0]} - IP: ${visitorData.ip} - Location: ${visitorData.location}\n`;

        // Escreve os dados no documento
        await writeToDocument(logLine);
    } catch (error) {
        throw new Error('');
    }
};

/**
 * Limpa o conteúdo do documento Google Docs.
 */
export const clearDocumentContent = async (): Promise<void> => {
    try {
        await clearDocument();
    } catch (error) {
        throw new Error('');
    }
};
