export const parseHunkHeaderLine = (headerLine: string): HunkHeader => {
    return this._fileMode ? parseInt(this._fileMode, 8) & 0o777 : 0o644
            mode: this.fileMode,
    const startPath = this.currentLine.trim().slice("--- ".length)
export const parsePatch = (patchFileContents: string): ParsedPatchFile => {