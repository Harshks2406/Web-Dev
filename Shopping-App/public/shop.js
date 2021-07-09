function fetchProducts (done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function createProductCard (product){
    return $(`
            <div class="col-3 card m-4 p-2">
                    <h4 class="product-name">${product.name}</h4>
                    <div class="product-manufacturer">${product.manufacturer}</div>
                <div class="row">
                    <div class="col m-3 p-2"><b>₹
                    ${product.price}</b></div>
                    <button class="col btn btn-primary m-3 p-1">Add to Cart</button>
                </div>
            </div>`)
}

function addProduct(name,manuf,price,done){
    $.post('/api/products',{
        name : name,
        manufacturer : manuf,
        price : price
    }, function(data){
        done(data)
    })
}