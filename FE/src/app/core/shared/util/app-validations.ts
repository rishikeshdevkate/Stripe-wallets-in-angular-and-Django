export const validatePhone = event => {
  if (event.target.value.length >= 10 && event.keyCode != 8) {
    return false;
  }
  let charCode = event.which ? event.which : event.keyCode;
  if ((charCode >= 48 && charCode <= 57) || charCode == 8) {
    return true;
  } else {
    return false;
  }
};
