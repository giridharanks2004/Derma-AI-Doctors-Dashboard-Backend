export const DoctorsResponseDTO = (doctorInfo) => {
    const doctorAbstracted = {
        id : doctorInfo._id,
        name : doctorInfo.doctorName,
        email : doctorInfo.email,
        speciality : doctorInfo.docType,
        status : doctorInfo.doctorStatus
    }
    return doctorAbstracted
}