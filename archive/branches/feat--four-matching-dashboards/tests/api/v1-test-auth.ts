import { v1TestConfig } from "./v1-test-config";

export async function loginDemoUser(email: string) {
  const response = await fetch(`${v1TestConfig.gatewayUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-autodefi-test": "true" },
    body: JSON.stringify({ email, password: v1TestConfig.demo.password })
  });

  if (!response.ok) {
    throw new Error(`Login failed for ${email}: ${response.status}`);
  }

  const json = await response.json();
  return json.token || json.accessToken;
}

export function authHeaders(token?: string) {
  return {
    "Content-Type": "application/json",
    "x-autodefi-test": "true",
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}
