const Cloudinary = async (uri) => {
    const uploadData = new FormData();
    uploadData.append('file', {uri: uri, type: 'image/jpeg', name: 'upload.jpeg'})
    uploadData.append('upload_preset', 'dhm6dryf')

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dgrkk1zmh/image/upload",{
        method: 'POST',
        headers: {"Content-Type" : "multipart/form-data"},
        body: uploadData       
      })

      const jsonRespose = await response.json()
      return jsonRespose.url
    } catch (e) {
      console.log(e)
    }
  }

export default Cloudinary