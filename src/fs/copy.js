import fs from 'fs'
import path from 'path'

const dir = path.dirname('copy.js')

export const copy = async () => {
    await fs.access(path.join(dir, 'files'),
        (err) => {
            if (err) throw new Error('FS operation failed')
        });

    await fs.access(path.join(dir, 'files_copy'),
        (err) => {
            if (!err) throw new Error('FS operation failed')
        });

    await fs.promises.cp(
        path.join(dir, 'files'),
        path.join(dir, 'files_copy'),
        { recursive: true }
    )
};