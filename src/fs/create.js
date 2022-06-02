import fs from 'fs'
import path from 'path'

export const create = async () => {
    return new Promise((resolve, reject) => {
        fs.stat(
            path.join(path.dirname('create.js'), 'files', 'fresh.txt'),
            (err) => {
                if (!err) throw new Error('FS operation failed')
            })

        fs.writeFile(
            path.join(path.dirname('create.js'), 'files', 'fresh.txt'), 'I am fresh and young',
            (err) => {
                // err ? reject(err) : resolve
                if (err) reject(err);
                else resolve()

            })
    })
};