function validateForm() {
    var ho = document.getElementById('ho').value;
    var ten = document.getElementById('ten').value;
    var soDienThoai = document.getElementById('soDienThoai').value;

    var ngay = document.getElementById('ngay').value;
    var thang = document.getElementById('thang').value;
    var nam = document.getElementById('nam').value;

    if (ho === '' || ten === '' || soDienThoai === '' || ngay === '' || thang === '' || nam === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return false;
    }

    var phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(soDienThoai)) {
        alert('Số điện thoại không hợp lệ.');
        return false;
    }

    return true;
}
