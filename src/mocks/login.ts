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

enum registerType {
  ok,
  passwordError
}

export function register(
  username: string,
  p1: string,
  p2: string
): registerType {
  if (p1 !== p2) return registerType.passwordError;
  localStorage.setItem(username, p1);
  return registerType.ok;
}
