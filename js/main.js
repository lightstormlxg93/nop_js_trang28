/**
 * người dùng nhập:
 *  tên phim
 *  giá vé người lớn
 *  giá vé trẻ em
 *  số vẻ người lớn đã bán
 *  số vé trẻ em đã bán
 *  tỷ lệ % quyên góp
 *  
 * hiên kết quả:
 *  tên phim
 *  số vé đã bán
 *  Doanh thu
 *  % từ thiện
 *  tổng tiền trích từ thiện
 *  Tổng thu được sau khi trừ
 */


function tinh() {

    let tenPhim = document.getElementById("ten-phim").value;
    let giaVeNl = document.getElementById("gia-ve-nguoi-lon").value * 1;
    let giaVeTe = document.getElementById("gia-ve-tre-em").value * 1;
    let soVeNl = document.getElementById("so-ve-nl").value * 1;
    let soVeTe = document.getElementById("so-ve-te").value * 1;
    let tyLe = document.getElementById("ty-le").value * 1 / 100;
    let tyLeChuaDoi = document.getElementById("ty-le").value * 1;

    let soVeDaBan = soVeNl + soVeTe;
    let doanhThu = (soVeNl * giaVeNl) + (soVeTe * giaVeTe);
    let tienTuThien = doanhThu * tyLe;
    let tongThu = doanhThu-tienTuThien;
    
    document.getElementById("ket-qua1").innerText = "Tên Phim:................................................................" + tenPhim;
    document.getElementById("ket-qua2").innerText = "Số vé đã bán:........................................................" + new Intl.NumberFormat('ja-JP').format(soVeDaBan);
    document.getElementById("ket-qua3").innerText = "Doanh thu:............................................................." + new Intl.NumberFormat('ja-JP').format(doanhThu) + " vnđ";
    document.getElementById("ket-qua4").innerText = "Trích % từ thiện:..................................................." + new Intl.NumberFormat('ja-JP').format(tyLeChuaDoi) + "%";
    document.getElementById("ket-qua5").innerText = "Tổng tiền trích từ thiện:...................................." + new Intl.NumberFormat('ja-JP').format(tienTuThien) + " vnđ";
    document.getElementById("ket-qua6").innerText = "Tổng thu được sau khi trừ:.............................." + new Intl.NumberFormat('ja-JP').format(tongThu) + " vnđ";

}

