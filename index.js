function tinhLuong() {
    var input1 = document.getElementById("input-1").value * 1;
    var input2 = document.getElementById("input-2").value * 1;

    console.log({ input1, input2});

    var tinhluong =(input1*input2);
    console.log("luong:",tinhluong);

    document.getElementById("result").innerText = `So tien luong: ${tinhluong.toLocaleString()} VND`;
}
function tinhTrungBinh() {
    var num1 = (document.getElementById("num-1").value * 1) || 0;
    var num2 =(document.getElementById("num-2").value * 1) || 0;
    var num3 =(document.getElementById("num-3").value * 1) || 0;
    var num4 =(document.getElementById("num-4").value * 1) || 0;
    var num5 =(document.getElementById("num-5").value * 1) || 0;
    console.log({num1,num2,num3,num4,num5});


    var trungBinh = (num1 + num2 + num3 + num4 + num5)/5;
    // if (input1 == null) { input1 = 0; }
    // var dem = 5; 
    console.log("TB:",trungBinh);
    document.getElementById("kq").innerText = `Giá trị trung bình: ${trungBinh.toLocaleString()}`;
}
function chuyenDoi() {
    var soTienUSD = document.getElementById("input-3a").value * 1;

    var giaUSD = 23500;
    console.log({giaUSD});
    var soTienVND = soTienUSD * giaUSD;
    console.log({soTienVND});

    var formatter = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' });
    var soTienVNDFormatted = formatter.format(soTienVND);

    document.getElementById("res").innerText = `Số tiền VND: ${soTienVNDFormatted}`;
}

function tinhDienTichChuVi() {
    var chieuDai = document.getElementById("input-chieudai").value * 1 ;
    var chieuRong = document.getElementById("input-chieurong").value * 1;

    var dienTich = chieuDai * chieuRong;
    var chuVi = 2 * (chieuDai + chieuRong) ;

    document.getElementById("re").innerHTML = `Diện tích: ${dienTich}<br>Chu vi: ${chuVi}`;
}

function tinhTongHaiKySo() {
    var soNguyen = document.getElementById("input-so").value;
    
    if (!soNguyen.match(/^\d{2}$/)) {
        document.getElementById("result").innerText = "Hãy nhập một số nguyên có đúng hai ký số.";
        return;
    }

    var chuSo1 = parseInt(soNguyen.charAt(0));
    var chuSo2 = parseInt(soNguyen.charAt(1));

    var tong = chuSo1 + chuSo2;

    document.getElementById("ketqua").innerText = `Tong  la: ${tong}`;
}
