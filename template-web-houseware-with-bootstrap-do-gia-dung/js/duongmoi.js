const products = [
    {
        name: "Sản phẩm 1",
        price: "100.000đ",
        description: "Mô tả sản phẩm 1",
        image: "SanPhamSale/CrystalTB-6680A.jpg"
    },
    {
        name: "Sản phẩm 2",
        price: "200.000đ",
        description: "Mô tả sản phẩm 2",
        image: "path/to/image2.jpg"
    }
];

function displayProducts(products) {
    const productContainer = document.getElementById('list-product');
    productContainer.innerHTML = ''; // Xóa các sản phẩm cũ

    products.forEach(product => {
        const productHTML = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="card-footer">
                            <small class="text-muted">${product.price}</small>
                        </div>
                    </div>
                </div>
            </div>`;
        productContainer.innerHTML += productHTML;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    displayProducts(products);
});
