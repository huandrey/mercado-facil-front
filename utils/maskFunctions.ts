import VMasker from "vanilla-masker";

export const dateFormatMask = (value: string) => {
  return VMasker.toPattern(value, "99/99/9999");
}

export const timeFormatMask = (value: string) => {
  return VMasker.toPattern(value, "99:99");
}

export const zipCodeFormatMask = (value: string) => {
  return VMasker.toPattern(value, "99999-999");
}

export const phoneFormatMask = (value: string) => {
    let formatValue = value.replace(/[^0-9]/g,'');
    let newValue = formatValue[0] === "0" ? formatValue.substring(1) : formatValue;
    let mask = newValue.length <= 10 ? "(99) 9999-9999" : "(99) 99999-9999"

    return VMasker.toPattern(newValue, mask);
}

export const phoneFormatMaskContact = (value: string) => {
    if(value[0] === "(") {
      return phoneFormatMask(value);
    }
    return value;
}

export const cpfCnpjFormatMask = (value: string) => {
  return value.length > 14 ?
    VMasker.toPattern(value, "99.999.999/9999-99")
    :
    VMasker.toPattern(value, "999.999.999-99");
}
export const cleanCpfFormat = (value: string) => {
  return value.replace(/(\.|\/|\-)/g, "");
}
export const cardNumberFormatMask = (value: string) => {
  return VMasker.toPattern(value, "9999 9999 9999 9999");
}

export const moneyFormatMask = (value: string) => {
  return VMasker.toMoney(value);
}
export const cleanMoneyFormat = (value: string) => {
  return value.replace(/(\.|\,|R|$)/g, "");
}

export const expirationCardFormatMask = (value: string) => {
  return VMasker.toPattern(value, "99/99");
}

export const hideTel = (value: string) => {
  return VMasker.toPattern(value, "(99) ****-9999");
}
export const hideCel = (value: string) => {
  let newValue = "(" + value.slice(0,2) +")";
  newValue += " *****-";
  newValue += value.slice(7,11);
  return newValue;
}

export const hideCpf = (value: string) => {
  let hiddenCpf = "***."
  hiddenCpf += value.slice(3,6);
  hiddenCpf += "***.-" ;
  hiddenCpf += value.slice(9,11);
  return hiddenCpf;
}
export const hideBirthday = (value: string) => {
  let arrayBirthday = value.split(" ");
  arrayBirthday[2] = VMasker.toPattern(arrayBirthday[2], "*****");
  arrayBirthday[4] = VMasker.toPattern(arrayBirthday[4], "99**");
  return arrayBirthday.join(" ");

}


export const hideEmail = (value: string) => {
  let hiddenEmail = value.slice(0,3);
  let i = 3;

  while(value[i] !== "@"){
    hiddenEmail += "*"
    i++;
  }

  hiddenEmail += value.slice(i,value.length);

  return hiddenEmail;
}