-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 22, 2021 lúc 03:07 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tuanem`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(24, 'Áo thun'),
(54, 'Quần Jogger'),
(64, 'Sơ Mi Form Rộng'),
(74, 'Quần Jean'),
(84, 'Áo Khoác'),
(104, 'Quần Short'),
(107, 'Phụ Kiện');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(24, 'Trắng'),
(44, 'Xám'),
(84, 'Đen'),
(94, 'Nâu'),
(104, 'Xanh đậm'),
(114, 'Xám đen'),
(115, 'Hoa Văn'),
(116, 'Cam'),
(117, 'Hồng'),
(119, 'Như hình'),
(120, 'Jean'),
(121, 'Be'),
(122, 'Nâu sáng'),
(123, 'Tím'),
(124, 'Vàng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderproducts`
--

CREATE TABLE `orderproducts` (
  `idoder` int(11) NOT NULL DEFAULT 0,
  `idproduct` int(11) NOT NULL DEFAULT 0,
  `color` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `size` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `price` float DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orderproducts`
--

INSERT INTO `orderproducts` (`idoder`, `idproduct`, `color`, `size`, `price`, `quantity`) VALUES
(474, 134, 'Trắng', 'L', 15, 1),
(475, 211, 'Be', 'M', 12, 1),
(476, 94, 'Cam', 'L', 10, 10),
(478, 114, 'Xám', 'M', 12, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `idOrder` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) DEFAULT NULL,
  `total` float NOT NULL,
  `iduser` int(11) DEFAULT NULL,
  `emailPaypal` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dateOrder` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`idOrder`, `address`, `phone`, `status`, `total`, `iduser`, `emailPaypal`, `name`, `dateOrder`) VALUES
(474, 'Lê Bình - Cái Răng - Cần TTh', '0981248796', 2, 15, 114, 'b1809570@business.example.com', 'Em', '2021-11-01 06:40:37'),
(475, 'Lê Bình - Cái Răng - CT', '0981248796', 0, 12, 114, 'b1809570@business.example.com', 'Em', '2021-11-11 09:59:20'),
(476, 'Lê Bình - Cái Răng - CT', '0981248796', 2, 100, 114, 'b1809570@business.example.com', 'Em', '2021-11-16 06:53:03'),
(478, 'Lê Bình, Cần Thơ', '0981248796', 2, 12, 119, 'b1809570@business.example.com', 'Em', '2021-12-22 13:25:29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Descriptions` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Price` float DEFAULT NULL,
  `img` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `Descriptions`, `Price`, `img`, `id_category`) VALUES
(94, 'Áo Thun M1', 'Chất liệu: Thun mát\nThành phần: 100% thun\n- Co dãn 2 chiều\n- Thấm hút mồ hôi tốt mang lại cảm giác thoáng mát', 10, '/img/product/1636299273942-13052021040511_Dai_dien.jpg', 24),
(104, 'Áo Thun M8  ', 'Chất liệu: Thun 2 Chiều\nThành phần: 100% thun\n- Thân thiện\n- Thấm hút thoát ẩm\n- Mềm mại\n- Kiểm soát mùi\n- Điều hòa nhiệt\n+ Họa tiết in dẻo', 12, '/img/product/1636299292543-31032021040319_1.jpg', 24),
(114, 'Áo Thun M6', 'Chất liệu: Thun 2 Chiều\nThành phần: 100% thun\n- Thân thiện\n- Thấm hút thoát ẩm\n- Mềm mại\n- Kiểm soát mùi\n- Điều hòa nhiệt', 12, '/img/product/1636299307235-31032021090331_1.jpg', 24),
(124, 'Áo Thun M2', 'Chất liệu: Thun co dãn\nThành phần: 100% thun\n- Co dãn 2 chiều\n- Thấm hút mồ hôi tốt mang lại cảm giác thoáng mát', 8, '/img/product/1636299317370-13052021030559_Dai_dien.jpg', 24),
(134, 'Áo Thun M7', 'Chất liệu: Thun dãn\n- Co dãn tốt\n- Thấm hút mồ hôi tốt mang lại cảm giác thoáng mát', 15, '/img/product/1636299326417-13052021040507_Dai_dien.jpg', 24),
(144, 'Sơ Mi M09', 'Chất liệu: Kate\nThành phần: 88% superfine 12% modal\n- Ít Nhăn & Dễ ủi\n- Nhanh Khô & Thoáng mát', 8, '/img/product/1636293416970-14052021030549_dai_dien.jpg', 64),
(154, 'Sơ Mi AV04', 'Chất liệu: Cotton\nThành phần: 99% cotton 1% spandex\n- Độ bền cao\n- Mang đến sự thoải mái ở phần hông và đùi nhưng vẫn rất gọn gàng', 20, '/img/product/1636293237509-14052021020549_Dai_dien.jpg', 64),
(164, 'Sơ Mi AV03', '100% kate', 20, '/img/product/1636293427633-14052021030551_dai_dien.jpg', 64),
(174, 'Sơ Mi AV02', 'Chất liệu: Cotton Compact\nThành phần: 100% Cotton\n- Thân thiện\n- Thấm hút thoát ẩm\n- Mềm mại\n- Kiểm soát mùi\n- Điều hòa nhiệt\n+ Họa tiết in dẻo', 9, '/img/product/1636293438054-16042021110405_1.jpg', 64),
(184, 'Sơ Mi A05', '- Chất liệu: MINI ZURRY\n- Thành Phần:\n+ 94% COTTON\n- Thân thiện\n-Thấm hút thoát ẩm\n- Mềm mại\n- Ít nhăn', 18, '/img/product/1636293453457-13052021040523_Dai_dien.jpg', 64),
(204, 'Quần Jean H1', 'Jean co dãn', 18, '/img/product/1636293475992-h2.jpg', 74),
(205, 'Quần Jean H2', 'Jean co dãn', 25, '/img/product/1636293497231-q2.jpg', 74),
(206, 'Quần Jean H3', 'Vải Jean 100%', 25, '/img/product/1636293507796-h3.jpg', 74),
(207, 'Quần Jean H4', 'Jean co dãn', 20, '/img/product/1636293517751-h4.jpg', 74),
(208, 'Quần Jean H5', 'Jean co dãn', 22, '/img/product/1636293529673-h5.jpg', 74),
(209, 'Short Jean S1', 'Jean 100%', 16, '/img/product/1636294264399-s1.jpg', 104),
(210, 'Short Kaki S2', 'Kaki dày dặn', 10, '/img/product/1636294304588-s2.jpg', 104),
(211, 'Short Kaki S3', 'Kaki dày dặn', 12, '/img/product/1636294469290-s3.jpg', 104),
(212, 'Short Thun S4', 'Thun 100%, dày dặn', 11, '/img/product/1636294529121-s4.jpg', 104),
(213, 'Short Thun S5', 'Thun 100%', 11, '/img/product/1636294563936-s5.jpg', 104),
(214, 'Áo Khoác K1', 'Vải 2 lớp, chất dày dăn.\nMột size từ 45 - 75kg.', 18, '/img/product/1636295910843-K1.jpg', 84),
(215, 'Áo Khoác K2', 'Vải 2 lớp, chất dày dăn.\nMột size từ 45 - 75kg.', 18, '/img/product/1636295943720-k2.jpg', 84),
(216, 'Áo Khoác Kaki K3', 'Vải 2 lớp, chất dày dăn.\nMột size từ 45 - 75kg.', 18, '/img/product/1636295983206-k3.jpg', 84),
(217, 'Áo Khoác Kaki K4', 'Vải 2 lớp, chất dày dăn.\nMột size từ 45 - 75kg.', 20, '/img/product/1636296012794-k4.jpg', 84),
(218, 'Áo Khoác Dù K5', 'Vải 2 lớp, chất dày dăn.\nMột size từ 45 - 75kg.', 19, '/img/product/1636296041874-k5.jpg', 84),
(219, 'Đồng hồ DH2', 'Làm từ kim loại.', 18, '/img/product/1640179795120-dongho1.jpg', 107);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products_has_colors`
--

CREATE TABLE `products_has_colors` (
  `Products_idProducts` int(11) NOT NULL,
  `Colors_idColors` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `products_has_colors`
--

INSERT INTO `products_has_colors` (`Products_idProducts`, `Colors_idColors`) VALUES
(94, 116),
(94, 117),
(94, 124),
(104, 24),
(104, 84),
(114, 24),
(114, 44),
(114, 84),
(124, 117),
(134, 104),
(144, 24),
(144, 84),
(154, 115),
(164, 24),
(164, 84),
(174, 115),
(184, 94),
(204, 119),
(205, 119),
(206, 119),
(207, 119),
(208, 119),
(209, 120),
(210, 122),
(211, 84),
(211, 121),
(212, 119),
(213, 119),
(214, 119),
(215, 119),
(216, 119),
(217, 119),
(218, 119);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products_has_sizes`
--

CREATE TABLE `products_has_sizes` (
  `Products_idProducts` int(11) NOT NULL,
  `Sizes_idSizes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `products_has_sizes`
--

INSERT INTO `products_has_sizes` (`Products_idProducts`, `Sizes_idSizes`) VALUES
(94, 27),
(94, 28),
(94, 44),
(94, 66),
(104, 27),
(104, 28),
(104, 44),
(114, 27),
(114, 44),
(124, 27),
(124, 28),
(124, 34),
(124, 44),
(134, 27),
(134, 28),
(134, 34),
(134, 44),
(144, 34),
(144, 44),
(154, 27),
(154, 28),
(154, 44),
(164, 28),
(164, 34),
(164, 44),
(174, 27),
(174, 28),
(174, 34),
(174, 44),
(184, 27),
(184, 28),
(184, 44),
(204, 54),
(204, 64),
(205, 54),
(205, 64),
(205, 65),
(206, 64),
(207, 54),
(207, 65),
(208, 54),
(208, 64),
(209, 54),
(209, 64),
(210, 54),
(210, 64),
(210, 65),
(211, 28),
(211, 44),
(212, 28),
(212, 44),
(213, 28),
(213, 44),
(215, 66),
(216, 66),
(217, 66),
(218, 66);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `profile`
--

CREATE TABLE `profile` (
  `id_profile` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `avt` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `iduser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `profile`
--

INSERT INTO `profile` (`id_profile`, `firstname`, `lastname`, `avt`, `birthday`, `gender`, `phone`, `address`, `iduser`) VALUES
(134, 'Em', 'Tuấn', '/img/avt/1639484858818-7000da436564f78aebfc9b90eef5ac2e.jpg', '1999-12-04', 'Nam', '0981248796', 'Lê Bình - Cái Răng - CT', 114),
(136, 'Em', 'Tuấn', '/img/avt/1640179462798-277715.jpg', '1999-12-04', 'Nam', '0981248796', 'Mái Dầm, Hậu Giang', 119);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `idReviews` int(11) NOT NULL,
  `iduser` int(11) DEFAULT NULL,
  `idproduct` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `datecmt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `reviews`
--

INSERT INTO `reviews` (`idReviews`, `iduser`, `idproduct`, `rating`, `comment`, `datecmt`) VALUES
(55, 114, 134, 5, 'Áo vải tốt. Like', '2021-11-14 13:29:28'),
(56, 114, 94, 5, 'Áo thun co dãn tốt.', '2021-12-14 12:56:07');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `sizes`
--

INSERT INTO `sizes` (`id`, `name`) VALUES
(27, 'S'),
(28, 'L'),
(29, 'XXL'),
(34, 'XL'),
(44, 'M'),
(54, '29'),
(64, '30'),
(65, '28'),
(66, 'Free Size'),
(67, '31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `role` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `role`) VALUES
(114, 'B1809570', 'emb1809570@student.ctu.edu.vn', '$2a$08$Pesl9ao67UESDR9/X0eHkOv1s.X0hjTtSsWXEIif8yXCDCEvW7c6u', 'USER'),
(115, 'emb1809570', 'em@student.ctu.edu.vn', '$2a$08$YssUX278MjcDqjXLuQziJO5k8QUE3ZUJPZV5Seqh3RRlXQveo2f/u', 'ADMIN'),
(119, 'tuanem1999', 'tuanem1999@gmail.com', '$2a$08$BT.IdRQ4XI/WHlSoYDXkS.ujOG20Fd6Tk/Zgwz7F29LHVS.64GTgK', 'USER');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orderproducts`
--
ALTER TABLE `orderproducts`
  ADD PRIMARY KEY (`idoder`,`idproduct`,`color`,`size`),
  ADD KEY `idproduct` (`idproduct`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idOrder`),
  ADD KEY `iduser` (`iduser`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Chỉ mục cho bảng `products_has_colors`
--
ALTER TABLE `products_has_colors`
  ADD PRIMARY KEY (`Products_idProducts`,`Colors_idColors`),
  ADD KEY `Colors_idColors` (`Colors_idColors`);

--
-- Chỉ mục cho bảng `products_has_sizes`
--
ALTER TABLE `products_has_sizes`
  ADD PRIMARY KEY (`Products_idProducts`,`Sizes_idSizes`),
  ADD KEY `Sizes_idSizes` (`Sizes_idSizes`);

--
-- Chỉ mục cho bảng `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id_profile`,`iduser`),
  ADD KEY `iduser` (`iduser`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`idReviews`),
  ADD KEY `iduser` (`iduser`),
  ADD KEY `idproduct` (`idproduct`);

--
-- Chỉ mục cho bảng `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT cho bảng `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `idOrder` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=479;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=220;

--
-- AUTO_INCREMENT cho bảng `profile`
--
ALTER TABLE `profile`
  MODIFY `id_profile` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `idReviews` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT cho bảng `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orderproducts`
--
ALTER TABLE `orderproducts`
  ADD CONSTRAINT `orderproducts_ibfk_1` FOREIGN KEY (`idoder`) REFERENCES `orders` (`idOrder`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderproducts_ibfk_2` FOREIGN KEY (`idproduct`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products_has_colors`
--
ALTER TABLE `products_has_colors`
  ADD CONSTRAINT `products_has_colors_ibfk_1` FOREIGN KEY (`Products_idProducts`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_has_colors_ibfk_2` FOREIGN KEY (`Colors_idColors`) REFERENCES `colors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products_has_sizes`
--
ALTER TABLE `products_has_sizes`
  ADD CONSTRAINT `products_has_sizes_ibfk_1` FOREIGN KEY (`Products_idProducts`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_has_sizes_ibfk_2` FOREIGN KEY (`Sizes_idSizes`) REFERENCES `sizes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`idproduct`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
