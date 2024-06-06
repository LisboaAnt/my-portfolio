import React, { useEffect } from 'react';
import { logVisitorData, clearDocumentContent } from '../../ts/visitorLogger';

const VisitorLogger: React.FC = () => {
    useEffect(() => {
        // Função para logar os dados do visitante
        const logData = async () => {
            try {
                await logVisitorData();
            } catch (error) {
                console.error('Error logging visitor data:', error);
            }
        };

        // Função para limpar o conteúdo do documento
        const clearData = async () => {
            try {
                await clearDocumentContent();
            } catch (error) {
                console.error('Error clearing document content:', error);
            }
        };

        // Verificar a URL atual
        const pathname = window.location.pathname;
        if (pathname === '/logD') {
            clearData();
        } else {
            logData();
        }
    }, []);

    return (
        <div>
        </div>
    );
};

export default VisitorLogger;
