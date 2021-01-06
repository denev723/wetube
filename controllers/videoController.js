export const home = (req, res) => res.render("home", { pageTitle: "홈" });
export const search = (req, res) => {
  const {
    query: { term },
  } = req;
  res.render("search", { pageTitle: "검색", term });
};
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "업로드" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "비디오" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "비디오 수정" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "비디오 삭제" });
