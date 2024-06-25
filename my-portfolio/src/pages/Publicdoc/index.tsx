import React, { useState, useEffect } from 'react';
import { writeToDocument, clearDocument, getDocumentContent } from '../../ts/documentService';
import './style.scss';
import MostradorDados from '../../components/MostradorDados';

const Publicdoc: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const data = await getDocumentContent();
      setContent(data);
    } catch (error) {
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleWriteContent = async () => {
    try {
      await writeToDocument(newContent);
      fetchContent();
      setNewContent('');
    } catch (error) {
      setError('Failed to write content');
    }
  };

  const handleClearContent = async () => {
    try {
      await clearDocument();
      fetchContent();
    } catch (error) {
      setError('Failed to clear content');
    }
  };

  return (
    <div className='container publicDoc'>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>            { MostradorDados && content && (
                <MostradorDados dados={content} />
              )}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3 ">
                <textarea
                  className="form-control1"
                  value={content}
                  readOnly
                  rows={15}
                  style={{ width: '100%' }} // Use width 100% to make it responsive
                ></textarea>
              </div>
              <div className="mb-3 ">
                <textarea
                  className="form-control1"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Enter new content"
                  rows={3}
                  style={{ width: '100%' }} // Use width 100% to make it responsive
                ></textarea>
              </div>
              <div className="text-center button">
                <button className="btn btn-primary me-2" onClick={handleWriteContent}>
                  Write
                </button>
                <button className="btn btn-danger" onClick={handleClearContent}>
                  Clear
                </button>
              </div>
            </div>
          )}

          

        </div>
      </div>
    </div>
  );
};

export default Publicdoc;
