// Skip Vercel builds for pull requests using "Ignored Build Step" script
// See https://vercel.com/guides/how-do-i-use-the-ignored-build-step-field-on-vercel
if (
  process.env.VERCEL_GIT_COMMIT_REF === "main" ||
  process.env.VERCEL_GIT_COMMIT_REF === "test" ||
  process.env.VERCEL_GIT_COMMIT_REF === "acceptance" ||
  process.env.VERCEL_GIT_COMMIT_REF === "production"
) {
  // Proceed with the build
  console.log("✅ - Build can proceed");
  process.exit(1);
} else {
  // Don't build
  console.log("🛑 - Build cancelled");
  process.exit(0);
}
