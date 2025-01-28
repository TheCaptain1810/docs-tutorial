import { preloadQuery } from "convex/nextjs";
import { auth } from "@clerk/nextjs/server";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";
import { Document } from "./document";

interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
};

export default withPageAuthRequired(async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  const { getToken } = await auth();
  const token = await getToken({ template: "convex" }) ?? undefined;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token },
  );


  return <Document preloadedDocument={preloadedDocument} />;
}, {
  returnTo({ params }) {
    return `/documents/${params?.documentId}`
  }
});
