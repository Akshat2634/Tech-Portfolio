"use client"

import { motion, AnimatePresence } from "motion/react"
import * as Dialog from "@radix-ui/react-dialog"
import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"
import { Download, X, ExternalLink, FileText } from "lucide-react"
import { ease } from "@/lib/animations"

const RESUME_PATH = "/AkshatSahu_Resume.pdf"

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Dialog.Root open={open} onOpenChange={(next) => { if (!next) onClose() }}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-6 outline-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease }}
              >
                <motion.div
                  className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl glass glass-strong shadow-2xl shadow-primary/10 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: 8 }}
                  transition={{ duration: 0.28, ease }}
                >
                  {/* Top accent gradient */}
                  <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary shrink-0" />

                  {/* Header */}
                  <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 glass-thin shrink-0">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <Dialog.Title className="text-sm font-semibold tracking-tight text-foreground truncate">
                          Akshat Sahu — Resume
                        </Dialog.Title>
                        <Dialog.Description className="text-[11px] font-mono text-muted-foreground truncate">
                          AkshatSahu_Resume.pdf
                        </Dialog.Description>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={RESUME_PATH}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open resume in new tab"
                        onClick={() => track("resume_open_new_tab")}
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-9 w-9 rounded-lg border-border hover:border-primary/40 hover:bg-primary/5"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                      <a
                        href={RESUME_PATH}
                        download="AkshatSahu_Resume.pdf"
                        aria-label="Download resume"
                        onClick={() => track("resume_download")}
                      >
                        <Button className="h-9 px-3.5 sm:px-4 text-[13px] font-semibold rounded-lg bg-gradient-to-r from-primary to-accent/80 hover:from-primary/90 hover:to-accent/70 text-white shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-200">
                          <Download className="h-4 w-4 sm:mr-1.5" />
                          <span className="hidden sm:inline">Download</span>
                        </Button>
                      </a>
                      <Dialog.Close asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Close resume"
                          className="h-9 w-9 rounded-lg hover:bg-muted ml-0.5"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </Dialog.Close>
                    </div>
                  </div>

                  {/* PDF viewer */}
                  <div className="relative flex-1 bg-muted/30">
                    <iframe
                      src={`${RESUME_PATH}#view=FitH&toolbar=1`}
                      title="Akshat Sahu Resume"
                      className="absolute inset-0 w-full h-full"
                    />

                    <div className="md:hidden absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-card border border-border shadow-lg flex items-center justify-between gap-3">
                      <p className="text-[12px] text-muted-foreground leading-snug">
                        Trouble viewing? Open the file directly.
                      </p>
                      <a
                        href={RESUME_PATH}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[12px] font-semibold"
                      >
                        Open
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
