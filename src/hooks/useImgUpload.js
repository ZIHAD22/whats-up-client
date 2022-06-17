import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const useImgUpload = () => {
  const [ImgUploadLoading, setUploadLoading] = useState(false)

  const imgUpload = async (imageFile) => {
    const formData = new FormData()
    formData.append('image', imageFile)

    const { data: uploadedImg } = await axios.post(
      process.env.REACT_APP_IMAGEBB_UPLOAD_URL,
      formData,
    )
    const uploadedImgUrl = uploadedImg.data.url

    if (uploadedImgUrl) {
      setUploadLoading(false)
      return uploadedImgUrl
    }
  }

  return [imgUpload, ImgUploadLoading, setUploadLoading]
}

export default useImgUpload
