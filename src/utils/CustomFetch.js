let is_ok = true;
const CustomFecth = (item) => {
    return new Promise ((resolve, reject) => {
        if (is_ok) {resolve(item)}
        else {reject("KO")}
    })
}

export default CustomFecth