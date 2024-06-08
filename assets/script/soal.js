document.addEventListener('DOMContentLoaded', function () {
    const jawabanElements = document.querySelectorAll('.jawaban');
    const btnSoal = document.getElementById('btn_soal');
    const keterangan = document.getElementById('keterangan');
    const hasilJawaban = document.getElementById('hasil_jawaban');
    const noSoalElement = document.getElementById('no_soal');
    const akurasiElement = document.getElementById('akurasi');
    const progressElement = document.getElementById('progress');
    let currentSoal = 1;
    let jawabanBenar = 0;
    let jawabanTotal = 0;

    jawabanElements.forEach(jawabanElement => {
        jawabanElement.addEventListener('click', function () {
            const isJawabanBenar = this.getAttribute('data-jawaban') === 'true';
            jawabanTotal++;

            if (isJawabanBenar) {
                jawabanBenar++;
                hasilJawaban.textContent = 'Jawaban Benar';
                keterangan.style.display = 'flex';
            } else {
                hasilJawaban.textContent = 'Jawaban Salah';
                keterangan.style.display = 'flex';
            }

            btnSoal.disabled = false;
        });
    });

    btnSoal.addEventListener('click', function () {
        setSoalBaru();
        keterangan.style.display = 'none';
        btnSoal.disabled = true;
        resetProgressBar();

        currentSoal++;
        noSoalElement.textContent = `${currentSoal}/5`;
        akurasiElement.textContent = `${Math.round((jawabanBenar / jawabanTotal) * 100)}%`;

        if (currentSoal > 5) {
            // Kuis selesai, tambahkan logika atau tampilkan pesan kuis selesai di sini
            alert('Kuis selesai!');
        }
    });

    function setSoalBaru() {
        // Gantilah konten pertanyaan dan jawaban sesuai dengan nomor soal yang sedang aktif
        const pertanyaanElement = document.getElementById('pertanyaan');
        const jawabanAElement = document.getElementById('a');
        const jawabanBElement = document.getElementById('b');
        const jawabanCElement = document.getElementById('c');
        const jawabanEElement = document.getElementById('e');

        switch (currentSoal) {
            case 2:
                pertanyaanElement.textContent = 'Pertanyaan untuk Soal 2';
                jawabanAElement.textContent = 'Jawaban A untuk Soal 2';
                jawabanBElement.textContent = 'Jawaban B untuk Soal 2';
                jawabanCElement.textContent = 'Jawaban C untuk Soal 2';
                jawabanEElement.textContent = 'Jawaban E untuk Soal 2';
                break;
            case 3:
                pertanyaanElement.textContent = 'Pertanyaan untuk Soal 3';
                jawabanAElement.textContent = 'Jawaban A untuk Soal 3';
                jawabanBElement.textContent = 'Jawaban B untuk Soal 3';
                jawabanCElement.textContent = 'Jawaban C untuk Soal 3';
                jawabanEElement.textContent = 'Jawaban E untuk Soal 3';
                break;
            case 4:
                pertanyaanElement.textContent = 'Pertanyaan untuk Soal 4';
                jawabanAElement.textContent = 'Jawaban A untuk Soal 4';
                jawabanBElement.textContent = 'Jawaban B untuk Soal 4';
                jawabanCElement.textContent = 'Jawaban C untuk Soal 4';
                jawabanEElement.textContent = 'Jawaban E untuk Soal 4';
                break;
            case 5:
                pertanyaanElement.textContent = 'Pertanyaan untuk Soal 5';
                jawabanAElement.textContent = 'Jawaban A untuk Soal 5';
                jawabanBElement.textContent = 'Jawaban B untuk Soal 5';
                jawabanCElement.textContent = 'Jawaban C untuk Soal 5';
                jawabanEElement.textContent = 'Jawaban E untuk Soal 5';
                break;
            default:
                // Lakukan sesuatu jika sudah mencapai nomor soal tertentu atau kuis selesai
                break;
        }
    }
});
