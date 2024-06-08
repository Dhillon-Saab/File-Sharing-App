import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";
import { draftMode } from "next/headers";

// export default clerkMiddleware();

export default authMiddleware({
  publicRoutes:['/']
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};