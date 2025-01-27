"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useMutation } from "convex/react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";
import { redirect } from "next/navigation";

interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
};

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
    const remove = useMutation(api.documents.removeById);
    const [isRemoving, setIsRemoving] = useState(false);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the document.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsRemoving(true);
                            remove({id: documentId })
                                .catch(() => toast.error("Failed to delete document."))
                                .then(() => {
                                    toast.success("Document deleted successfully.");
                                    redirect("/");
                                })
                                .finally(() => {
                                    setIsRemoving(false);
                                });
                        }}
                        disabled={isRemoving}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};