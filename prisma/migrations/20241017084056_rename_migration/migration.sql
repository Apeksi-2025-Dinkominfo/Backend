-- CreateTable
CREATE TABLE `optd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `instansi` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `nama_unit_kerja` VARCHAR(191) NOT NULL,
    `nama_ajudan` VARCHAR(191) NOT NULL,
    `nomor_handphone` VARCHAR(191) NOT NULL,
    `tanggal_kedatangan` DATETIME(3) NOT NULL,
    `tanggal_kepulangan` DATETIME(3) NOT NULL,
    `lokasi_menginap` VARCHAR(191) NOT NULL,
    `jumlah_rombongan` INTEGER NOT NULL,
    `pesawat` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `asal_kota` ENUM('Ambon', 'Balikpapan', 'Banda_Aceh', 'Bandar_Lampung', 'Bandung', 'Banjar', 'Banjarbaru', 'Banjarmasin', 'Batam', 'Batu', 'Baubau', 'Bekasi', 'Bengkulu', 'Bima', 'Binjai', 'Bitung', 'Blitar', 'Bogor', 'Bontang', 'Bukittinggi', 'Cilegon', 'Cimahi', 'Cirebon', 'Denpasar', 'Depok', 'Dumai', 'Gorontalo', 'Gunungsitoli', 'Jakarta_Barat', 'Jakarta_Pusat', 'Jakarta_Selatan', 'Jakarta_Timur', 'Jakarta_Utara', 'Jambi', 'Jayapura', 'Kediri', 'Kendari', 'Kotamobagu', 'Kupang', 'Langsa', 'Lhokseumawe', 'Lubuklinggau', 'Madiun', 'Magelang', 'Makassar', 'Malang', 'Manado', 'Mataram', 'Medan', 'Metro', 'Mojokerto', 'Padang', 'Padang_Panjang', 'Padangsidimpuan', 'Pagaralam', 'Palangka_Raya', 'Palembang', 'Palopo', 'Palu', 'Pangkalpinang', 'Parepare', 'Pariaman', 'Pasuruan', 'Payakumbuh', 'Pekalongan', 'Pekanbaru', 'Pematang_Siantar', 'Pontianak', 'Prabumulih', 'Probolinggo', 'Sabang', 'Salatiga', 'Samarinda', 'Sawahlunto', 'Semarang', 'Serang', 'Sibolga', 'Singkawang', 'Solok', 'Sorong', 'Subulussalam', 'Sukabumi', 'Sungaipenuh', 'Surabaya', 'Surakarta', 'Tangerang', 'Tangerang_Selatan', 'Tanjungbalai', 'Tanjungpinang', 'Tarakan', 'Tasikmalaya', 'Tebing_Tinggi', 'Tegal', 'Ternate', 'Tidore_Kepulauan', 'Tomohon', 'Tual', 'Yogyakarta') NOT NULL,
    `jam_kedatangan` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
