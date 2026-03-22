export const DoctorsResponseDTO = (doctorInfo) => {
    const doctorAbstracted = {
        name : doctorInfo.doctorName,
        email : doctorInfo.email,
        speciality : doctorInfo.docType 
    }
    return doctorAbstracted
}