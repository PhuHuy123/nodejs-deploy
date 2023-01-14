import axios from 'axios'
const API_URL = "http://localhost:8080"

cloudinaryUpload = (fileToUpload) => {
    return axios.post(API_URL + '/cloudinary-upload', fileToUpload)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export default cloudinaryUpload
