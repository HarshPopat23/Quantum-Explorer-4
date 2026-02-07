import React, { useRef, useState, useEffect } from "react";
import { storage, conf } from "../../appwrite/config";
import { fileService } from "../../appwrite/fileservice";
import styles from "./VideoLibrary.module.css";

const VideoLibrary = () => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [filter, setFilter] = useState("All");
  const [uploading, setUploading] = useState(false);

  // Fetch Files on Load
  useEffect(() => {
    fetchFiles();
  }, []);

  // Filter Logic
  useEffect(() => {
    if (filter === "All") {
      setFilteredFiles(files);
    } else {
      const extension = filter === "Videos" ? [".mp4", ".mkv", ".mov"] : [".pdf"];
      setFilteredFiles(files.filter(file => 
        extension.some(ext => file.name.toLowerCase().endsWith(ext))
      ));
    }
  }, [filter, files]);

  const fetchFiles = async () => {
    try {
      const response = await storage.listFiles(conf.bucketId);
      setFiles(response.files);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const response = await fileService.uploadFile(file);
      setUploading(false);
      if (response) {
        alert("Upload successful!");
        fetchFiles(); // Refresh grid
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <span className={styles.logo}>🧠 QEconsePta</span>
          </div>

          <div className={styles.navCenter}>
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Search resources..." />
              <button className={styles.searchBtn}>🔍</button>
            </div>

            <input type="file" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileChange} />
            
            <button className={styles.uploadBtn} onClick={handleUploadClick} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload File"}
            </button>
          </div>
        </nav>
      </header>

      <div className={styles.uppercontent}>
        <p>Community Library</p>
        <div className={styles.btns}>
          <button className={filter === "All" ? styles.active : ""} onClick={() => setFilter("All")}>All Files</button>
          <button className={filter === "Videos" ? styles.active : ""} onClick={() => setFilter("Videos")}>Videos</button>
          <button className={filter === "PDFs" ? styles.active : ""} onClick={() => setFilter("PDFs")}>PDFs</button>
        </div>
      </div>

      <main className={styles.content}>
        <section className={styles.videoGrid}>
          {filteredFiles.map((file) => (
            <div key={file.$id} className={styles.videoCard}>
              <div className={styles.thumbnail}>
                {file.name.toLowerCase().endsWith('.pdf') ? (
                  <div className={styles.pdfPlaceholder}>📄 PDF</div>
                ) : (
                  <img src={storage.getFilePreview(conf.bucketId, file.$id)} alt={file.name} />
                )}
              </div>
              <div className={styles.videoInfo}>
                <div className={styles.text}>
                  <h3>{file.name}</h3>
                  <p>{(file.sizeOriginal / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default VideoLibrary;