import React, { useEffect, useState } from "react";
import ImgIcon from '/images/imgFile.svg';

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
      <div className="imgWrap">
        <label htmlFor="file">
          <img src={ImgIcon} alt='imgIcon' className='imgIcon' />
          <span>클릭 해서 이미지 업로드하기</span>
        </label>
        <input 
          type="file" 
          onChange={handleUploadImg} 
          name='file'
          id='file'
        />
      </div>

      <div className="previewWrap">
          {preview ? (
            <img src={preview} alt="preview" className='previewImg' />
          ) : <p>미리보기</p>}
      </div>
    </div>
  );
};

export default ImgUploader;
