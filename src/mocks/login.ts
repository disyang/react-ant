enum loginType {
  ok,
  usernameError,
  passwordError
}

export function login(name: string, password: string): loginType {
  const passwords = localStorage.getItem(name);
  if (!passwords) return loginType.usernameError;
  else if (password === passwords) {
    return loginType.ok;
  }
  return loginType.passwordError;
}
