/** Người viết: Nguyễn Tiến Dũng */

/** Khai báo các biến liên kết DOM cần thiết */
const kinhNghiemBox = document.querySelector(".kinh-nghiem"),
  kyNangBox = document.querySelector(".ky-nang"),
  ngonNguBox = document.querySelector(".ngon-ngu"),
  hoatDongBox = document.querySelector(".hoat-dong"),
  hocVanBox = document.querySelector(".hoc-van"),
  soThichBox = document.querySelector(".so-thich");

/**
 * Hiển thị khung View less hoặc View more
 * Thay đổi nội dung khung thành View less hoặc View more tùy vào mục thông tin khung có hiển thị hay không
 */
const showViewOption = function (element) {
  element.classList.add("shadow");
  element.querySelector(".view").classList.remove("hidden");
  if (element.querySelector(".box-content").classList.contains("hidden")) {
    element.querySelector(".view p").textContent = "🔻 View more";
  } else {
    element.querySelector(".view p").textContent = "🔝 View less";
  }
};

/** Ẩn khung View more hoặc View less đi */
const hideViewOption = function (element) {
  element.classList.remove("shadow");
  element.querySelector(".view").classList.add("hidden");
};

/** Ẩn hoặc hiện nội dung của khung */
const contentBoxToggle = function (element) {
  const boxContent = element.querySelector(".box-content");
  boxContent.classList.toggle("hidden");
};

kinhNghiemBox.addEventListener("click", function () {
  const element = kinhNghiemBox;
  contentBoxToggle(element);
  showViewOption(element);
});

kinhNghiemBox.addEventListener("mouseenter", function () {
  const element = kinhNghiemBox;
  const viewOption = element.querySelector(".view");
  showViewOption(element);
});

kinhNghiemBox.addEventListener("mouseleave", function () {
  const element = kinhNghiemBox;
  hideViewOption(element);
});

kyNangBox.addEventListener("click", function () {
  const element = kyNangBox;
  contentBoxToggle(element);
  showViewOption(element);
});

kyNangBox.addEventListener("mouseenter", function () {
  const element = kyNangBox;
  const viewOption = element.querySelector(".view");
  showViewOption(element);
});

kyNangBox.addEventListener("mouseleave", function () {
  const element = kyNangBox;
  hideViewOption(element);
});

ngonNguBox.addEventListener("click", function () {
  const element = ngonNguBox;
  contentBoxToggle(element);
  showViewOption(element);
});

ngonNguBox.addEventListener("mouseenter", function () {
  const element = ngonNguBox;
  const viewOption = element.querySelector(".view");
  showViewOption(element);
});

ngonNguBox.addEventListener("mouseleave", function () {
  const element = ngonNguBox;
  hideViewOption(element);
});

hoatDongBox.addEventListener("click", function () {
  const element = hoatDongBox;
  contentBoxToggle(element);
  showViewOption(element);
});

hoatDongBox.addEventListener("mouseenter", function () {
  const element = hoatDongBox;
  const viewOption = element.querySelector(".view");
  showViewOption(element);
});

hoatDongBox.addEventListener("mouseleave", function () {
  const element = hoatDongBox;
  hideViewOption(element);
});

hocVanBox.addEventListener("click", function () {
  const element = hocVanBox;
  contentBoxToggle(element);
  showViewOption(element);
});

hocVanBox.addEventListener("mouseenter", function () {
  const element = hocVanBox;
  const viewOption = element.querySelector(".view");
  showViewOption(element);
});

hocVanBox.addEventListener("mouseleave", function () {
  const element = hocVanBox;
  hideViewOption(element);
});

soThichBox.addEventListener("click", function () {
  const element = soThichBox;
  contentBoxToggle(element);
  showViewOption(element);
});

soThichBox.addEventListener("mouseenter", function () {
  const element = soThichBox;
  const viewOption = element.querySelector(".view");
  showViewOption(element);
});

soThichBox.addEventListener("mouseleave", function () {
  const element = soThichBox;
  hideViewOption(element);
});
