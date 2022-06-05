import fs from 'fs'
import path from 'path'

const dir = path.dirname('create.js')

export const create = async () => {
    await fs.stat(
        path.join(dir, 'files', 'fresh.txt'),
        (err) => {
            if (!err) throw new Error('FS operation failed')
        })

    await fs.writeFile(
        path.join(dir, 'files', 'fresh.txt'), 'I am fresh and young',
        (err) => {
            if (err) console.error(err);
        })
};