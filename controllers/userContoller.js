import routes from "../routes";

//Join
export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "가입하기" });

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.redirect(routes.join);
  } else {
    // 가입 진행 후 로그인 상태
    res.render(routes.home);
  }
};

//Login
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "로그인" });
export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // 로그아웃 후 홈화면으로 이동
  res.redirect(routes.home);
};
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "프로필" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "프로필 수정" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "비밀번호 변경" });
