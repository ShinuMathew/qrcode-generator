var qr_btn = document.querySelector('#qr-btn')
var qr_img = document.querySelector('#qr-img')
var loading = document.querySelector('#loading')

qr_btn.addEventListener("click", () => {
    loading.style.display = "block"
    qr_img.onload = function() {
        loading.style.display = "none"
    }

    var input = document.querySelector('#input').value
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`
    qr_img.src = url
})