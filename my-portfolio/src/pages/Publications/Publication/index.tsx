import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './style.scss';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import PublicationsCarosel from '../../../components/PublicationsCarosel';

// Configurar o worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const Publication = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [pdfFile, setPdfFile] = useState<string | null>(null);

    useEffect(() => {
        // Carregar o arquivo PDF com base no ID
        const fetchPdf = async () => {
            const pdfPath = `/storage/publications/${id}.pdf`;
            try {
                const response = await fetch(pdfPath);
                if (!response.ok) {
                    throw new Error('PDF not found');
                }
                const pdfBlob = await response.blob();
                const pdfUrl = URL.createObjectURL(pdfBlob);
                setPdfFile(pdfUrl);
            } catch (error) {
                console.error('Error fetching PDF:', error);
            }
        };

        fetchPdf();
    }, [id]);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="project"> 
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 text-center'>
                    <div className="pb-5">
                        <h1 className='pb-4'>{t("publications.publication" + id + ".title")}</h1>
                        <div className="cardText px-1 px-md-5 py-3">
                            <h3 className='py-2 pt-3'>{t("publications.publication" + id +".description")}</h3>
                            <div className='text-justify px-2 pb-4' dangerouslySetInnerHTML={{ __html: t("publications.publication" + id +".text").replace(/\n/g, '<br>') }} />
                        </div>
                    </div>

                    {pdfFile && (
                        <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`}>
                            <div className="pdf-viewer mb-5">
                                <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
                            </div>
                        </Worker>
                    )}
                </div>

                <div className='col-lg-3 py-5 mt-2'>
                        <div className='pt-4 mt-5'>
                            <PublicationsCarosel id={id+""} />
                        </div>
                </div>

                
            </div>
        </div>
    </div>
    );
};

export default Publication;
