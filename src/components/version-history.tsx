import { useState } from "react";
import { format } from 'date-fns';
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEditorStore } from "@/store/use-editor-store";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDistanceToNow } from "date-fns";
import { HistoryIcon, StoreIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Id } from "../../convex/_generated/dataModel";

interface VersionHistoryProps {
  documentId: Id<"documents">;
}

export const VersionHistory = ({ documentId }: VersionHistoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { editor } = useEditorStore();
  const versions = useQuery(api.documents.getVersions, { documentId });
  const createVersion = useMutation(api.documents.createVersion);

  const handleCreateVersion = async () => {
    if (!editor) return;
    
    await createVersion({
      documentId,
      content: JSON.stringify(editor.getJSON()),
      title: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    });
  };

  const handleRestoreVersion = (content: string) => {
    if (!editor) return;
    
    const parsedContent = JSON.parse(content);
    editor.commands.setContent(parsedContent);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <HistoryIcon className="h-4 w-4 mr-2" />
          Version History
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Version History</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <Button onClick={handleCreateVersion}>
            Save Current Version
          </Button>
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-4">
              {versions?.map((version) => (
                <div
                  key={version._id}
                  className="p-4 border rounded-lg space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{version.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {version.authorName} •{" "}
                        {formatDistanceToNow(version.timestamp)} ago
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRestoreVersion(version.content)}
                    >
                      <StoreIcon className="h-4 w-4 mr-2" />
                      Restore
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}; 