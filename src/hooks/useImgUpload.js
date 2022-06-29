import { useState } from 'react'

const useImgUpload = () => {
  const [ImgUploadLoading, setUploadLoading] = useState(false)

  const imgUpload = async (imageFile) => {
    const formData = new FormData()
    formData.append('image', imageFile)

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_API_KEY}`
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    const uploadedImg = await response.json()

    const uploadedImgUrl = uploadedImg.data.url

    if (uploadedImgUrl) {
      setUploadLoading(false)
      return uploadedImgUrl
    }
  }

  return [imgUpload, ImgUploadLoading, setUploadLoading]
}

export default useImgUpload
