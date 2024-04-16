import React, { useEffect, useState } from "react";

const ImgUploader = ({image, setImage}) => {
  const [preview, setPreview] = useState(null);

  // 이미지 url을 2진수(binary)로 변경
  const toBase64 = file => new Promise ((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  })


  const handleUploadImg = async (e) => {
    const inputFile = e.target.files[0];
    let b64file = await toBase64(inputFile);
    setImage(b64file)
    
    const imageBlob = URL.createObjectURL(inputFile);
    setPreview(imageBlob);
  }

  useEffect(() => {
    return () => setPreview(null);
  }, []);


  return (
    <div className="communityImgBox">
      <p className="boxTitle">이미지 첨부하기</p>
      <label htmlFor="file">
        클릭 해서 파일 업로드하기
      </label>
      <input 
        type="file" 
        onChange={handleUploadImg} 
        name='file'
        id='file'
      />
      <h1>미리보기</h1>
      <div className='previewImg'>
        {preview && (
          <img src={preview} alt="preview" className='previewImg' />
        )}
      </div>
    </div>
  );
};

export default ImgUploader;
