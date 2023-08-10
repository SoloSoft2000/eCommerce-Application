const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  const age = today.getFullYear() - birthDateObj.getFullYear();

  if (
    today.getMonth() < birthDateObj.getMonth() ||
    (today.getMonth() === birthDateObj.getMonth() &&
      today.getDate() < birthDateObj.getDate())
  ) {
    return age - 1;
  }
  return age;
};

export default calculateAge;
