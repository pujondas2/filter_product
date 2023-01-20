const search = () => {
    const searchBox = document.getElementById('search-box').value.toUpperCase();
    const productList = document.getElementById('productlist');
    const singleProduct = document.querySelectorAll('.single-product');
    const pname = productList.getElementsByTagName('h2');

    for(let i = 0; i < pname.length; i++){
        let match = singleProduct[i].getElementsByTagName('h2')[0];
        if(match) {
            let textValue = match.textContent || match.innerHTML;
            if(textValue.toUpperCase().indexOf(searchBox) > -1) {
                singleProduct[i].style.display = "";
            } else {
                singleProduct[i].style.display = "none";
            }
        }
    }
}